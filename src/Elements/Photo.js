import React from 'react'
import { usePhoto } from '../hooks/usePhoto'
import { useParams } from 'react-router-dom';

export default function Photo() {
    const {id} = useParams()

    const { error, data, loading } = usePhoto(id);

    if(loading) return <div>loading...</div>

    if(error) return <div>something is wrong</div>


  return (
    <div className='photo'>
        <h2>{data.photo.title}</h2>
        <a href={'/AlbumsPage/' + data.photo.id}>Album</a>
        <div className='photo-content'>
            <img src={data.photo.url} height={460} width={460}/>
            <div className='thumbnail-url'>
              <img src={data.photo.thumbnailUrl} /> <br/>
              <img src={data.photo.thumbnailUrl} /> <br/>
              <img src={data.photo.thumbnailUrl} />
            </div>
          </div>
    </div>
  )
}
