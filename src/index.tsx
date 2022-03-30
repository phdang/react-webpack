import React, { useMemo, useState } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import Item from './components/Item';
import './style.css';
const App = () => {
  const [items, setItem] = useState([
    { value: '' },
    { value: '' },
    { value: '' },
  ]);
  const onChange = useMemo(() => (id: number, value: string) => {
    setItem(prevItems => prevItems.map((item, index) => {
      return index !== id ? item : { value };
    }))}, [])

  return (
    <div>
      <h1>This is so great!</h1>
      <div>{JSON.stringify(items)}</div>
      <ul className='list-item'>
        {items.length &&
          items.map((el, index) => {
            return (
              <Item
                key={index}
                value={el.value}
                id={index}
                onChange={onChange}
              />
            );
          })}
      </ul>
    </div>
  );
}
const container = document.getElementById('root');
if (container) {
  ReactDOMClient.createRoot(container).render(<App />);
}
