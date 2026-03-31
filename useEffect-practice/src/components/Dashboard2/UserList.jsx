import React from 'react'

const UserList = ({user, deleteUser}) => {
  return (
    <div>
        <h1>User List</h1>
        <p>Name: {user.name.firstname} </p>
        <p>Email: {user.email} </p>
        <p>Phone: {user.phone} </p>

        <button onClick={() => deleteUser(user.id)}>Delete</button>
    </div>
  )
}

export default UserList