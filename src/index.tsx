import React, { createContext } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import ListItem from './components/ListItem';

export interface IContext {
  name: string
  text: string
}

export const MyContext = createContext<IContext|null>(null);

const App = () => {
  const contextData = { name: 'Dang', text: 'This is so great!' };
  return (
    <MyContext.Provider value={contextData}>
      <ListItem />
    </MyContext.Provider>
  );
};
const container = document.getElementById('root');
if (container) {
  ReactDOMClient.createRoot(container).render(<App />);
}
