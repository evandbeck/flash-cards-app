import React from 'react'

function Navbar({user}) {
    const {username} = user;
  return (
    <div>
        <p>Welcome, {username}!</p>
    </div>
  )
}

export default Navbar