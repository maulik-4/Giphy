import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

const App_layout = () => {
  return (
   <div className='bg-black min-h-screen text-white  '>
     <div className='container px-6 py-4 mx-auto'>
        <Header/>
        <main className='bg-blackh-full w-full '>
            <Outlet/>
        </main>
    </div>
   </div>
  )
}

export default App_layout