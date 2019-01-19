export interface IChannelItem {
  title: string;
  url: string;
  type: string;
  date: string;
}

export interface IChannel {
  title: string;
  contents: IChannelItem[];
}

export interface IChannels {
  [key: string]: IChannel;
}
