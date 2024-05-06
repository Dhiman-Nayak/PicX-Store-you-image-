import { useWeb3Context } from "../contexts/useWeb3Context";
import { connectWallet } from "../utils/connectWallet";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Wallet() {
  const navigateTo = useNavigate();
  const { updateWeb3State, web3State } = useWeb3Context();
  const { selectedAccount } = web3State;
  useEffect(() => {
    if (selectedAccount) {
      navigateTo("/home");
    }
  }, [selectedAccount, navigateTo]);

  const handleWalletConnection = async () => {
    try {
      const { contractInstance, selectedAccount } = await connectWallet();
      updateWeb3State({ contractInstance, selectedAccount });
      navigateTo("/home");
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  return (
    <div className="text-center p-6 bg-slate-400">
      <h1 className="text-white text-4xl mb-6 font-bold">Welcome to PicX</h1>
      <div className="flex justify-center">
        <button
          onClick={handleWalletConnection}
          className="py-3 px-6 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Connect Wallet
        </button>
      </div>
    </div>
  );
}

export default Wallet;
