import React from 'react'
import './Board.css'
import PICCC from '../assets/PICCC.png'
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import styled from 'styled-components'
import triangle from '../assets/POLY.png'

function Board() {
    return (
        <div className='' style={{ color: '#424242' }}>
            <ContentDiv>
                <div className='hero-text text-center'>
                    <p>V A U L E N C E</p>
                </div>

                <div className='launch text-center '>
                    <p>LAUNCHING SOON!</p>
                </div>

                <div className='imagine text-center '>
                    <p> #IMAGINEWITHVAULENCE</p>
                </div >
            </ContentDiv>
            <Img2 src={triangle} className='' alt="" />

            <ContentDiv>
                <img className='singleImage w-1/2 xl:w-1/4 xl:absolute -bottom-16 right-16' src={PICCC} alt="" />
            </ContentDiv>
            <Img3 src={triangle} className='w-[24vw]' alt="" />

            <ContentDiv className='para'>
                <p className=' px-10 mt-24 text-xs '>VAULENCE_CLOTHING</p>
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
            <Img4 src={triangle} className='w-[18vw]' alt="" />
        </div >
    )
}

export default Board

const Img2 = styled.img`
//   display: block; 
//   margin: auto;
  transform: translate(-50%, -50%) rotate(-9deg); 
  position: absolute; 
  top: 58%; 
  left: 44%;
  width:78vw;
  height:80vw
  z-index: 1;
  
   @media (max-width: 768px) {
     margin-top: -75%;
    width: 100%;
    height: 70%;
  }
`;

const ContentDiv = styled.div`
  position: relative;  /* Set to relative to make z-index work */
  z-index: 2;  /* Higher z-index to ensure it appears above Img4 */
`;


const Img3 = styled.img`
  display: block; 
  transform: translate(-50%, -50%) rotate(35deg); 
  position: absolute; 
  top: 42%; 
  right: -37%;
  width: 55vw;
  height:70vw
  z-index: 1;

    @media (max-width: 768px) {
    margin-top: 2rem;
    width: 100%;
    height: 70%;
    left:50%;
  }
`;

const Img4 = styled.img`
  display: block; 
  transform: translate(-50%, -50%) rotate(-40deg); 
  position: absolute; 
  top: 90%;
  left: 7%;
  width: 55vw;
  height:70vw;
  z-index: 1;

    @media (max-width: 768px) {
    margin-top: -8rem;
    width: 100%;
    height: 70%;
    margin-left:5%;
  }
`;