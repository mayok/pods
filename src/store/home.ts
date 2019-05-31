import { observable, action, computed } from 'mobx';

export interface IListItem {
  group: string;
  title: string;
  thumbnail?: string;
}

export interface IThumbnail {
  [key: string]: string;
}

class HomeStore {
  @observable list: IListItem[] = [];
  @observable filter: string | undefined = undefined;
  @observable thumbnail: IThumbnail = {};

  @computed get itemCount() {
    return this.list.length;
  }

  setList(value: IListItem[]) {
    this.list = value;
  }

  setFilter(value: string | undefined) {
    this.filter = value;
  }

  setThumbnail(obj: IThumbnail) {
    this.thumbnail = { ...this.thumbnail, ...obj };
  }
}

export default new HomeStore();
