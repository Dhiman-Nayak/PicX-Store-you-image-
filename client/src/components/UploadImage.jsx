import React,{useState,useEffect} from "react";
import axios from "axios";
import {useWeb3Context} from "../contexts/useWeb3Context"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom";
import {ImageUp} from "lucide-react"

function UploadImage() {
  const navigateTo = useNavigate();
  const [loading, setLoading] = useState(false)
  const [file, setFile] = React.useState(null);
  const {web3State} =useWeb3Context()
  const {selectedAccount,contractInstance}=web3State;
  

  console.log("gg",selectedAccount,contractInstance);
  const uploadImageHash = async (selectedAccount,ipfsHash)=>{
    console.log(selectedAccount,ipfsHash);
    const tx= await contractInstance.uploadFiles(selectedAccount,ipfsHash)
    await toast.promise(tx.wait(),{
      loading:"Transaction is under progress",
      success:"Transaction Successful",
      error:"Transaction failed"
    })
  }
  // useEffect(() => {
  //   if (selectedAccount) {
  //     navigateTo("/");
  //   }
  // }, [selectedAccount, navigateTo]);

  const handleImageUpload = async () => {
    try {
      setLoading(true)
      const formData = new FormData();
      formData.append("file", file);
      const url = `http://localhost:3000/api/uploadImage`;
      // const res = await axios.post(url, formData);
      await toast.promise(axios.post(url, formData),{
        loading:"Image is uploading",
        success:async ()=>{
          await uploadImageHash(selectedAccount,res.data.ipfsHash)
          return "Image upload Successful"
        },
        error:"Image upload failed"
      })
      setLoading(false)
    } catch (error) {
      console.log(error);
      toast.error("Image upload failed")
    }
  };
  console.log(file);
  return (
    // <div>
    //   <input
    //     type="file"
    //     name=""
    //     onChange={(e) => setFile(e.target.files[0])}
    //     id=""
    //     disabled={loading}
        
    //     />
    //   <button 
    //     onClick={handleImageUpload}
    //     disabled={loading || file}
    //   >Upload</button>
    // </div>
    <div className="h-full w-screen flex flex-col justify-center items-center gap-6">
    <p className="font-semibold md:text-[24px]">
      Upload file with Web3s Security
    </p>
    <div className="w-full flex justify-center items-center">
      <input
        type="file"
        accept=".jpg, .jpeg, .png"
        onChange={(e) => setFile(e.target.files[0])}
        className="w-[200px] md:w-[210px]"
      />
    </div>
    {file ? (
      <button
        onClick={handleImageUpload}
        disabled={loading}
        className="border-sky-400 border-dotted p-2 border-2 rounded-md flex flex-col justify-center items-center hover:bg-sky-200"
      >
        <ImageUp />
        {loading ? "Uploading..." : "Upload"}
      </button>
    ) : (
      <p className="text-[20px] font-semibold text-red-500">
        Choose a File To Upload
      </p>
    )}

    <br />
  </div>
  );
}

export default UploadImage;
