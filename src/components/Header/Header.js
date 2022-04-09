import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import useFirebase from './../../CustomHook/useFirebase';

const Header = () => {
      const {user}=useFirebase();
      return (
            <div className='header-container'>
                  <nav>
                        <Link to='/'> Home </Link>
                        <Link to='/products'> Products </Link>
                        <Link to='/login'> Login </Link>
                        {
                              user.uid?
                               <button>Sing Out</button>
                               :
                              <Link to='/register'> Register </Link>
                        }
                        
                  </nav>
            </div>
      );
};

export default Header;