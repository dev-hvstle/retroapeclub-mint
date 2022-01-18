import React from 'react'

import { 
    TeamContainer, TeamBg,
    TeamContent, TeamRow,TeamH1,
    Column1,Column2, TeamImgWrapper,
    TeamRow2, Column2Wrapper, ImgBg, ImgLogo,
    TeamH2,TeamP,FlexboxContainer, FlexboxTeamContent
    } from './TeamElements'

import bg from '../../Image/bgblack.jpg'
import jetiam from '../../Image/JET_I_AM.gif'
import itachi from '../../Image/ITACHII.png'
import toman from '../../Image/TOMAN651.png'
import bakedgoods from '../../Image/BAKEDGOODS.png'


function TeamSection() {
    return (
        <TeamContainer id="team">

            <TeamBg>
                
                <ImgBg src={bg}></ImgBg>
              
            </TeamBg>

            <TeamContent>
                        <TeamRow>
                            <Column1>
                                <TeamImgWrapper>
                                <TeamH1>
                                    TEAM
                                </TeamH1>

                                <ImgLogo src={jetiam}></ImgLogo>
                                <TeamH2>JET_I_AM</TeamH2>
                                <TeamP>Founder/ Artist Retro Ape Club / Project Gojira 1/1 and Gen 2</TeamP>


                                        <FlexboxContainer>
                                            <FlexboxTeamContent>
                                                <ImgLogo src={itachi}></ImgLogo>
                                                <TeamH2>Itachii</TeamH2>
                                                <TeamP>Community Manager</TeamP>
                                            </FlexboxTeamContent>

                                            <FlexboxTeamContent>
                                                <ImgLogo src={toman}></ImgLogo>
                                                <TeamH2>Toman</TeamH2>
                                                <TeamP>Marketing / Community Manager</TeamP>
                                            </FlexboxTeamContent>

                                            <FlexboxTeamContent>
                                                <ImgLogo src={bakedgoods}></ImgLogo>
                                                <TeamH2>Bakedgoods</TeamH2>
                                                <TeamP> Lead Marketing/ Dev</TeamP>
                                            </FlexboxTeamContent>
                                        </FlexboxContainer>

                                </TeamImgWrapper>
                            </Column1>
                        </TeamRow>

                        


                    

                        


                       
                     


             
                   
                
            </TeamContent>
        </TeamContainer>
    )
}

export default TeamSection
