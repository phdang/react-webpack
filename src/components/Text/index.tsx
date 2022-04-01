import React from 'react'

interface IText {
  text: string
  className?: string
}

const Text = ( props : IText) => {
  const {text, ...rest} = props
  return <span {...rest}>{text}</span>;
};

export default Text;
