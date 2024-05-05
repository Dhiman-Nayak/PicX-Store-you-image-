import React from "react";
import axios from "axios";
import {useWeb3Context} from "../contexts/useWeb3Context"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom";

function UploadImage() {
  const navigateTo = useNavigate();

  const [file, setFile] = React.useState(null);
  const {web3State} =useWeb3Context()
  const {selectedAccount,contractInstance}=web3State;
  if(!selectedAccount){
    navigateTo("/");
  }

  console.log("gg",selectedAccount,contractInstance);
  const uploadImageHash = async (selectedAccount,ipfsHash)=>{
    console.log(selectedAccount,ipfsHash);
    const tx= await contractInstance.uploadFiles(selectedAccount,ipfsHash)
    console.log("tx",tx);
  }

  const handleImageUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const url = `http://localhost:3000/api/uploadImage`;
      const res = await axios.post(url, formData);
      console.log("ipfsHash",res.data.ipfsHash);
      await uploadImageHash(selectedAccount,res.data.ipfsHash)
      toast.success("image uploaded")
    } catch (error) {
      console.log(error);
      toast.error("Image upload failed")
    }
  };
  console.log(file);
  return (
    <div>
      <input
        type="file"
        name=""
        onChange={(e) => setFile(e.target.files[0])}
        id=""
      />
      <button onClick={handleImageUpload}>Upload</button>
    </div>
  );
}

export default UploadImage;
