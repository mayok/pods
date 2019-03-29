import config from './config.json';

type Groups = {
  [key: string]: string[];
};

export type RootState = {
  // application state
  filter: string;
  created: string;
  channel: string | null;

  // application data
  groups: { [key: string]: string[] };
  channels: {
    [key: string]: {
      title: string;
      shortname: string;
      group: string;
      expires: number;
      updated: string;
      contents: [
        {
          name: string;
          url: string;
          type: string;
          date: string;
        }
      ];
    };
  };
};

export type UpdateGroups = {
  type: 'update:groups';
  payload: {
    name: string;
    groups: string[];
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

export type Action = UpdateGroups | Filtering | Select;

export function updateGroups(name: string, groups: string[]): UpdateGroups {
  return {
    type: 'update:groups',
    payload: {
      name,
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
    case 'update:groups': {
      return {
        ...state,
        groups: {
          ...state.groups,
          [action.payload.name]: action.payload.groups,
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
  const groups: Groups = {};
  config.paths.map((path: string) => (groups[path] = []));

  return {
    filter: 'all',
    created: new Date().toISOString(),
    channel: null,
    groups: groups,
    channels: {},
  };
}
