import React, { createContext, useReducer } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import ListItem from './components/ListItem';
import { initialState, rootReducer, TStateStore, IStoreAction } from './reducer';

export interface IContext {
  state: TStateStore;
  dispatch: React.Dispatch<IStoreAction>;
}

export const MyContext = createContext<IContext | null>(null);

const App = () => {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  const store = {state, dispatch}
  return (
    <MyContext.Provider value={store}>
      <ListItem />
    </MyContext.Provider>
  );
};
const container = document.getElementById('root');
if (container) {
  ReactDOMClient.createRoot(container).render(<App />);
}
