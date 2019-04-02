import config from './config.json';

type Groups = {
  [key: string]: string[];
};

export type Channel = {
  title: string;
  last_updated: string;
  contents: [
    {
      name: string;
      url: string;
      type: string;
      date: string;
    }
  ];
};

export type RootState = {
  // application state
  filter: string;
  channel: string | null;
  running_process: number;
  queue: string[];

  // application data
  groups: Groups;
  channels: {
    [key: string]: Channel;
  };
};

export type IncrementRunningProcess = {
  type: 'increment';
};

export type DecrementRunningProcess = {
  type: 'decrement';
};

export type UpdateChannels = {
  type: 'update:channels';
  payload: {
    name: string;
    channel: Channel;
  };
};

export type UpdateGroups = {
  type: 'update:groups';
  payload: {
    groups: Groups
  };
};

export type Filtering = {
  type: 'filtering';
  payload: {
    group: string;
  };
};

export type Select = {
  type: 'select';
  payload: {
    name: string | null;
  };
};

export type Action =
  | UpdateGroups
  | Filtering
  | Select
  | UpdateChannels
  | IncrementRunningProcess
  | DecrementRunningProcess;

export function incrementRunningProcess(): IncrementRunningProcess {
  return {
    type: 'increment',
  };
}

export function decrementRunningProcess(): DecrementRunningProcess {
  return {
    type: 'decrement',
  };
}

export function updateChannels(name: string, channel: Channel): UpdateChannels {
  return {
    type: 'update:channels',
    payload: {
      name,
      channel,
    },
  };
}

export function updateGroups(groups: Groups): UpdateGroups {
  return {
    type: 'update:groups',
    payload: {
      groups,
    },
  };
}

export function filtering(group: string): Filtering {
  return {
    type: 'filtering',
    payload: {
      group,
    },
  };
}

export function select(name: string | null): Select {
  return {
    type: 'select',
    payload: {
      name,
    },
  };
}

export function reducer(state: RootState, action: Action): RootState {
  switch (action.type) {
    case 'increment': {
      return {
        ...state,
        running_process: state.running_process + 1,
      };
    }
    case 'decrement': {
      return {
        ...state,
        running_process: state.running_process - 1,
      };
    }
    case 'update:channels': {
      return {
        ...state,
        channels: {
          ...state.channels,
          [action.payload.name]: action.payload.channel,
        },
      };
    }
    case 'update:groups': {
      return {
        ...state,
        groups: {
          ...state.groups,
          ...action.payload.groups,
        },
      };
    }
    case 'filtering': {
      return {
        ...state,
        filter: action.payload.group,
      };
    }
    case 'select': {
      return {
        ...state,
        channel: action.payload.name,
      };
    }
    default: {
      return state;
    }
  }
}

export function getInitialState(): RootState {
  const groups: { [key: string]: string[] } = {};
  config.paths.map((path: string) => (groups[path] = []));

  return {
    running_process: 0,
    queue: [],
    filter: 'all',
    channel: null,
    groups,
    channels: {},
  };
}
