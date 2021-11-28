import React from 'react';
import './error.css';

export default function Error({heading, message}) {
  return (
    <div className='error-message__container'>
      <h1 className='error-message__heading'>{heading}</h1>
      <p className='error-message__message'>{message}</p>
    </div>
  )
}
