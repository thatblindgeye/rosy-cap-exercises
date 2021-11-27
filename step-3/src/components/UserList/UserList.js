import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import ErrorMessage from '../Error/ErrorMessage';
import Loading from '../Loading/Loading';
import {ReactComponent as InfoIcon} from '../../assets/icons/info.svg';
import {ReactComponent as PersonIcon} from '../../assets/icons/person.svg';
import fetchData from '../../scripts/fetchData';
import './userList.css';

function UserCard({user}) {
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

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [fetchError, setFetchError] = useState('');

  useEffect(() => {
    fetchData('https://reqres.in/api/users', setUsers, setFetchError);
  }, [])

  if (fetchError) {
    return (
      <ErrorMessage heading={fetchError} message='Unable to load list of users. Please refresh the page to try again.' />
    )
    // Reason for not having an 'isLoading' state: if the users state is an empty array, the component should be considered still loading
  } else if (!users.length) {
    return (
      <Loading />
    )
  } else {
    return (
      <>
        <h1>Users</h1>
        <div className='users-container'>
          {users.map(user => {
            return <UserCard key={user.id} user={user} />
          })}
        </div>
      </>
    );
  }
}
