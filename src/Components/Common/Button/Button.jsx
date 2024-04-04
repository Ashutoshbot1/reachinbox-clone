import React from 'react';
import './Button.scss';

const Button = ({text,onClickFunction}) => {
  return (
    <div className='primaryButton' onClick={onClickFunction}>
      {text}
    </div>
  )
}

export default Button
