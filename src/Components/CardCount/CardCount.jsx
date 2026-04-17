import React from 'react';

const CardCount = ({friends}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-[80%] container mx-auto'>
            <div className='bg-[#FFFFFF] rounded-xl shadow-gray-300 p-8 text-center'>
                <p>{friends.length}</p>
                <p>Total Friends</p>
            </div>
            <div className='bg-[#FFFFFF] rounded-xl shadow-gray-300 p-8 text-center'>
                <p>3</p>
                <p>On Track</p>
            </div>
            <div className='bg-[#FFFFFF] rounded-xl shadow-gray-300 p-8 text-center'>
                <p>6</p>
                <p>Need Attention</p>
            </div>
            <div className='bg-[#FFFFFF] rounded-xl shadow-gray-300 p-8 text-center'>
                <p>12</p>
                <p>Interactions This Month</p>
            </div>
        </div>
    );
};

export default CardCount;