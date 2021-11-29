import React, {useState, useEffect} from 'react';
import UserCard from '../UserCard/UserCard';
import ErrorMessage from '../Error/ErrorMessage';
import Loading from '../Loading/Loading';
import fetchData from '../../scripts/fetchData';
import './userList.css';

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
      <div className='user-list-container'>
        <h1>Users</h1>
        <div className='user-cards-container'>
          {users.map(user => {
            return <UserCard key={user.id} user={user} />
          })}
        </div>
      </div>
    );
  }
}
