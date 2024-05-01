import { useWeb3Context } from '../contexts/useWeb3Context'
import { connectWallet } from '../utils/connectWallet'; 
import { useEffect } from 'react';
import {useNavigate } from "react-router-dom"
function Wallet() {

  const navigateTo=useNavigate()
    const {updateWeb3State,web3State}=useWeb3Context();
    const {selectedAccount}=web3State;
    useEffect(()=>{
      if(selectedAccount){
        navigateTo("/home")
      }
    },[selectedAccount,navigateTo])

    const handleWalletConnection= async()=>{
      const {contractInstance,selectedAccount}= await connectWallet()
      updateWeb3State({contractInstance,selectedAccount});
    }
    

  return (
    <div>
      <button onClick={handleWalletConnection}>Connect</button>
    </div>
  )
}

export default Wallet