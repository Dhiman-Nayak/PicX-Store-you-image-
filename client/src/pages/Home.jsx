import React from 'react'
import { Web3Context } from '../contexts/createWeb3Context'
import { useWeb3Context } from '../contexts/useWeb3Context'
import UploadImage from '../components/UploadImage';
import GetImage from '../components/GetImage';
function Home() {
  // const {web3State}= useWeb3Context();
  // const {selectedAccount}=web3State;
  const [reload,setReload]=React.useState(false)
    const reloadEffect=()=>{
      setReload(!reload)
    }
  return (
    <div className='relative h-full w-screen flex flex-col justify-center items-center'>
      <UploadImage reloadEffect={reloadEffect}/>
      <GetImage reload={reload} />
    </div>
  )
}

export default Home