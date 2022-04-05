import React from 'react'
import { usePosts } from '../hooks/usePosts'

export default function PostsPage() {

    const { error, data, loading } = usePosts();

    if(loading)return<div>loading...</div>
    if(error)return<div>something is wrong</div>


    return (
    <div className='postsPage'>
        <h1>Posts</h1>
        {data.posts.data.map(post => {
            return(
                <div className='posts-content'>
                    <a className='posts-title' href={"/PostsPage/" + post.id}>{post.title}</a>
                    <p className='posts-text'>{post.body}</p>
                    <div className='posts-user'>
                        <a className='post-user-name' href={"/UsersPage/" + post.user.id}>Posted by:-  {post.user.name}</a>
                    </div>
                </div>
            )
        })}
    </div>
  )
}
