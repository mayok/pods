export interface IList {
  [key: string]: { channel: string; thumbnail?: string }[];
}

export const repository = {
  list: (): IList => {
    return JSON.parse(localStorage.getItem('list') || '{}');
  },
  contents: () => {},
  setList: (list: IList) => {
    localStorage.setItem('list', JSON.stringify(list));
  },
  setContents: () => {},
};
