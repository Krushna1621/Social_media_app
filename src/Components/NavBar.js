import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
     <navbar>
     <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
     </navbar>
    </div>
  )
}
export default NavBar;