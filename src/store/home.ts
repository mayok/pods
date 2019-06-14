import { action, observable, runInAction, configure } from 'mobx';
import { provider } from '../provider';
import { IList } from '../provider/api';
import { IListItem, repository } from '../repository';

export interface IThumbnail {
  [key: string]: string;
}

configure({ enforceActions: 'observed' });

class HomeStore {
  @observable list: IListItem[] = repository.list();
  @observable filter?: string = undefined;
  @observable thumbnail: IThumbnail = {};
  @observable updated: Boolean = false;

  @action
  async updateList() {
    // fetch from API once
    if (!this.updated) {
      try {
        const api_list: IList = await provider.list();
        const list: IListItem[] = Object.keys(api_list)
          .map(key =>
            api_list[key].map(name => ({
              group: key,
              shortname: name,
              thumbnail: '',
            }))
          )
          .reduce((acc, val) => [...acc, ...val], []);
        repository.setList(list);
        runInAction(() => {
          this.list = list;
          this.updated = true;
        });
      } catch (error) {
        // do some
      }
    }
  }

  setFilter(value: string | undefined) {
    this.filter = value;
  }

  setThumbnail(obj: IThumbnail) {
    this.thumbnail = { ...this.thumbnail, ...obj };
  }
}

export default new HomeStore();
