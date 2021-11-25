import React from 'react'
import BeatLoader from 'react-spinners/BeatLoader'

import './loading.scss'
const Loading = () => {
  return (
    <div className='loading-container'>
      <BeatLoader color='#fff' loading='true' size='15' margin='5' />
    </div>
  )
}

export default Loading
