import React from 'react'


import { HeroContainer, HeroBg,VideoBg,
        HeroContent, HeroH1, 
        HeroRow, HeroImgWrapper, 
        HeroImg, 
        Column1, 
        Column2, 
        Column2Wrapper, 
        ButtonWrap,
        ImgBg,
        HeroP,
        ImgLogo,
        Input,
        FlexboxContainer,
        FlexboxContent1,
        FlexboxContent2,
        FlexboxContent1P,
        FlexboxContent2P,
        HeroP1
        } from './HeroElements'
import bg from '../Image/bg.png';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import Image from '../Image/herosection.gif';
import './HeroElements.css'
import retro from './../Image/retro.png'



const HeroSection = ({token, account, isEligibleForFreeMint}) => {

    const useStyles = makeStyles({
        root:{
            color: "#00CEFF",
            borderBottom: "1px",
            "&.Mui-focused":{
                color: "#FF00FE"
            },
            "&:before":{
                borderBottomColor: "#00CEFF"
            },
            "&hover:not(.Mui-focused):before":{
                borderBottomColor: "#02CDFF"
            },
            "&:after":{
                borderBottomColor: "#FF00FE"
            }
        },
        input:{
            "&::selection":{
                backgroundColor:"#0C4E56",
                color: "#101823"
            }
        }
    });

    const useLabelStyles = makeStyles({
        root:{
            color: "#00CEFF",
            font: "10em",
            "&.Mui-focused":{
                color: "#FF00FE"
            }
        }
    });

    const classes = useStyles();
    const labelClasses = useLabelStyles();


    const buyNft = async () =>{
        if(typeof window.ethereum !== 'undefined'){
            const qty = document.getElementById('nftQty').value;
            
            if(isEligibleForFreeMint){
                try{
                    token.methods.freeMint().send({from: account})
                }
                catch(e){
                    console.log("Error: ", e);
                }
                return;
            }
            if(qty === ""){
                window.alert("Quantity Cannot be 0!")
                return;
            }
            if(qty > 100){
                window.alert("Quantity Should Not Be More Than 100!");
                return;
            }
            if(token !== 'undefined'){
                const qty = document.getElementById('nftQty').value;
                const amount = String((5 * qty) * 10 ** 16);

                try{
                    token.methods.mint("123asd", qty).send({value: amount, from: account})
                }
                catch(e){
                    console.log("Error: ", e);
                }
            }
            else{

            }
        }
        else{
            window.alert("Please Install Metamask or use browser that supports Web3");
        }
    }

    return (
        <HeroContainer id="hero">
            <HeroBg>
                <ImgBg src={bg}></ImgBg>
              
            </HeroBg>

            <HeroContent>
                <HeroRow>
                        <Column1>
                            <HeroImgWrapper>
                                <ImgLogo src={retro}></ImgLogo>
                                <FlexboxContainer>
                                    <FlexboxContent1P>
                                        5000
                                    </FlexboxContent1P>

                                    <FlexboxContent2P>
                                        <HeroP>UNIQUE NFT</HeroP>
                                    </FlexboxContent2P>
                                </FlexboxContainer>
                                
                                
                                <HeroP>PRICE 0.05 ETH</HeroP>
                                <FlexboxContainer>
                                    <FlexboxContent1>
                                    AMOUNT (Max 10):
                                    </FlexboxContent1>

                                    <FlexboxContent2>
                                        <Input id='nftQty' type="text" className='textareafocus' disabled={(isEligibleForFreeMint ? "disabled" : "")} value={(isEligibleForFreeMint ? 3 : 0)}></Input>
                                    </FlexboxContent2>
                                </FlexboxContainer>
                            

                               
                                <ButtonWrap>
                                    <button className='btnMint' onClick={buyNft}>{(isEligibleForFreeMint ? "Free Mint" : "Mint")}</button>
                                </ButtonWrap>

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
