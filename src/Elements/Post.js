import React from 'react'
import { useParams } from 'react-router-dom';
import { usePost } from '../hooks/usePost'

export default function Post() {

    const { id } = useParams();

    const { error, data, loading } = usePost(id);

    console.log({error, loading, data});

    if(loading)return<div>loading...</div>
    if(error)return<div>something is wrong</div>
  return (
    <div className='post'>
      <h1>{data.post.user.name}</h1>
        <h2>{data.post.title}</h2>
        <p>{data.post.body}</p><br/>
        <br/>
        <a href={'/UsersPage/' + data.post.user.id}>UserProfile</a>
    </div>
  )
}
