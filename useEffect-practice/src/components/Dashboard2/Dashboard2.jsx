import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserList from './UserList';

const Dashboard2 = () => {

  const [allUsers, setAllUsers] = useState([])

  let fetchUserData = async () => {
    try {
      let res = await axios.get('https://fakestoreapi.com/users');
      setAllUsers(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error('Failed to fetch users:', error.message);
      setAllUsers([]);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [])


  let deleteUser = (UserId) => {
    console.log(UserId);
  }

  return (
    <div>
      <h1>Dashboard2</h1>
      <div>
        {
          allUsers.map((elem) => {
            return <UserList deleteUser={deleteUser} key={elem.id} user={elem} />;
          })
        }
      </div>
    </div>
  )
}

export default Dashboard2
