import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <button classname = 'b1 upload'>Upload</button>
      <button className='b1 download'>Download</button>
      <button className='b1 process'>Process the data</button>
    </div>
  )
}

export default Navbar
