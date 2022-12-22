import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center px-6'>
            <div className='text-4xl font-bold'>APP</div>
            <Link onClick={() => localStorage.clear()} to={'/admin/login'}>
                <div className='px-7 rounded-full font-medium py-2 bg-[#9BFF00] text-black my-2
            '>{
                localStorage.getItem('email') && "Logout"
            }</div>
            </Link>
        </div>
    );
};

export default Navbar;