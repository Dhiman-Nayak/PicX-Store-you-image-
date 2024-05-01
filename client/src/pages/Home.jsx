import React from 'react'
import { Web3Context } from '../contexts/createWeb3Context'
import { useWeb3Context } from '../contexts/useWeb3Context'
import UploadImage from '../components/UploadImage';
import GetImage from '../components/GetImage';
function Home() {
  const {web3State}= useWeb3Context();
  const {selectedAccount}=web3State;
  // console.log(selectedAccount);
  return (
    <div>
      <UploadImage />
    </div>
  )
}

export default Home