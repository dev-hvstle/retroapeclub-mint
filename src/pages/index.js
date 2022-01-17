import React, {useState} from 'react'
import Web3 from 'web3';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar';
import HeroSection from '../HeroSection';
import RetroApeClub from '../abi/RetroApeClub.json';
import InfoSection from '../components/InfoSection';
import RoadmapSection from '../components/RoadmapSection';
import TeamSection from '../components/TeamSection';
import FooterSection from '../components/FooterSection';
 
const Home = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [account, setAccount] = useState('Connect Wallet');
    const [isInitialized, setInitialized] = useState(false);
    const [token, setToken] = useState();
    const [totalSupply, setTotalSupply] = useState(0);
    var [mintList, setMintList] = useState([]);
    var [reservedList, setReservedList] = useState([]);
    const web3 = new Web3(window.ethereum);
    const tokenAddress = "0x795B8A33dD1507aAC8766E882F32aC5cfc1A3329";

    const initializeWallet = async () =>{
      if(typeof window.ethereum !== 'undefined'){
          const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
          const tempAccount = accounts[0];
          console.log(tempAccount);
          setAccount(tempAccount);
          const chainId = await web3.eth.getChainId();
          if(tempAccount !== ''){
              setInitialized(true);
          }
          if(chainId !== 1){
              window.alert("Please Change to Ethereum Main Network!");
          }
      }
      else{
          window.alert("Browser does not have Metamask or it doesn't support Web3!");
      }
  }

  const loadContract = async() =>{
    try{
        const tempToken = new web3.eth.Contract(RetroApeClub.abi, tokenAddress);
        const tempTotalSupply = await tempToken.methods.totalSupply().call();

        setToken(tempToken);
        //console.log(tempToken);

        setTotalSupply(parseInt(tempTotalSupply) + 200);
        //console.log(tempTotalSupply);

        // setMintList(tempMintList.map(Number));
        // //console.log(tempMintList);

        // setReservedList(tempReservedList.map(Number));
        //console.log(tempReservedList.map(Number));
    }
    catch(e){
        console.log('Errror: ', e);
    }
}


    const toggle = () => {
      setIsOpen(!isOpen)
    }

    window.onload = () =>{
        if(typeof  window.ethereum !== 'undefined'){
            initializeWallet(); 
            loadContract();

            window.ethereum.on('chainChanged', () =>{
                window.location.reload();
            });
          
            window.ethereum.on('disconnect', () =>{
                window.location.reload();
            });
        }
        else{
            window.alert("Browser does not have Metamask or it doesn't support Web3!");
        }
    }



    return (
        <>

          <Sidebar toggle={toggle} isOpen={isOpen} initializeWallet={initializeWallet} isInitialized={isInitialized} account={account}/>
          <Navbar toggle={toggle} initializeWallet={initializeWallet} isInitialized={isInitialized} account={account}/>
          <HeroSection token={token} account={account}/>
          <InfoSection />
          <RoadmapSection />
          <TeamSection />
          <FooterSection />       
        </>
    )
}

export default Home;
