import styled from 'styled-components';
import fofbb from './../fonts/fofbb_ital.otf';
import rr from './../fonts/roadrage.otf';
import para from './../fonts/para.otf'

export const HeroContainer = styled.div`

    
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    padding: 0 30px;
    height: 850px;
    position: relative;
    z-index: 1;
    align-items: center;

    
    @font-face {
        font-family: rr;
        src: url(${rr});
    }

     
    @font-face {
        font-family: para;
        src: url(${para});
    }

     /* Add: before styles */
     :before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgb(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }

    @media screen and (min-width: 768px){
        height: 900px;
    }

`

export const HeroBg = styled.div`
    position: absolute;
    top: 0vh;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    

    @media screen and (max-width: 768px){
        height:100%;

    }
`


export const ImgBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;

export const VideoBg = styled.video`

    width: 100%;
    height: 100vh;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    opacity: 0;
    

`


export const HeroRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    justify-content: center;
    grid-template-areas: 'col1 col2';

    @media screen and (max-width: 768px){
        grid-template-areas: 'col1 col1' 'col2 col2';
    }
`;

export const Column1 = styled.div`
    
    padding: 0 15px;
    grid-area: col1;

    @media screen and (max-width: 768px){
        display: flex;
        justify-content: center;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
        text-align: center;
    }
    
    
`;

export const Column2 = styled.div`
    margin-bottom: 30px;
    padding:2vh;
    padding-top:0vh;
    grid-area: col2;
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    top:20vh;
    padding-top: 10;
    padding-bottom: 5vh;
    padding-left: 0vh;
    padding-right: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width:1280px){
        display: flex;
        align-items: center;
        justify-content: center;
        top:10vw;
        padding-top: 10;
        padding-bottom: 5vh;
        padding-left: 5vh;
        padding-right: 5vh;
    }

    @media screen and (max-width:1024px){
        display: flex;
        align-items: center;
        justify-content: center;
        top:10vw;
        padding-top: 10;
        padding-bottom: 5vh;
        padding-left: 5vh;
        padding-right: 5vh;
    }

    @media screen and (max-width:768px){
        top:10vw;
        padding-top: 10;
        padding-bottom: 5vh;
        padding-left: 5vh;
        padding-right: 5vh;
    }

    @media screen and (max-width:468px){
        top:10vw;
        padding-top: 1vh;
        padding-bottom: 5vh;
        padding-left: 2vh;
        padding-right: 2vh;
    }
`;

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 5vh;
    text-align: left;
    font-family: rr;
    letter-spacing: 1.1vh;
    line-height: 5vh;
    padding-bottom:1.5vh;

    @media screen and (max-width:1280px){
       
    }

    @media screen and (max-width:1024px){
        font-size: 3.5vh;
    }


    @media screen and (max-width: 768px){
        font-size: 4vh;
        text-align: center;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
        text-align: center;
    }
`;

export const HeroP = styled.p`

    color: #fff;
    font-size: 20px;
    text-align: left;
    padding-bottom:2vh;
    font-family: para;
    letter-spacing: .3vh;

    @media screen and (max-width: 768px){
        font-size: 20px;
        text-align: center;
    }

    @media screen and (max-width: 480px){
        font-size: 20px;
    }
    

`;



export const HeroImgWrapper = styled.div`
    max-width: 555px;
    height: 100%;
    
`;

export const HeroImg = styled.img`
    width: 100%;
    border-radius: 20px;

    @media screen and (max-width: 768px){
        width: 50%;
    }

    @media screen and (max-width: 480px){
        width: 100%;
    }
`;

export const Column2Wrapper = styled.div`
    max-width: 600px;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 0vh;
    padding-bottom: 5vh;
    padding-left: 5vh;
    padding-right: 0vh;

    @media screen and (max-width: 460px){
        padding:5vh;
    }
`;

export const MintBtn = styled.button`
    height: 20%;
    width: 40%;
    background: none;
    border: 1px solid #F39DB6;
    white-space: nowrap;
    color: #fff;
    font-size: 16px;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    font-family: AtWritter;
    text-decoration: underline;
    font-size: 1.5vh;

    &:hover{
        background-color: #F39DB6;
        transition: all 0.2s ease-in-out;
    }
`;

export const ButtonWrap = styled.div`
    display: flex;
    justify-content: flex-start;
    padding-top: 3vh;
    width: auto;
    height: 20%;
    margin-top: 5%;

    @media screen and (max-width: 768px){
        justify-content: center;
    }

    @media screen and (max-width: 480px){
        justify-content: center;
    }
    
    
`




