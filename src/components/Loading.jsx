import React from 'react';
import loadingGif from "../assets/loading.gif"

const Loading = () => {
  return (
    <div className='d-flex justify-content-center align-items-center'>
       <img src={loadingGif} alt="loading" className='w-50'/> 
    </div>
  )
}

export default Loading