import React from 'react';
import {Link} from 'react-router-dom'
import {ReactComponent as InfoIcon} from '../../assets/icons/info.svg'
import {ReactComponent as PersonIcon} from '../../assets/icons/person.svg'
import './userList.css'

function UserCard() {
  return (
    <article className='user-card'>
      <div className='user-card__top-container'>
        <div className='user-card__image-container'>
          <img
            src='https://reqres.in/img/faces/1-image.jpg'
            alt='George Bluth'
            className='user-card__image'
          />
        </div>
        <Link to=':userID' className='user-card__details-link'
        aria-describedby='user-1'>
          <InfoIcon className='user-card__icon' aria-hidden='true' />
          See details
        </Link>
      </div>
      <h2 id='user-1' className='user-card__name'>
      George Bluth
      </h2>
      <div className='user-card__id-container'>
        <PersonIcon className='user-card__icon' aria-hidden='true' />
        <span className='user-card__id'>ID: 1</span>
      </div>
    </article>
  )
}


export default function UserList() {
  return (
    <>
      <h1>Users</h1>
      <div className='users-container'>
        <UserCard />
      </div>
    </>
  );
}
