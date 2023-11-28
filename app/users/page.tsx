import React from 'react'

interface Users{
    id:number,
    firstname:string
}

const UserPage = async () => {
  const response = await  fetch('https://jsonplaceholder.org/users')
  const users : Users[] = await response.json()

  return (
    <div>
      {users.map((user) => (
        <li key={user.id}>{user.firstname}</li>
      ))}
    </div>
  )
}

export default UserPage
