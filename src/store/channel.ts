import { observable, action, computed } from 'mobx';

class ChannelStore {
  @observable channel_name: string = '';
  @observable channel = {};

  setChannelName(name: string) {
    this.channel_name = name;
  }
  // setChannel
}

export default new ChannelStore();
