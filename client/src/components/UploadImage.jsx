import React from "react";
import axios from "axios";
function UploadImage() {
  const [file, setFile] = React.useState(null);
  const handleImageUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);
    const url = `http://localhost:3000/api/uploadImage`;
    const res = await axios.post(url, formData);
    console.log(res.data.ipfsHash);
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
