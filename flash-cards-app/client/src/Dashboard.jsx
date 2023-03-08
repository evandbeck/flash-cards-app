import React from 'react'
import Navbar from './Navbar'

function Dashboard({user}) {
    console.log(user);
  return (
    <div>
        <h1>Dashboard</h1>
        <Navbar user={user}/>
    </div>
  )
}

export default Dashboard