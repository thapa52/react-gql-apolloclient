import React from 'react'
import { useAlbums } from '../hooks/useAlbums';
import PhotoLibraryRoundedIcon from '@material-ui/icons/PhotoLibraryRounded';
import RotateLeftRoundedIcon from '@material-ui/icons/RotateLeftRounded';


export default function AlbumsPage() {
    const { error, data, loading } = useAlbums();

    if(loading) return <div><RotateLeftRoundedIcon />...</div>
    if(error) return <div>something is wrong</div>

  return (
    <div className='albums'>
        <h1>Albums</h1>
      <div className='albumsPage'>
        {data.albums.data.map(album => {
          return (
            <div className='albums-content'>
              <PhotoLibraryRoundedIcon color="action"  fontSize={"large"}/><br/>
                <a href={'/AlbumsPage/' + album.id}><p>{album.title}</p></a>
            </div>
          )
        })}
      </div>
    </div>
  )
}
