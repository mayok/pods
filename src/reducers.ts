export type RootState = {
  // application state
  filter: string;
  created: string;
  channel: string | null;

  // application data
  groups: string[];
  channels:
    | [
        {
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
        }
      ]
    | [];
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

export type Action = Filtering | Select;

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
  return {
    filter: 'all',
    created: new Date().toISOString(),
    channel: null,
    groups: ['all'],
    channels: [],
  };
}
