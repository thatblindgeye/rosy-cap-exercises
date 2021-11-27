import React from 'react';
import './error.css';

export default function Error({heading, message}) {
  return (
    <div className='error-container'>
      <h1>{heading}</h1>
      <p>{message}</p>
    </div>
  )
}
