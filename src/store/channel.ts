import { action, configure, observable, reaction, runInAction } from 'mobx';
import { provider } from '../provider';
import { repository } from '../repository';

export interface IChannel {
  title: string;
  last_updated: string;
  contents: IContent[];
}

export interface IContent {
  name: string;
  url: string;
  type: string;
  date: string;
}

configure({ enforceActions: 'observed' });

class ChannelStore {
  @observable channel_name?: string = undefined;
  @observable channel?: IChannel = undefined;
  @observable group?: string = undefined;
  @observable shortname?: string = undefined;

  reaction1 = reaction(
    () => ({ group: this.group, shortname: this.shortname }),
    async obj => {
      if (!!obj.group && !!obj.shortname) {
        this.channel = repository.contents(obj.shortname);

        const channel = await provider.contents(obj.group, obj.shortname);
        runInAction(() => {
          this.channel = channel;
        });
      }
    }
  );

  @action
  async updateChannel(group: string, shortname: string) {
    // fetch from api
    const channel = await provider.contents(group, shortname);
    runInAction(() => {
      this.channel = channel;
    });
  }

  @action
  clear() {
    this.channel = undefined;
    this.group = undefined;
    this.shortname = undefined;
  }

  // deprecated
  @action
  setChannelName(name: string) {
    this.channel_name = name;
  }

  @action
  setChannel(group: string, shortname: string) {
    this.group = group;
    this.shortname = shortname;
  }
}

export default new ChannelStore();
