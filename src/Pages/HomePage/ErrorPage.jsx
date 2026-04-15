import React from 'react';
import { NavLink } from 'react-router';

const ErrorPage = () => {
    return (
        <div style={{textAlign:'center' , padding:'50px',}}>
            <h2 className='font-bold text-9xl'>404</h2>
            <h2 className='font-semibold text-2xl'>Oops,page not found!</h2>
            <p className='font-bold'>we cannot find a match for this patient using the information provided</p>
            <NavLink to='/' className='btn mt-4'>Go Home</NavLink>
        </div>
    );
};

export default ErrorPage;