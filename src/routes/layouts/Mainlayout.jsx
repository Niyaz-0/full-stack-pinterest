import React from 'react'
import Leftbar from '../../components/Leftbar'
import Topbar from '../../components/Topbar'
import { Outlet } from 'react-router'

export default function Mainlayout() {
  return (
    <div className='flex gap-4'>
      <Leftbar />
      <div className='flex-1 mr-4'>
        <Topbar />
        <Outlet />
      </div>
    </div>
  )
}
