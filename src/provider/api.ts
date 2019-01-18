import * as convert from "xml-js";
import config = require("../config.json");

// fetch channel list
export const fetchList = async () => {
  const response = await fetch(`${config.host}:${config.port}/podcast`);
  const list = await response.json();

  // format

  return list;
};

// fetch channel contents
export const fetchContents = async (channel: string) => {
  // todo: think when server returns error
  const response = await fetch(`${config.host}:${config.port}/podcast/${channel}/`);
  const xml = await response.text();

  // parse xml to js
  // todo: fix type
  const js = convert.xml2js(xml, { compact: true, trim: true });

  // format

  return js;
};
