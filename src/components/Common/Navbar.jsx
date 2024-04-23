import React from 'react';
import triangle from '../../assets/POLY1.png';

function Navbar() {
    return (
        <div className='relative'>
            <nav className='flex items-center px-10 font-myFont'>
                <img src="/LOGOLLKLKLKL.png" alt="" className='w-[10vw] cursor-pointer z-20' style={{ width: '10vw' }} />

                <img src={triangle} alt=""
                    className='absolute z-10 max-w-full'
                    style={{ top: '-48%', left: '-10%', transform: 'scale(2.5)', width: '25vw', height: '30vw' }} />
            </nav>
        </div>
    );
}

export default Navbar;
