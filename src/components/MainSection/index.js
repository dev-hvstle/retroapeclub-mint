import React from 'react';
import Video from '../../video/vid.mp4';
import { MainContainer, MainBg, VideoBg } from './MainElements';

const MainSection = () => {
    return (
        <MainContainer>
            <MainBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'>

                </VideoBg>
            </MainBg>
        </MainContainer>
    )
}

export default MainSection
