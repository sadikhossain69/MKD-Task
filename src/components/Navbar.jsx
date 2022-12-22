import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center px-6'>
            <div className='text-4xl font-bold'>APP</div>
            <div className='px-7 rounded-full font-medium py-2 bg-[#9BFF00] text-black my-2
            '>Logout</div>
        </div>
    );
};

export default Navbar;