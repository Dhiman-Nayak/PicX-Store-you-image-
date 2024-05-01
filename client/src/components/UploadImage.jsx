import React from 'react'
import axios from "axios"
function UploadImage() {

    const handleImageUpload=async ()=>{
        const url=`http://localhost:3000/api/uploadImage`
        const res= await axios.post(url)
        console.log(res.data);
    }

  return (
    <div>
        <button onClick={handleImageUpload}>Upload</button>
    </div>
  )
}

export default UploadImage