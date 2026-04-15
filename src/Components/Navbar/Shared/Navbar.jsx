import React from 'react';
import { GoHome } from 'react-icons/go';
import { IoTimeOutline } from 'react-icons/io5';
import { TfiStatsUp } from 'react-icons/tfi';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className="flex p-5 bg-base-100 shadow-sm">
            <div className="flex-1">
                <a className="text-xl text-black font-bold">keen<span className='text-green-900'>Keeper</span></a>
            </div>
            <div>
                <ul className="flex gap-5">
                    <li ><NavLink to='/' className={({isActive})=>`flex gap-1 items-center p-1 ${isActive && 'text-white bg-green-900'}`}><GoHome></GoHome> Home</NavLink></li>
                    <li><NavLink  to='/Friends' className={({isActive})=>`flex gap-1 items-center p-1 ${isActive && 'text-white bg-green-900'}`}><IoTimeOutline/>Timeline</NavLink></li>
                    <li><NavLink to='/error' className={({isActive})=>`flex gap-1 items-center p-1 ${isActive && 'text-white bg-green-900'}`}><TfiStatsUp />Stats</NavLink> </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;