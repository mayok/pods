export interface IList {
  list: string[];
  setList: (list: string[]) => void;
  setPod: (pod: string) => void;
}

export interface Channel {
  title: string;
  contents: string[];
}

export interface Channels {
  [key: string]: Channel;
}

export interface IContents {
  pod: string;
  channels: Channels;
  setChannels: (channels: Channels) => void;
}
