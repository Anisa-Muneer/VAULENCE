import React from 'react'
import './Hom.css'
import styled from 'styled-components'
import triangle from '../assets/POLY.png'

function Home() {
    return (
        <div className='home'>
            <div className=''>

                <Img1 src={triangle} className='w-[18vw]' alt="" />
                <Img2 src={triangle} className='w-[30vw]' alt="" />
                <Img3 src={triangle} className='w-[24vw]' alt="" />
                <Img4 src={triangle} className='w-[18vw]' alt="" />
            </div>

        </div >
    )
}

export default Home

const Img1 = styled.img`
  position: absolute;
  top: -5%;
  left: -6%;
  transform: scale(3.5)
`;
const Img2 = styled.img`
  display: block; 
  margin: auto;
  transform: translate(-50%, -50%) rotate(-9deg); 
  position: absolute; 
  top: 58%; 
  left: 44%;
  width:78vw;
  height:80vw
`;

const Img3 = styled.img`
  display: block; 
  transform: translate(-50%, -50%) rotate(35deg); 
  position: absolute; 
  top: 42%; 
  right: -33%;
  width: 55vw;
  height:70vw
`;

const Img4 = styled.img`
  display: block; 
  transform: translate(-50%, -50%) rotate(-40deg); 
  position: absolute; 
  top: 90%;
  left: 7%;
  width: 55vw;
  height:70vw
`;
