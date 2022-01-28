import React from 'react'

import { 
    TeamContainer, TeamBg,
    TeamContent, TeamRow,TeamH1,
    Column1,Column2, TeamImgWrapper,
    TeamRow2, Column2Wrapper, ImgBg, ImgLogo,
    TeamH2,TeamP,FlexboxContainer, FlexboxTeamContent
    } from './TeamElements'

import bg from '../../Image/5thpanel.png'
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
                                   THE TEAM
                                </TeamH1>

                            
                              


                                        <FlexboxContainer>

                                            <FlexboxTeamContent>
                                                <ImgLogo src={jetiam}></ImgLogo>
                                                <TeamH2>JET_I_AM</TeamH2>
                                                
                                            </FlexboxTeamContent>

                                            <FlexboxTeamContent>
                                                <ImgLogo src={itachi}></ImgLogo>
                                                <TeamH2>Itachii</TeamH2>
                                               
                                            </FlexboxTeamContent>

                                            <FlexboxTeamContent>
                                                <ImgLogo src={toman}></ImgLogo>
                                                <TeamH2>Toman</TeamH2>
                                               
                                            </FlexboxTeamContent>

                                            <FlexboxTeamContent>
                                                <ImgLogo src={bakedgoods}></ImgLogo>
                                                <TeamH2>Bakedgoods</TeamH2>
                                               
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
