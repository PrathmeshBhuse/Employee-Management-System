import React, { useState } from 'react'

const Header = (props) => {
  
  const logOutUser=()=>{
    localStorage.setItem('loggedInUser','')
    // window.location.reload()
    props.changeUser('')
   
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Let's Create  <span className='text-3xl font-semibold'> 👋</span>  </h1>
      <button onClick={logOutUser} className='bg-red-600 text-lg font-medium text-white  px-5 py-2 rounded-sm'>Logout</button>
    </div>
  )
}

export default Header
