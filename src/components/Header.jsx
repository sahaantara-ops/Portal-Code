import React from 'react';
import logo from '../assets/logo2.jpg';
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center gap-3'>
            <img src={logo} className="h-50 w-50" alt="Portal Logo" />
            <p className="text-accent">Journalism without fear or fever</p>
          
            <p>{format(new Date(), "EEEE ,MMMM ,MM")}</p>
        </div>
    );
};

export default Header;