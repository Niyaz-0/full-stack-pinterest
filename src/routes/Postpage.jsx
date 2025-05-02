import React from 'react'
import Image from '../components/Image'
import PostInteractions from '../components/PostInteractions'
import { Link } from 'react-router'
import Comments from '../components/Comments'

export default function Postpage() {
  return (
    <div className='post-page flex justify-center gap-8 pt-6'>
      <svg
        height="20"
        viewBox="0 0 24 24"
        width="20"
        style={{ cursor: "pointer" }}
      >
        <path d="M8.41 4.59a2 2 0 1 1 2.83 2.82L8.66 10H21a2 2 0 0 1 0 4H8.66l2.58 2.59a2 2 0 1 1-2.82 2.82L1 12z"></path>
      </svg>

      <div className='post-container'>
        <div className='post-image flex-1 '>
          <Image path="/pins/pin3.jpeg" alt="" w={736} className={"w-full h-full object-cover"} />
        </div>
        <div className="post-details">
          <PostInteractions />
          <Link to="/john" className='post-owner'>
            <Image path="/general/noAvatar.png" alt="" className="w-8 h-8 rounded-full" />
            <span className='text-base'>John Doe</span>
          </Link>
          <Comments />
        </div>
      </div>
    </div>
  )
}
