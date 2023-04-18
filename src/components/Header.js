import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div>
    <span>Learning Contex Apis</span>
    <ul className='navbar'>
        <li className='prod'>
            <Link to="/">Home Page</Link>
        </li>
        <li className='prod1'>
            <Link to="/Cart">Cart Page</Link>

        </li>
        <li className='prod2'></li>

    </ul>
    </div>
  )
}

export default Header;