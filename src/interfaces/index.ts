export interface Item {
  title: string;
  url: string;
  type: string;
  date: string;
}

export interface Channel {
  title: string;
  contents: Item[];
}

export interface Channels {
  [key: string]: Channel;
}
