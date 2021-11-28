import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as InfoIcon} from '../../assets/icons/info.svg';
import {ReactComponent as PersonIcon} from '../../assets/icons/person.svg';
import './userCard.css';

export default function UserCard({user}) {
  const {avatar, first_name, last_name, id} = user;

  return (
    <article className='user-card'>
      <div className='user-card__top-container'>
        <div className='user-card__image-container'>
          <img
            src={avatar}
            alt={`${first_name} ${last_name}`}
            className='user-card__image'
          />
        </div>
        <Link to={`${id}`} className='user-card__details-link'
        aria-describedby={`user-${id}`}>
          <InfoIcon className='user-card__icon' aria-hidden='true' />
          See details
        </Link>
      </div>
      <h2 id={`user-${id}`} className='user-card__name'>
      {first_name} {last_name}
      </h2>
      <div className='user-card__id-container'>
        <PersonIcon className='user-card__icon' aria-hidden='true' />
        <span className='user-card__id'>ID: {id}</span>
      </div>
    </article>
  )
}
