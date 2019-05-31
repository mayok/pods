import { observable, action, computed } from 'mobx';

class ChannelStore {
  @observable channel = {};
}

export default new ChannelStore();
