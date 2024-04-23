import React from 'react';
import './Board.css';
import PICCC from '../assets/PICCC.png';
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import styled from 'styled-components';
import triangle from '../assets/POLY1.png';

function Board() {
    return (
        <>
            <div className="fixed top-0 left-0 right-0 bottom-0 w-screen h-screen p-0 bg-gray-300 z-[-1]"></div>
            <div className='relative w-screen'>
                <nav className='flex items-center px-2 font-myFont'>
                    <img src="/LOGOLLKLKLKL.png" alt="" className='w-[10vw] cursor-pointer z-20 ' style={{ width: '10vw' }} />
                    <img src={triangle} alt=""
                        className='absolute z-10 max-w-full'
                        style={{ left: '-5%', height: '25vw' }} />
                </nav>
            </div>

            <div className='w-screen' style={{ color: '#424242' }}>

                <ContentDiv>
                    <div className='hero-text text-center'>
                        <p>V A U L E N C E</p>
                    </div>

                    <div className='launch text-center'>
                        <p>LAUNCHING SOON!</p>
                    </div>

                    <div className='imagine text-center'>
                        <p>#IMAGINEWITHVAULENCE</p>
                    </div>
                </ContentDiv>
                <Img2 src={triangle} alt="" />


                <ContentDiv>
                    <img className='singleImage w-1/2 xl:w-1/4 xl:absolute -bottom-16 right-16' src={PICCC} alt="" />
                </ContentDiv>
                <Img3 src={triangle} alt="" />

                <ContentDiv className='para'>
                    <p className='px-10 mt-24 text-xs'>VAULENCE_CLOTHING</p>
                    <div className='flex flex-row gap-2 px-16 mt-2'>
                        <div className="icon-bg-round">
                            <a href="https://www.instagram.com/vaulence_clothing?igsh=eXYyMWdyM2Z1bnUz" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className='icon' />
                            </a>
                        </div>

                        <div className="icon-bg-round">
                            <a href="https://wa.me/+918848241170" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp className='icon' />
                            </a>
                        </div>
                    </div>
                </ContentDiv>
                <Img4 src={triangle} alt="" />
            </div>
        </>
    );
}

export default Board;

const Img2 = styled.img`
position: absolute;
top: 50%; 
left: 45%;
transform: translate(-50%, -35%) rotate(-9deg);
z-index: 1;
// border: 1px solid red; // Keep the border for debugging
height : 80vh;
@media (max-width: 768px) {
  transform: translate(-50%, -50%) rotate(350deg);
  height: 30vh; // Increase minimum height for smaller screens
  top : 25%;
}
`;





const ContentDiv = styled.div`
  position: relative;
  z-index: 2;  // Ensure text appears above the background image
`;

const Img3 = styled.img`
  display: block;
  transform: translate(-50%, -50%) rotate(35deg);
  position: absolute;
  top: 42%;
  right : -8%;
  height: 75vh;
  z-index: 1;

  @media (max-width: 768px) {
    right: 20%;
    height: 20vh;
    top:45%;
  }
`;

const Img4 = styled.img`
  display: block;
  transform: translate(-50%, -50%) rotate(-40deg);
  position: absolute;
  top: 90%;
  left: 7%;
  height: 30vw;
  z-index: 1;

  @media (max-width: 768px) {
    top: 75%;
    left: 15%;
    
    height: 25vh;
  }
`;
