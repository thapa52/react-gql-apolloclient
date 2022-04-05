import React from 'react'

export default function Home() {
  return (
    <div className='home'>
        <div className='home-text'>
            <h1>Home</h1>
            <p>React with GraphQL and Apollo Client</p>
        </div>
        <div className='home-content'>
            <section className='section-1'>
                <a href='/UsersPage'>UsersPage</a>
            </section>
            <section className='section-2'>
                <a href='/PostsPage'>PostsPage</a>
            </section>
            <section className='section-3'>
                <a href='/AlbumsPage'>AlbumsPage</a>
            </section>
            <section className='section-4'>
                <a href='/PhotosPage'>PhotosPage</a>
            </section>
        </div>
    </div>
  )
}
