export interface IChannels {
  [key: string]: IChannel;
}
export interface IChannel {
  title: string;
  contents: IChannelItem[];
}
export interface IChannelItem {
  title: string;
  url: string;
  type: string;
  date: string;
}

export interface IList {
  [key: string]: IChannelList;
}
export interface IChannelList {
  channels: string[];
}

export interface IPods {
  group: string;
  name: string;
}
