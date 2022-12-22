import React from 'react';

const LeaderBoard = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center px-6 mt-10'>
            <div className='text-3xl '>Today’s leaderboard</div>
            <div className='flex flex-col md:flex-row px-7 md:rounded-full rounded-md font-medium py-2 bg-[#1D1D1D] my-2 space-x-4 items-center
            '>
                <div>30 May 2022</div>
                <div className='bg-[#9BFF00] text-black rounded-lg px-4 py-1'>Submissions OPEN</div>
                <div>11:34</div>
            </div>
        </div>
    );
};

export default LeaderBoard;