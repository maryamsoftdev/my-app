import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div>
    <span className='header'>Learning Context Apis</span>
    <ul className='navbar'>
        <li>
            <Link to="/">Home Page</Link>
        </li>
        <li>
            <Link to="/Cart">Cart Page</Link>

        </li>
        

    </ul>
    </div>
  )
}

export default Header;