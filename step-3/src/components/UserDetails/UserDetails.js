import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ErrorMessage from '../Error/ErrorMessage';
import Loading from '../Loading/Loading';
import fetchData from '../../scripts/fetchData';
import './userDetails.css';

export default function UserDetails() {
  const linkParams = useParams();
  const [user, setUser] = useState({});
  const [fetchError, setFetchError] = useState('');

  useEffect(() => {
    fetchData(
      `https://reqres.in/api/users/${linkParams.userID}`, setUser, setFetchError
    );
  }, [linkParams.userID]);

  if (fetchError) {
    return (
      <ErrorMessage
        heading={fetchError}
        message={`Unable to load user data. Please refresh the page to try again`}
      />
    );
    // Allows rendering a loading icon if the 'user' state is an empty object, otherwise this else if block gets skipped
  } else if (!Object.keys(user).length) {
    return <Loading />;
  } else {
    const { avatar, first_name, last_name, email } = user;

    return (
      <article className='details-card'>
        <h1>Details for {first_name}</h1>
        <div className='details-card__container'>
          <div className='details-card__image-container'>
            <img
              className='details-card__image'
              src={avatar}
              alt={`${first_name} ${last_name}`}
            />
          </div>
          <div className='details-card__info-container'>
            <h2 className='details-card__name'>
              {first_name} {last_name}
            </h2>
            <p className='details-card__email'>{email}</p>
          </div>
        </div>
      </article>
    );
  }
}
