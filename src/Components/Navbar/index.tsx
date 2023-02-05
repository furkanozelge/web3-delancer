import React from 'react'
import logo from "../../public/images/logo.png"

function Navbar() {
  return (
    <>
    <div className='navbar'>
        <img src={logo} alt='logo'></img>
    <input className='input' placeholder='Search talented freelancers!'></input>
    </div>
    </>
  )
}

export default Navbar;