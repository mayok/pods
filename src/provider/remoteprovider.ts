import config = require("../config.json");

// fetch channel list
export const getList = () => {
  fetch(`${config.host}:${config.port}/podcast`);
};

// fetch channel contents
export const getContents = (channel: string) => {
  fetch(`${config.host}:${config.port}/podcast/${channel}/`);
};
