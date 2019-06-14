import { observable, action, computed, configure } from 'mobx';

interface Component {
  home: string;
  channel: string;
}

configure({ enforceActions: 'observed' });

class AppStore {
  @observable component: keyof Component = 'home';

  @action
  setComponent(value: keyof Component) {
    this.component = value;
  }
}

export default new AppStore();
