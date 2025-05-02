import React from 'react'
import Image from './Image'

export default function PostInteractions() {
  return (
    <div className='post-interactions'>
         <div className='interaction-icons'>
            <Image path="/general/react.svg" alt="" />
            273
            <Image path="/general/share.svg" alt="" />
            <Image path="/general/more.svg" alt="" />
         </div>
         <div className='saveBtn'>
            <button className='primary-button'>Save</button>
         </div>
    </div>
  )
}
