import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({movie}) => {
  
  return (
    <>
      <div className='w-48 px-2'>
        <img alt='Movie Card' src={IMG_CDN_URL + movie} />
      </div>
    </>
  )
}

export default MovieCard 