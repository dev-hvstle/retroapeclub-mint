import React from 'react'

import { 
    TeamContainer, TeamBg,
    TeamContent, TeamRow,TeamH1,
    Column1,Column2, TeamImgWrapper,
    TeamRow2, Column2Wrapper, ImgBg
    } from './TeamElements'

import bg from '../../Image/bgblack.jpg'

function TeamSection() {
    return (
        <TeamContainer>

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
            
                                
                                </TeamImgWrapper>
                            </Column1>
                            
                        </TeamRow>

             
                   
                
            </TeamContent>
        </TeamContainer>
    )
}

export default TeamSection
