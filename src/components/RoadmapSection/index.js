import React from 'react'


import { HeroContainer, HeroBg,VideoBg,
        HeroContent, HeroH1, 
        HeroRow, HeroImgWrapper, 

        Column1, 
        Column2, 
        Column2Wrapper, 

        ImgBg,
   
        } from '../InfoSection/InfoElements'
import bg from '../../Image/bg.jpg';




const HeroSection = () => {



    return (
        <HeroContainer>
            <HeroBg>

                <ImgBg src={bg}></ImgBg>
              
            </HeroBg>

            <HeroContent>
                <HeroRow>
                        <Column1>
                            <HeroImgWrapper>

                            </HeroImgWrapper>
                        </Column1>

                        <Column2>
                            <Column2Wrapper>
                                
                             
                               
                            </Column2Wrapper>
                        </Column2>              
                </HeroRow>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
