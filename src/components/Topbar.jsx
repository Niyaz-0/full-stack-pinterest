import React from 'react'
import Userbutton from './Userbutton'
import Image from './Image'

export default function Topbar() {
  return (
    <div className='my-4 flex items-center gap-4'>
      <div className='flex items-center gap-4 flex-1 bg-gray-300 p-3 rounded-xl'>
        <Image path="/general/search.svg" alt="" className='w-5' />
        <input type="text" placeholder='Search..' className='flex-1 outline-none text-lg' />
      </div>
      {/* USER */}
      <Userbutton />
    </div>
  )
}
