import {ethers} from "ethers"
import contractAbi from "../constants/contractAbi.json"
import toast from "react-hot-toast"
import axios from "axios"

export const connectWallet= async ()=>{
    try {
        if(!window.ethereum){
            throw new error("Metamask not installed")
        }
    
        const accounts= await window.ethereum.request({
            method:"eth_requestAccounts"
        })
        const selectedAccount=accounts[0];
        console.log("connectWallet :account[0]=",accounts[0]);
    
        const provider=new ethers.BrowserProvider(window.ethereum)
        const signer=await provider.getSigner()

        const message="Welcome to PicX"
        // const signature= await signer.signMassage(message)
        const signature = await signer.signMessage(message)
        console.log("connectWallet :signature=",signature);
        const dataSignature={
            signature
        }

        const url=`http://localhost:3000/api/authenticate?address=${selectedAccount}`
        const res=await axios.post(url,dataSignature)
        console.log(res.data);
        const contractAddress= "0x84dD637d5724cA3cC49cDc0DD3a4E1d3aF91F79E"
        const contractInstance= new ethers.Contract(contractAddress,contractAbi,signer)
    
    
        return {contractInstance,selectedAccount}
    } catch (error) {
        toast.error("Walllet connection error")
        console.log(error);
    }
}