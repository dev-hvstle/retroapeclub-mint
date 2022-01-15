import React from 'react'


import { HeroContainer, HeroBg,VideoBg,
        HeroContent, HeroH1, 
        HeroRow, HeroImgWrapper, 
        HeroImg, 
        Column1, 
        Column2, 
        Column2Wrapper, 
        ButtonWrap,
        ImgLogo,
        ImgBg,
        HeroP
        } from '../RoadmapSection/RoadmapElements'
import bg from '../../Image/bgWhite.jpg';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import Image from '../../Image/astronaut.gif'

import r1 from '../../Image/r1.png'




const RoadmapSection = () => {

  

    return (
        <HeroContainer>
            <HeroBg>
                <ImgBg src={bg}></ImgBg>
              
            </HeroBg>

            <HeroContent>
                <HeroRow>
                        <Column1>
                            <HeroImgWrapper>
                               
                                <HeroImg src={Image}></HeroImg>
                             

                            </HeroImgWrapper>
                        </Column1>

                        <Column2>
                            <Column2Wrapper>
                                <HeroH1>ROADMAP</HeroH1>
                                
                                <ImgLogo src={r1} to="/"></ImgLogo>
                                <ImgLogo src={r1} to="/"></ImgLogo>
                                <ImgLogo src={r1} to="/"></ImgLogo>
                                <ImgLogo src={r1} to="/"></ImgLogo>
                                <ImgLogo src={r1} to="/"></ImgLogo>
                                <ImgLogo src={r1} to="/"></ImgLogo>
                                <ImgLogo src={r1} to="/"></ImgLogo>
                                <ImgLogo src={r1} to="/"></ImgLogo>

                            </Column2Wrapper>
                        </Column2>              
                </HeroRow>
            </HeroContent>
        </HeroContainer>
    )
}

export default RoadmapSection
