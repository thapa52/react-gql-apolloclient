import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useUser } from '../hooks/useUser'
import './css/style.css'

export default function User() {

    const { id } = useParams();

    const [ isExpand, setIsExpand ] = useState(false);
    const [ isTrue, setIsTrue ] = useState(false);

    const { error, loading, data } = useUser(id);

    if(loading)return<div>loading...</div>
    if(error)return<div>something is wrong</div>

    function handleClick(){
        setIsExpand(!isExpand)
    }
    function handleInfo() {
        setIsTrue(!isTrue)
    }


  return (
    <div className='user'>
        <h1>{data.user.name}</h1>
        <h2>UserName: {data.user.username}</h2>
        <div className='link'>
            <a href='/PostsPage'>Users Post</a>
            <a href='/AlbumsPage'>User Album</a>
        </div>
        <div className='user-button'>
            <div className='user-btn-content'>
                <button onClick={handleInfo} className='info-btn'>Contact Info</button>
                <div className='content'>
                    {isTrue?
                        <div className='btn-content info'>
                            <p>phoneno:- {data.user.phone}</p>
                            <p>email:-   {data.user.email}</p>
                            <p>website:- {data.user.website}</p>
                            <p>company:- {data.user.company.name}</p>
                        </div>
                    :
                        null
                    }
                </div>
            </div>
            <div className='user-btn-content'>
                <button onClick={handleClick} className='address-btn'>Address</button>
                <div className='content'>
                    {isExpand?
                            <div className='btn-content address'>
                                <p>Street:  <i>{data.user.address.street}</i></p>
                                <p>Suite:   <i>{data.user.address.suite}</i></p>
                                <p>City:    <i>{data.user.address.city}</i></p>
                                <p>ZipCode: <i>{data.user.address.zipcode}</i></p>
                            </div>
                        :
                            null
                    }
                </div>
            </div>
        </div>      
    </div>
  )
}
