export interface IListItem {
  group: string;
  shortname: string;
  thumbnail?: string;
}

export const repository = {
  list: (): IListItem[] => {
    return JSON.parse(localStorage.getItem('list') || '[]');
  },
  contents: (shortname: string) => {
    const item = localStorage.getItem(`${shortname}`);
    if (item) {
      return JSON.parse(item);
    }
    return item;
  },
  setList: (list: IListItem[]) => {
    localStorage.setItem('list', JSON.stringify(list));
  },
  setContents: (title: string) => {},
};
