import { observable, action, computed } from 'mobx';

interface Component {
  home: string;
  channel: string;
}

class AppStore {
  @observable component: keyof Component = 'home';

  setComponent(value: keyof Component) {
    this.component = value;
  }
}

export default new AppStore();
