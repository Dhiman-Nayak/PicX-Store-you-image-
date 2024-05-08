import React from "react";
import axios from "axios";
import { useWeb3Context } from "../contexts/useWeb3Context";
import toast from "react-hot-toast";
import {CircleArrowLeft,CircleArrowRight } from "lucide-react"

function GetImage({reload}) {
  const { web3State } = useWeb3Context();
  const { selectedAccount, contractInstance } = web3State;

  let [currentPage, setCurrentPage] = React.useState(1);
  const [imagePerPage, setImagePerPage] = React.useState(2);
  const [images, setImages] = React.useState([]);
  const [loading, setLoading] = React.useState(false);


  React.useEffect(() => {
    try {
      getImage() && contractInstance;
    } catch (error) {
      toast.error("Error Fetching Images");
    } finally {
      setLoading(false)
    }
  }, [contractInstance, currentPage, imagePerPage, selectedAccount,reload]);

  const getImageHashes = async () => {
    // console.log(selectedAccount,contractInstance);
    const ipfsHashes = await contractInstance.viewFiles(selectedAccount);
    const ipfsHashesArray = Object.values(ipfsHashes);
    return ipfsHashesArray;
  };

  const getImage = async () => {
    setLoading(true);
    const ipfsHashesArray = await getImageHashes();
    const url = `http://localhost:3000/api/getImage?page=${currentPage}&limit=${imagePerPage}`;
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "x-access-token": token,
      },
    };
    const res = await axios.post(url, ipfsHashesArray, config);
    setImages(res.data.decryptedImageArr);
    setLoading(false);
    // console.log(res, images);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
      {/* <button
        onClick={getImage}
        className="bg-white hover:bg-blue-200 hover:text-black text-blue-500 font-bold py-2 px-4 rounded"
      >
        Get Image
      </button> */}
      {/* <button
        onClick={() => pagination(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <button onClick={() => pagination((currentPage = 1))}>Next</button> */}
      <div className="image-container">
        {!loading ?(images.length > 0 ? (
          images.map((image, index) => (
            <img
              key={index}
              src={`data:image/jpeg;base64,${image}`} // Assuming imageData is base64 encoded image data
              alt={`Image ${index}`}
              style={{ maxWidth: "100%", maxHeight: "200px", margin: "10px" }}
            />
          ))
        ) : (
          <>No Image</>
        )):(<>Loading ......</>)}
      </div>
      <div className="w-full h-20 flex justify-center items-center gap-4">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1 || loading}
        >
          <CircleArrowLeft className="w-8 h-8 opacity-80" />
        </button>
        <span className="font-bold text-[24px]">{currentPage}</span>
        <button onClick={() => paginate(currentPage + 1)} disabled={loading}>
          <CircleArrowRight className="w-8 h-8 opacity-80" />
        </button>
      </div>
    </div>
    
  );
}

export default GetImage;
