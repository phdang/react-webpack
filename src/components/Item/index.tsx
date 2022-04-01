import React, { memo, useContext, useReducer } from 'react';
import { IContext, MyContext } from '../..';
import './item.css';

interface ItemProps {
  id: number;
  value: string | number;
  onChange: (id: number, value: string) => void;
}

interface IAction {
  type: 'INCREMENT' | 'DECREMENT';
  payload: number;
}

interface IState {
  counter: number;
}

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case 'INCREMENT':
    case 'DECREMENT':
      return { ...state, counter: action.payload };
    default:
      return state;
  }
};

const initialState: IState = {
  counter: 0,
};

const Item = ({ id, value, onChange }: ItemProps) => {
  const { state: stateStore, dispatch: dispatchStore } = useContext(MyContext) as IContext
  const { name } = stateStore
  console.log(`${name.value} is passed from context`);
  console.log('RENDERED!');
  const [state, dispatch] = useReducer(reducer, initialState);
  const { counter } = state;
  return (
    <li className='item'>
      <span className='fade-out text-animation'>Rendered</span>
      <div>
        <button
          onClick={() => {
            dispatch({ type: 'INCREMENT', payload: counter + 1 });
          }}
        >
          Click + here
        </button>
        <button
          onClick={() => {
            dispatch({ type: 'DECREMENT', payload: Math.max(0, counter - 1) });
          }}
        >
          Click - here
        </button>
        <p>{state.counter}</p>
      </div>
      <input
        type='text'
        value={value}
        onChange={(e) => {onChange(id, e.target.value); dispatchStore({type: 'CHANGE_NAME', payload: e.target.value})}}
      />
    </li>
  );
};

export default memo(Item);
