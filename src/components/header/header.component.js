import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils'

import { ReactComponent as Logo } from '../../assets/crown.svg';


import './header.styles.scss';

const Header = ({ currentUser }) => (
  <div className='header'>
    <Link className='logo-container' to="/">
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser ? (
        // Note: if current user is an object, it's evaluated as true
        <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
      ) : (
        // Null evalutes to false

        <Link className='option' to='/signin'>SIGN IN</Link>
      )}
    </div>
  </div>
)

export default Header;
