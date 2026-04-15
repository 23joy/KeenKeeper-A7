import React from 'react';
import { IoIosAdd } from 'react-icons/io';

const Banner = () => {
    return (
        <div className="hero bg-base-200 max-w-[80%]  container mx-auto m-10">
            <div className="hero-content text-center">
                <div >
                <h1 className="text-3xl font-bold">Friends to keep close in your life</h1>
                <p className="py-6">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the
                    <br />relationships that matter most.
                </p>
                <div className='flex justify-center'>
                    <button className="flex items-center bg-green-950 text-white p-3"><IoIosAdd/>Add a Friend</button>

                </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;