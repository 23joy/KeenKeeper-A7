import React from 'react';
import { FaFacebook, FaSquareInstagram, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
       <footer className=" text-center footer-center bg-green-950 text-primary-content p-10 space-y-5">
            <aside>
                <h2 className="font-bold text-white text-2xl">
                    KeenKeeper
                </h2>
                <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            </aside>
            <nav>
                <h2 className='font-bold'>Social Links</h2>
                <div className='flex justify-center mb-4'>
                    <ul className="flex gap-2">
                        <li className='bg-white p-1 rounded-full text-black'><FaSquareInstagram/></li>
                        <li className='bg-white p-1 rounded-full text-black'><FaFacebook/></li>
                        <li className='bg-white p-1 rounded-full text-black'><FaXTwitter/></li>
                    </ul>
                </div>
                <div className='flex  items-center justify-between'>
                    <div>
                        <p>© 2026 KeenKeeper. All rights reserved.</p>
                    </div>
                    <div className='flex gap-2'>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Cookies</p>
                    </div>
                    
                </div>
            </nav>

        </footer>
    );
};

export default Footer;