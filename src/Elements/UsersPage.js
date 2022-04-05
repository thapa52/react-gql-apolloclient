import React from 'react'
import { useUsers } from '../hooks/useUsers'

export default function UsersPage() {

    const { error, loading, data } = useUsers()

    if(loading)return<div>loading...</div>
    if(error)return<div>something is wrong</div>

  return (
    <div className='usersPage'>
        <h1>Users</h1>
        <div className='users-text'>
            <li>Name</li><li>PhoneNo</li>
        </div>
        {data.users.data.map(user => {
            return(
                <div className='users-content'>
                    <a href={"/UsersPage/" + user.id}><li>{user.name}</li><li>{user.phone}</li></a>
                </div>
            )
        })}
    </div>
  )
}

