export type RootState = {
  filter: string;
  created: string;
  channels:
    | [
        {
          name: string;
          shortname: string;
          group: string;
          expires: number;
          updated: string;
          contents: [
            {
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

export type Hoge = {
  type: 'hoge';
};

export type Action = Filtering | Hoge;

export function filtering(group: string): Filtering {
  return {
    type: 'filtering',
    payload: {
      group,
    },
  };
}

export function reducer(state: RootState, action: Action): RootState {
  switch (action.type) {
    case 'hoge': {
      return {
        ...state,
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
    channels: [],
  };
}
