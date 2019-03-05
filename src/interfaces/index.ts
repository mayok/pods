export interface Channels {
  channels: Channel[];
}

export interface Channel {
  name: string;
  shortname: string;
  group: string;
  contents: Content[];
}

export interface Content {
  url: string;
  type: string;
  date: string;
}
