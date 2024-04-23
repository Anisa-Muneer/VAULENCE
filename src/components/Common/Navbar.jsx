import React from 'react'
import './Navbar.css'
import triangle from '../../assets/POLY.png'


function Navbar() {
    return (
        <div className='container'>

            <nav className='flex items-center px-10 font-myFont'>
                <img src="/LOGOLLKLKLKL.png" alt="" className=' logo' />
                <img src={triangle} className='firstImage' alt="" />
                {/* <ul className='hidden md:flex flex-1 text-left '>
                    <li className='list-none inline-block px-5' style={{ color: '#424242' }}> <a href="#" className='no-underline text-#424242 px-2'> INCRIPTIONS </a></li>
                    <li className='list-none inline-block px-5' style={{ color: '#424242' }}> <a href="#" className='no-underline text-#424242 px-2'> LINEUP </a></li>
                    <li className='list-none inline-block px-5' style={{ color: '#424242' }}> <a href="#" className='no-underline text-#424242 px-2'> INFORMATION </a></li>
                    <li className='list-none inline-block px-5' style={{ color: '#424242' }}> <a href="#" className='no-underline text-#424242 px-2'> EXPERIENCE </a></li>
                </ul> */}

                {/* <button className="md:hidden  flex justify-items-end">Menu</button> */}

            </nav>
        </div>

    )
}

export default Navbar

