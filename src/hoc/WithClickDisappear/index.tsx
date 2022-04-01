import React, { MouseEvent } from 'react';

const withClickDisappear = (WrapppedComponent: (props: any) => JSX.Element) => {
  const clickHandler = (event: MouseEvent<HTMLDivElement>) => {
    event.currentTarget.remove()
  }
  return (props: any) => {
    return (
      <div onClick={clickHandler}>
        <WrapppedComponent {...props}/>
      </div>
    );
  };
};

export default withClickDisappear;
