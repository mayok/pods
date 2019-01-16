export interface IList {
  list: string[];
  setList: (list: string[]) => void;
  setPod: (pod: string) => void;
}

export interface Channel {
  item: string;
}

export interface IContents {
  pod: string;
  channel: Channel[];
  setChannel: (channel: Channel[]) => void;
}
