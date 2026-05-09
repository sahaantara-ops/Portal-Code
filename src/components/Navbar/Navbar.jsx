import React from 'react';
import { Link } from 'react-router';
import { NavLink } from 'react-router';
import userIcon from '../../assets/user.png';
import { use } from 'react';
import  AuthContext  from '../../Provider/authContext';

const Navbar = () => {
  const {user,logOut} = use (AuthContext);
  const handleLogout = () => { console.log('logout') 
  logOut().then(()=>{
    alert('logout successful');
  }).catch((error) =>{
    console.log(error);
  });
  };
    return (
        <div className='flex justify-between'>
          <div className="">{user && user.email }</div>
          <div className="nav flex gap-5">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/career">Career</NavLink>
          </div>
          <div className="login-btn flex gap-5 text-accent">
            <img src={user?.avatar || userIcon} alt='user' />
            {user ? <button onClick={handleLogout} className="btn btn-primary px-10">Logout</button> :
             <Link to="/auth/login" className="btn btn-primary px-10">Login</Link>}
            
          </div>
        </div>
    );
};

export default Navbar;