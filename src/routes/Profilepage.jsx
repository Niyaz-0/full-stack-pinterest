import React, { useState } from 'react'
import Image from '../components/Image'
import Collections from '../components/Collections';
import Gallery from '../components/Gallery'

export default function Profilepage() {

  const [type, setType] = useState("saved");

  return (
    <div className='profilePage'>
        <Image path="/general/noAvatar.png" alt="" w={100} h={100} className="profileImage" />
        <h1 className="profileName">John Doe</h1>
        <span className="profileUsername">@johndoe123</span>
        <div className="followerCounts">2 followers . 5 following</div>
      
      <div className='profileInteractions'>
        <Image path="/general/share.svg" alt="" />
        <div className='flex gap-4'>
        <button className='bg-gray-200 rounded-3xl px-4 py-3 cursor-pointer w-max font-medium hover:bg-gray-300'>Message</button>
        <button className='primary-button'>Follow</button>
        </div>
        <Image path="/general/more.svg" alt="" />
      </div>
      <div className='profileOptions'>
        <span className={`profileOption ${type === "created" ? "active" : ""}`} onClick={() => setType("created")}>Created</span>
        <span className={`profileOption ${type === "saved" ? "active" : ""}`} onClick={() => setType("saved")}>Saved</span>
      </div>
      {type === "created" ? <Gallery /> : <Collections />}
    </div>
  )
}
