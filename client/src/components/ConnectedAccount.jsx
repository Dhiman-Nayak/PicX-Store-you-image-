import React from "react";
import { useWeb3Context } from "../contexts/useWeb3Context";

function ConnectedAccount() {
  const { web3State } = useWeb3Context();
  const { selectedAccount, contractInstance } = web3State;
  return (
    <div className="w-full flex flex-col justify-center items-center md:flex-row md:justify-between md:px-10">
      <p className="font-semibold">Connected Account : {selectedAccount}</p>
    </div>
  );
}

export default ConnectedAccount;
