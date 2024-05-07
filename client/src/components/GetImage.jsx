import React from 'react'
import axios from 'axios'
import { useWeb3Context } from '../contexts/useWeb3Context'

function GetImage() {
  const {web3State}=useWeb3Context()
  const {selectedAccount,contractInstance}=web3State;

  const [currentPage, setCurrentPage] = React.useState(1)
  const [imagePerPage, setImagePerPage] = React.useState(2)

  const getImageHashes=async ()=>{
    const ipfsHashes = await contractInstance.viewFiles(selectedAccount)
    const ipfsHashesArray=Object.values(ipfsHashes)
    return ipfsHashesArray
  }

  const getImage= async ()=>{
    const ipfsHashesArray=await getImageHashes()
    const url=`http://localhost:3000/api/getImage?page=${currentPage}&limit=${imagePerPage}`
    const token=localStorage.getItem("token")
    const config={
      headers:{
        "x-access-token":token
      }
    }
    const res = await axios.post(url,ipfsHashesArray,config)

  }
  return (
    <div>
  <button onClick={getImage} className="bg-white hover:bg-blue-200 hover:text-black text-blue-500 font-bold py-2 px-4 rounded">
    Get Image
  </button>
</div>

  )
}

export default GetImage