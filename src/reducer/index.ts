import { nameReducer, initialNameState } from "./nameReducer";
import { textReducer, initialTextState } from "./textReducer";

const combineReducers = (reducers: any) => (state: any, action: any) => {
  return Object.keys(reducers).reduce( 
      (acc, prop) => ({
        ...acc,
        [prop]: reducers[prop](acc[prop], action),
      }),
      state
  );
}

const rootReducers = {
  name: nameReducer,
  text: textReducer
}

const initialState = {
  name: initialNameState,
  text: initialTextState
}

export type TStateStore = typeof initialState
export type IStoreAction = {
  type: 'CHANGE_NAME' | 'CHANGE_TEXT'
  payload: string
}
export type TRootReducers = typeof rootReducers

const rootReducer = combineReducers(rootReducers);

export { rootReducer, initialState}