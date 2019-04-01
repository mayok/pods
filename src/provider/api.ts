import * as convert from 'xml-js';
import config from '../config.json';
import { Channel } from '../reducers';

// fetch channel list
export const fetchList = async (path: string): Promise<string[]> => {
  const response = await fetch(`${config.host}/${path}/`);
  const list = await response.json();

  // todo:
  return list.channels;
};

// fetch channel contents
export const fetchContents = async (path: string, channel: string): Promise<Channel> => {
  // todo: think when server returns error
  const response = await fetch(`${config.host}/${path}/${channel}/`);
  const xml = await response.text();

  const _json = convert.xml2json(xml, { compact: true, trim: true });
  const json = JSON.parse(_json);

  // memo: xml-js has alwaysArray options
  if (json.rss.channel.item instanceof Array) {
    const contents = json.rss.channel.item
      .map((e: any) => ({
        name: e.title._text,
        url: e.guid._text,
        type: e.enclosure._attributes.type,
        date: e.pubDate._text,
      }))
      .reverse();

    // todo: return contents
    return {
      title: json.rss.channel.title._text,
      last_updated: contents[0].date,
      contents,
    };
  }

  return {
    title: json.rss.channel.title._text,
    last_updated: json.rss.channel.item.pubDate._text,
    contents: [
      {
        name: json.rss.channel.item.title._text,
        url: json.rss.channel.item.guid._text,
        type: json.rss.channel.item.enclosure._attributes.type,
        date: json.rss.channel.item.pubDate._text,
      },
    ],
  };
};
