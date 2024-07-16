import React from 'react'
import Home from '../components/Home'
import Sidebar from '../../sidebar/Sidebar'
import Navbar from '../../Shared/Navebar'

const Dashboard = () => {
  return (
    <div>
     <div className='flex w-full'> 
      <div className='w-[18%]'>

     <Sidebar />
      </div>
      <div className='w-[80%] '>
      <Navbar/>
      <Home/>
      </div>
     </div>
      
    </div>
  )
}

export default Dashboard