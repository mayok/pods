import * as convert from "xml-js";
import config = require("../config.json");
import { IChannel } from "../interfaces";

interface IList {
  channels: string[];
}
interface IContents {
  [x: string]: IChannel;
}

// fetch channel list
export const fetchList = async (): Promise<string[]> => {
  const response = await fetch(`${config.host}:${config.port}/podcast/`);
  const list: IList = await response.json();

  return list.channels;
};

// fetch channel contents
export const fetchContents = async (channel: string): Promise<IContents> => {
  // todo: think when server returns error
  const response = await fetch(`${config.host}:${config.port}/podcast/${channel}/`);
  const xml = await response.text();

  const json_string = convert.xml2json(xml, { compact: true, trim: true });
  const json = JSON.parse(json_string);

  // memo: xml-js has alwaysArray options
  if (json.rss.channel.item instanceof Array) {
    return {
      [channel]: {
        title: json.rss.channel.title._text,
        contents: json.rss.channel.item.map((e: any) => ({
          title: e.title._text,
          url: e.guid._text,
          type: e.enclosure._attributes.type,
          date: e.pubDate._text
        }))
      }
    };
  }

  return {
    [channel]: {
      title: json.rss.channel.title._text,
      contents: [
        {
          title: json.rss.channel.item.title._text,
          url: json.rss.channel.item.guid._text,
          type: json.rss.channel.item.enclosure._attributes.type,
          date: json.rss.channel.item.pubDate._text
        }
      ]
    }
  };
};
