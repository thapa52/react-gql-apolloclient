import React from 'react'
import { useParams } from 'react-router-dom';
import { useAlbum } from '../hooks/useAlbum'

export default function Album() {
    const { id } = useParams()

    const { error, data, loading} = useAlbum(id);

    if(loading) return <div>loading...</div>
    if(error) return <div>something is wrong</div>

  return (
    <div className='album'>
        <div className='album-content'>
          <h1>{data.album.title}</h1>
          <p>{data.album.user.name}</p>
          <a href='/PhotosPage'>Photos</a>
        </div>
    </div>
  )
}
