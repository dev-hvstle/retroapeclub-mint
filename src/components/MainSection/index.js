import React from 'react';
import Video from '../../video/vid.mp4';
import { MainContainer, MainBg, VideoBg, 
MainContent, MainRow, ImgWrap, ImgLogo,
FlexboxContainer,FlexboxTeamContent,
ImgLogoMint,MainH1 } from './MainElements';
import retro from '../../Image/retro.png'

import mint from '../../Image/mint.png'
import './MainElements.css';

const MainSection = () => {

    
    return (
        <MainContainer>
            <MainBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'>

                </VideoBg>
            </MainBg>

            <MainContent>
                <MainRow>
                    

                                        <FlexboxContainer>
                                            <FlexboxTeamContent>
                                            <ImgWrap >
                                                <ImgLogo src={retro} className='easeload'></ImgLogo>
                                            </ImgWrap>
                                            </FlexboxTeamContent>

                                            <FlexboxTeamContent>
                                            <MainH1 className='easeloadafter' to="hero"
                                            smooth={true}
                                            duration={500}
                                            spy={true}
                                            exact='true'
                                            offset={-80}>STEALTH MINT NOW LIVE</MainH1>
                                            <ImgWrap to="hero">
                                                <ImgLogoMint src={mint} id='easeloadafter' className='bounce'></ImgLogoMint>
                                            </ImgWrap>
                                            </FlexboxTeamContent>
                                        </FlexboxContainer>


                </MainRow>
            </MainContent>
        </MainContainer>
    )
}

export default MainSection
