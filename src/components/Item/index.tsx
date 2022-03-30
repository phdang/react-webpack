import React, { memo } from 'react';
import './item.css';

interface ItemProps {
  id: number;
  value: string | number;
  onChange: (id: number, value: string) => void;
}

const Item = ({ id, value, onChange }: ItemProps) => {
  console.log('RENDERED!');
  return (
    <li className='item'>
      <span className="fade-out text-animation">Rendered</span>
      <input
        type='text'
        value={value}
        onChange={(e) => onChange(id, e.target.value)}
      ></input>
    </li>
  );
};

export default memo(Item);
