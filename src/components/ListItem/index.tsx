import React, { useContext, useMemo, useState } from 'react';
import { IContext, MyContext } from '../..';

import Item from '../Item';
import './style.css';

const ListItem = () => {
  const { state, dispatch: dispatchStore } = useContext(MyContext) as IContext;
  const { name, text } = state;
  const [items, setItem] = useState([
    { value: '' },
    { value: '' },
    { value: '' },
  ]);
  const onChange = useMemo(
    () => (id: number, value: string) => {
      setItem((prevItems) =>
        prevItems.map((item, index) => {
          return index !== id ? item : { value };
        })
      );
    },
    []
  );
  return (
    <div>
      <h1>{text.value}</h1>
      <p>{name.value}</p>
      <input
        className='input-text'
        type='text'
        value={text.value}
        onChange={(e) => {
          dispatchStore({ type: 'CHANGE_TEXT', payload: e.target.value });
        }}
      />
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
};

export default ListItem;
