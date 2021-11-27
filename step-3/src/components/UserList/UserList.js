import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import ErrorMessage from '../Error/ErrorMessage';
import Loading from '../Loading/Loading';
import {ReactComponent as InfoIcon} from '../../assets/icons/info.svg'
import {ReactComponent as PersonIcon} from '../../assets/icons/person.svg'
import './userList.css'

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
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState('');

  const fetchUserList = async (url) => {
    try {
      const response = await fetch(url, {
        mode: 'cors'
      });
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const responseData = await response.json();
      setIsLoading(false);
      setUsers(responseData.data);
    } catch (error) {
      setFetchError(error.message);
      console.error(error);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      fetchUserList('https://reqres.in/api/users');

    }, 5000)
  }, [])

  if (fetchError) {
    return (
      <ErrorMessage heading={fetchError} message='Unable to fetch users list. Please refresh the page to try again.' />
    )
  } else if (isLoading) {
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
