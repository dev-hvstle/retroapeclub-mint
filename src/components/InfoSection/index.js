import React from 'react'



import { HeroContainer, HeroBg,VideoBg,
        HeroContent, HeroH1, 
        HeroRow, HeroImgWrapper, 
        InfoP,
        InfoH1,
        HeroImg,
        Column1, 
        Column2, 
        Column2Wrapper, 
        InfoRow,
        ImgBg,
   
        } from '../InfoSection/InfoElements'
        import bg from '../../Image/bgblack.jpg';
        import Image from '../../Image/apeman.gif';



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
                                <InfoRow>
                                    <InfoH1>APE CLUB NFT'S!</InfoH1>
                                </InfoRow>
                               

                                <InfoP>5000 Apes from the past lost in the present.
                                       Forever wandering in the Ethereum blockchain
                                </InfoP>

                                <InfoP>RETRO APE CLUB
                                </InfoP>
                            </HeroImgWrapper>
                        </Column1>

                        <Column2>
                            <Column2Wrapper>
                                

                                <HeroImg src={Image}></HeroImg>
                                
                               
                            </Column2Wrapper>
                        </Column2>              
                </HeroRow>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
