import styled from 'styled-components';
import fofbb from '../../fonts/fofbb_ital.otf';
import rr from '../../fonts/roadrage.otf';
import para from '../../fonts/para.otf'

export const TeamContainer = styled.div`

    
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    padding: 0 0px;
    height: auto;
    position: relative;
    top:109vh;
    z-index: 1;
    align-items: center;

    @media screen and (max-width: 1700px){
        position: relative;
        top:100vh;
        
    }

    @media screen and (max-width: 1500px){
        position: relative;
        top:100vh;
        
    }

    @media screen and (max-width: 1216px){
        position: relative;
        top:100vh;
        
    }

 

    @media screen and (max-width: 768px){
        position: relative;
        top:200vh;
        
        
    }

    @media screen and (max-width: 540px){
        position: relative;
        top:190vh;
    
    }

    @media screen and (max-width: 468px){
        position: relative;
        top:210vh;
    
    }

    @media screen and (max-width: 390px){
        position: relative;
        top:207vh;
    
    }
    
    @media screen and (max-width: 375px){
        position: relative;
        top:180vh;
    
    }

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

  

`

export const TeamBg = styled.div`

    position: absolute;
    top: 0vh;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    

    @media screen and (max-width: 768px){
        height: 130vh;
       
        
        
    }

    @media screen and (max-width: 460px){
        height: 120vh;
        top:0vh;
        
    }

`

export const ImgBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;

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


export const TeamRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 5vh;
    padding-left: 5vh;
  

    @media screen and (max-width: 768px){
        
    }
`;


export const TeamRow2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 5vh;
    padding-left: 5vh;
  

    @media screen and (max-width: 768px){
        
    }
`;

export const Column1 = styled.div`
    
    padding: 0 25px;
    grid-area: col1;
    -o-object-fit: cover;
    object-fit: cover;

    @media screen and (max-width: 768px){
        display: flex;
        justify-content: center;
        margin: 5vh;
        
    }

    @media screen and (max-width: 460px){
        display: flex;
        justify-content: center;
        
    }
    
    
`;

export const Column2 = styled.div`
    margin-bottom: 30px;
    padding:2vh;
    padding-top:0vh;
    
`;


export const TeamContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    top:15vh;
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

export const TeamH1 = styled.h1`
    color: #fff;
    font-size: 5vh;
    text-align: left;
    font-family: rr;
    letter-spacing: 1.1vh;
    line-height: 6.5vh;
    padding-bottom:1.5vh;
    
    padding-left: 1vh;
    

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
        font-size: 3vh;
        text-align: center;
    }
`;




export const TeamImgWrapper = styled.div`
    max-width: 555px;
    height: 100%;
    
`;

export const TeamImg = styled.img`
    width: 150%;
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
    flex-direction: row-reverse;
    align-items: center;
    padding-top: 0vh;
    padding-bottom: 5vh;
    padding-left: 5vh;
    padding-right: 0vh;

    @media screen and (max-width: 460px){
        padding:5vh;
    }
`;