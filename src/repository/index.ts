export interface IList {
  group: string;
  title: string;
  thumbnail?: string;
}

export const repository = {
  list: (): IList[] => {
    return JSON.parse(localStorage.getItem('list') || '[]');
  },
  contents: () => {},
  setList: (list: IList[]) => {
    localStorage.setItem('list', JSON.stringify(list));
  },
  setContents: () => {},
};
