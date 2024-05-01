import React from 'react'
import { Web3Context } from '../contexts/createWeb3Context'
import { useWeb3Context } from '../contexts/useWeb3Context'


function Home() {
  const {web3State}= useWeb3Context();
  const {selectedAccount}=web3State;
  // console.log(selectedAccount);
  return (
    <div>Home</div>
  )
}

export default Home