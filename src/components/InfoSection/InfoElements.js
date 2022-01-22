import styled from 'styled-components';
import fofbb from '../../fonts/fofbb_ital.otf';
import cyber from '../../fonts/batman.ttf';
import para from '../../fonts/para.otf'
import gidole from '../../fonts/Gidole.otf'
import rr from '../../fonts/roadrage.otf';
import tom from '../../fonts/Tomorrow-Light.ttf';

export const HeroContainer = styled.div`

    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0px;
    height: auto;
    position: relative;
    top:0vw;
    z-index: 1;

    
    @font-face {
        font-family: cyber;
        src: url(${cyber});
    }

    @font-face {
        font-family: rr;
        src: url(${rr});
    }

     
    @font-face {
        font-family: para;
        src: url(${para});
    }

    @font-face {
        font-family: gidole;
        src: url(${gidole});
    }

    
   
    :before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2;
    }

`

export const HeroBg = styled.div`
    position: absolute;
    top:0vh;
    right: 0;
    bottom: 0;
    left: 0;
    width: auto;
    height: 120vh;
    overflow: hidden;
  
  

    @media screen and (max-width: 768px){
        height: 150vh;
       
        
        
    }

    @media screen and (max-width: 460px){
        height: 160vh;
        top:0vh;
        
    }
`


export const ImgBg = styled.img`
    width: 100%;
    height: 100vh;
  

    @media screen and (max-width:1024px){
        display: block;
        width: auto;
        height: 120vh;
     
   }

    @media screen and (max-width:768px){
        display: block;
        width: auto;
        height: 150vh;
     
   }
  
   
   @media screen and (max-width:460px){
        display: block;
        width: auto;
        height: 180vh;
        
   }
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

    @media screen and (max-width: 460px){
        grid-template-areas: 'col1 col1' 'col2 col2';
    }
`;

export const Column1 = styled.div`

    padding-top:0vh;
    grid-area: col1;
    

    @media screen and (max-width:1024px){
        padding: 0vh;
        padding-bottom: 0vh;
        display: flex;
        justify-content: center;
    }
    
    @media screen and (max-width:768px){
        padding: 3vh;
        padding-bottom: 0vh;
        display: flex;
        justify-content: center;
    }

    @media screen and (max-width:468px){
        padding: 3vh;
        padding-bottom: 0vh;
        display: flex;
        justify-content: center;
    }
    
`;

export const Column2 = styled.div`
    padding: 0 24px;
    grid-area: col2;
    padding-bottom:50vh;

    @media screen and (max-width:1024px){
        padding-top:10vh;
    }

    

    @media screen and (max-width:468px){
        padding-top:0vh;
        
        padding: 5vh;
    }
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    top:0vh;
    padding-top: 10vh;
    padding-bottom: 5vh;
    padding-left: 0vh;
    padding-right: 0vh;
    display: flex;
    -o-object-fit: cover;
    object-fit: cover;
    align-items: center;
    justify-content: center;

    @media screen and (max-width:1024px){
      
        padding-top: 5vh;
        padding-bottom: 5vh;
        padding-left: 2vh;
        padding-right: 2vh;
    }

    @media screen and (max-width:768px){

        padding-top: 5vh;
        padding-bottom: 5vh;
        padding-left: 2vh;
        padding-right: 2vh;
    }

    @media screen and (max-width:468px){
    
        padding-top: 5vh;
        padding-bottom: 5vh;
        padding-left: 2vh;
        padding-right: 2vh;
    }
`;

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 5vh;
    text-align: left;
    font-family: cyber;
    letter-spacing: .3vh;
    line-height: 5vh;
    padding-bottom:1.5vh;

    @media screen and (max-width: 768px){
        font-size: 40px;
        text-align: center;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
        text-align: center;
    }
`;

export const HeroP = styled.p`

    color: #fff;
    font-size: 2vh;
    text-align: left;
    padding-bottom:2vh;
    font-family: para;
    letter-spacing: .3vh;

    @media screen and (max-width: 1024px){
        font-size: 5vh;
        text-align: center;
       
    }

    @media screen and (max-width: 800px){
        font-size: 3vh;
        text-align: center;
    }

    @media screen and (max-width: 768px){
        font-size: 2vh;
        text-align: center;
        
    }

    @media screen and (max-width: 480px){
        font-size: 2vh;
    }
    

`;



export const HeroImgWrapper = styled.div`
    max-width: 555px;
    height: 100%;
    display: flex;
    justify-content: center;
`;


export const HeroImg = styled.img`
    width: 100vh;
    padding:2vh;
    padding-right: 5vh;
    display: flex;
    justify-content: center;
   

    @media screen and (max-width:1024px){
        
        width: 45vh;
        padding:2vh;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }

    @media screen and (max-width:768px){
        width: 55vh;
        padding:2vh;
        display: flex;
        justify-content: center;
    }

    @media screen and (max-width:460px){
        width: 35vh;
        padding:2vh;
        display: flex;
        justify-content: center;
    }
`;



export const Column2Wrapper = styled.div`
    max-width: 600px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5vh;
    padding-bottom: 0vh;
    padding-left: 0vh;
    padding-right: 0vh;
    
    
    @media screen and (max-width:460px){
        padding: 0;
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

export const InfoRow = styled.div`

    
    position: relative;
    
    padding-bottom: 0;


    @media screen and (max-width:768px){
        padding:0vh;
        position: relative;
        right:0vh;
    }

    @media screen and (max-width:460px){
        padding:0vh;
        position: relative;
        right:0vh;
    }
`


export const InfoH1 = styled.h1`
    color: #fff;
    font-size: 7vh;
    text-align: left;
    font-family: rr;
    letter-spacing: 1.2vh;
    line-height: 7vh;
    padding-bottom:1.5vh;
    padding: 5vh;
    font-size: 5vh;
    padding-bottom:0vh;

    @media screen and (max-width: 1024px){
        font-size: 3vh;
        letter-spacing: .5vh;
        line-height: 3vh;
        padding-top:0vh;
        padding-bottom:1vh;
        text-align: left;
    }

    @media screen and (max-width: 768px){
        font-size: 3vh;
        padding-top:0vh;
        text-align: center;
    }

    @media screen and (max-width: 480px){
        font-size: 2vh;
        letter-spacing: .5vh;
        line-height: 5vh;
        padding-top:0vh;
        padding-bottom:1vh;
        text-align: center;
    }
`;


export const InfoP = styled.p`

    color: #fff;
    font-size: 2vh;
    text-align: left;
    padding-bottom:2vh;
    letter-spacing: .3vh;
    font-family: tom;
    padding: 5vh;
    padding-top: 2vh;
    padding-bottom:0vh;

    @media screen and (max-width: 1024px){
        font-size: 2vh;
        text-align: center;
        
    }

    @media screen and (max-width: 1000px){
        font-size: 1.5vh;
        text-align: center;
        padding-top: 2vh;
        padding-bottom: 2vh;
        
    }


    @media screen and (max-width: 768px){
        font-size: 2vh;
       
        text-align: center;
    }

    @media screen and (max-width: 480px){
        font-size: 2vh;
        text-align: center;
    }
    

`;




