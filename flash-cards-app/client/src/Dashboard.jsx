import React from 'react'
import Navbar from './Navbar';
import ListsContainer from './ListsContainer';

function Dashboard({user}) {
    console.log(user);
  return (
    <div>
        <h1>Dashboard</h1>
        <Navbar user={user}/>
        <ListsContainer />
    </div>
  )
}

export default Dashboard