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
                               

                                <InfoP>Retro Ape Club was founded by a small team that connected through their love for NFTs. 
                                    The artist is from the creative mind of Jet_i_am, A Kaiju Kingz holder and an active community member. 
                                    He is the current artist that worked on the 1/1 non-pixelated version
                                    of Project Godjira Genesis and will be on the team for Project Godjira Gen 2. 
                                </InfoP>

                                <InfoP>
                                This collection will be a total of 5000 Retro Apes that puts emphasis on a greyscale theme. 
                                The art highlights the retro era with inspiration from the 70s and 80s. 
                                The team aims to give back to the community for every Sales Milestone that is reached. 
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
