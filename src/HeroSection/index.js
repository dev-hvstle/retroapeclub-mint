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
        HeroP
        } from './HeroElements'
import bg from '../Image/bg.jpg';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import Image from '../Image/astronaut.png';



const HeroSection = ({token, totalSupply, account, mintList, reservedList}) => {

    const useStyles = makeStyles({
        root:{
            color: "#ff4655",
            borderBottom: "1px",
            
            "&.Mui-focused":{
                color: "#fff"
            },
            "&:before":{
                borderBottomColor: "#ff4655"
            },
            "&hover:not(.Mui-focused):before":{
                borderBottomColor: "#ff4655"
            },
            "&:after":{
                borderBottomColor: "#ff4655"
            }
        },
        input:{
            "&::selection":{
                backgroundColor:"#ff4655",
                color: "#fff"
            }
        }
    });

    const useLabelStyles = makeStyles({
        root:{
            color: "#fff",
            font: "10em",
            "&.Mui-focused":{
                color: "#fff",
                
            }
        }
    });

    const classes = useStyles();
    const labelClasses = useLabelStyles();

    const buyNft = async () =>{
        if(typeof window.ethereum !== 'undefined'){
            const qty = document.getElementById('nftQty').value;
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
                const amount = String((4 * qty) * 10 ** 16);
                //console.log(tempList);                
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
        <HeroContainer>
            <HeroBg>
                <ImgBg src={bg}></ImgBg>
              
            </HeroBg>

            <HeroContent>
                <HeroRow>
                        <Column1>
                            <HeroImgWrapper>
                                <HeroH1>Ape in to the Retro Ape Club</HeroH1>
                                <HeroP>WHITELIST SALE NOW ACTIVE</HeroP>
                                <HeroP>5000 UNIQUE NFT'S</HeroP>
                                <HeroP>PRICE 0.04 ETH</HeroP>
                            
                                <TextField type="number" id='nftQty' InputProps={{classes: classes}} InputLabelProps={{classes: labelClasses}} label="Mint Quantity" fullWidth></TextField>
                                
                                <ButtonWrap src="">
                                    <button className="btnMint" onClick={buyNft}>MINT</button>
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
