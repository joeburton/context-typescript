import React, { createContext, useReducer } from "react";

const DEFAULT_STATE: State = {
  active: true,
  comments: [],
};

type State = {
  active: boolean;
  comments: Array<any>;
};

export enum ACTION_NAME {
  ON,
  OFF,
  UPDATE_COMMENTS,
}

type Action = {
  type: ACTION_NAME;
  payload?: any;
};

type ComponentContext = [State, React.Dispatch<Action>];

export const AppContext: React.Context<ComponentContext> = createContext([
  DEFAULT_STATE,
  ({ type, payload }) => {},
]);

const reducer = (state: State, { type, payload }: Action) => {
  switch (type) {
    case ACTION_NAME.ON:
      return { ...state, active: true };
    case ACTION_NAME.OFF:
      return { ...state, active: false };
    case ACTION_NAME.UPDATE_COMMENTS:
      return { ...state, comments: payload };
    default:
      return state;
  }
};

export const AppProvider = (props: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, DEFAULT_STATE);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {props.children}
    </AppContext.Provider>
  );
};
