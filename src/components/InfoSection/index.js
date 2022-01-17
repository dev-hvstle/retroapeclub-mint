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
        <HeroContainer id="about">
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

                                <InfoP>
                                Was born from the creative mind of Jet_i_am, A Kaiju Kingz holder and an active
                                community member and current artist for 1/1 unpixelated version for
                                Project Godjira and Project Godjira Gen 2. The collection will be a 
                                total of 5000 Retro Apes that puts emphasis on a greyscale theme for its art
                                highlighting the retro black and white days instead of the
                                usual norm and aims to give back to the community
                                for every sales milestone that is reached. 
                                </InfoP>
                                
                                <InfoP>
                                Pure Art and Chill Vibes and access
                                to an alpha that provides value to the community. Holding 5 Retro Apes
                                might give you access to a future project 
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
