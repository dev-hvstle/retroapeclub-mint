import React, {useState, useRef} from 'react'
import Web3 from 'web3';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar';
import HeroSection from '../HeroSection';
import RetroApeClub from '../abi/RetroApeClub.json';
import InfoSection from '../components/InfoSection';
import RoadmapSection from '../components/RoadmapSection';
import TeamSection from '../components/TeamSection';
import FooterSection from '../components/FooterSection';
import bgMusic from '../music/loop.mp3';
import silentMusic from '../music/silence.mp3';
import MainSection from '../components/MainSection';
import useSound from 'use-sound';
 
const Home = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [account, setAccount] = useState('Connect Wallet');
    const [isInitialized, setInitialized] = useState(false);
    const [token, setToken] = useState();
    const [isEligibleForFreeMint, setIsEligibleForFreeMint] = useState(false);
    const web3 = new Web3(window.ethereum);
    const tokenAddress = "0x6527f58e5CFD0A0F1F77399F865e1E685F89986D";
    const [audioBg] = useSound(bgMusic);

    const initializeWallet = async () =>{
        if(typeof window.ethereum !== 'undefined'){
            const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
            const tempAccount = web3.utils.toChecksumAddress(accounts[0]);
            console.log(tempAccount);
            setAccount(tempAccount);
            const chainId = await web3.eth.getChainId();
            if(tempAccount !== ''){
                setInitialized(true);
            }
            try{
                const tempToken = new web3.eth.Contract(RetroApeClub.abi, tokenAddress);
                const tempIsIncludedInFreeList = await tempToken.methods.freeMintList(tempAccount).call();
                const tempIsFreeMintClaimed = await tempToken.methods.isFreeMintClaimed(tempAccount).call();
                if(tempIsIncludedInFreeList && !tempIsFreeMintClaimed){
                    setIsEligibleForFreeMint(true);
                }
                setToken(tempToken);
                //console.log(tempToken);
        
            }
            catch(e){
                console.log('Errror: ', e);
            }
        }
    }

//   const loadContract = async() =>{
//     try{
//         const tempToken = new web3.eth.Contract(RetroApeClub.abi, tokenAddress);
//         const tempTotalSupply = await tempToken.methods.totalSupply().call();
//         const tempIsIncludedInFreeList = await tempToken.methods.freeMintList(account).call();
//         console.log(account);
//         setToken(tempToken);
//         //console.log(tempToken);

//     }
//     catch(e){
//         console.log('Errror: ', e);
//     }
// }


    const toggle = () => {
      setIsOpen(!isOpen)
    }

    const playMusic = () =>{
        var audioBG = document.getElementById("audioBg");
        audioBG.play();
    }

    window.onload = () =>{
        audioBg.call();
        if(typeof  window.ethereum !== 'undefined'){
            initializeWallet(); 
            //await loadContract();

            window.ethereum.on('chainChanged', () =>{
                window.location.reload();
            });
          
            window.ethereum.on('disconnect', () =>{
                window.location.reload();
            });
        }

    }



    return (
        <>
        <audio id='audioBg' src={bgMusic}></audio>

        <Sidebar toggle={toggle} isOpen={isOpen} initializeWallet={initializeWallet} isInitialized={isInitialized} account={account}/>
        <Navbar toggle={toggle} initializeWallet={initializeWallet} isInitialized={isInitialized} account={account}/>
        <MainSection />
        <HeroSection token={token} account={account} isEligibleForFreeMint={isEligibleForFreeMint}/>
        <InfoSection />
        <RoadmapSection />
        <TeamSection />
        <FooterSection />
        </>
    )
}

export default Home;
