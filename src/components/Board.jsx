import React from 'react'
import './Board.css'
import PICCC from '../assets/PICCC.png'
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function Board() {
    return (
        <div className='' style={{ color: '#424242' }}>
            <div className='hero-text text-center mt-20 font-serif ' style={{ fontSize: '90px', fontWeight: '500', lineHeight: '130px' }}>
                <p>VAULENCE</p>
            </div>


            <img className='w-1/2 xl:w-1/4 xl:absolute bottom-24 right-36' src={PICCC} alt="" />



            <div className='text-center mt-8 text-2xl font-bold font-myFont '>
                <p>LAUNCHING SOON!</p>
            </div>

            <div className='text-center mt-2  text-sm font-semibold font-myFont '>
                <p> #IMAGINEWITHVAULENCE</p>
            </div >

            <div>
                <p className='px-10 mt-24 text-xs '>VAULENCE_CLOTHING</p>
                <div className='flex flex-row gap-2 px-10 mt-2'>
                    <div className="icon-bg-round">
                        <a href="https://www.facebook.com/YourFacebookPage" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className='icon' />
                        </a>
                    </div>
                    <div className="icon-bg-round">
                        <a href="https://www.facebook.com/YourFacebookPage" target="_blank" rel="noopener noreferrer">
                            <TiSocialFacebook className='icon1' />
                        </a>
                    </div>
                    <div className="icon-bg-round">
                        <a href="https://www.facebook.com/YourFacebookPage" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp className='icon' />
                        </a>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Board
