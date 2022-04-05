import React from 'react'
import { usePhotos } from '../hooks/usePhotos';





export default function PhotosPage() {

    const { error, data, loading } = usePhotos()


    if(loading) return <div>loading...</div>

    if(error) return <div>something is wrong</div>

    

  return (
    <div>
      <h1 className='photosPage-title'>Photos</h1>
      <div className='photosPage'>
        {data.photos.data.map(photo => {
           return(
                <div className='photosPage-content'>
                  <a href={'/PhotosPage/' + photo.id}><img src={photo.url} /></a>
                  <p>{photo.title}</p>
                  {/* <p>THUMBNAILURL: <img src={photo.thumbnailUrl} /></p> */}
                </div>
           ) 
        })}
      </div>
    </div>
  )
}
