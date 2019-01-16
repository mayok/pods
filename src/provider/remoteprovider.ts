import * as convert from "xml-js";
import config = require("../config.json")

// fetch channel list
export const getList = async () => {
  const response = await fetch(`${config.host}:${config.port}/podcast`)
  return await response.text()
}

// fetch channel contents
export const getContents = async (channel: string) => {
  const response = await fetch(`${config.host}:${config.port}/podcast/${channel}/`)
  const xml = await response.text();

  // parse xml to js
  // todo: fix type
  const js = convert.xml2js(xml, {compact: true, trim: true})

  // format

  return js;
}