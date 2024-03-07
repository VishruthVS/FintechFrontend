"use client";
import { useEffect, useState } from "react";
export default function SwapComponent() {
  const [walletAddress, setWalletAddress] = useState("");

  useEffect(() => {
    getCurrentWalletConnected();
    addWalletListener();
  }, [walletAddress]);

  const connectWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        /* MetaMask is installed */
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };

  const getCurrentWalletConnected = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          console.log(accounts[0]);
        } else {
          console.log("Connect to MetaMask using the Connect button");
        }
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };

  const addWalletListener = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      window.ethereum.on("accountsChanged", (accounts) => {
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      });
    } else {
      /* MetaMask is not installed */
      setWalletAddress("");
      console.log("Please install MetaMask");
    }
  };
  return (
    <div>
      <button
        className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg  text-center mr-2 mb-2 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] py-2 px-4 "
        onClick={connectWallet}
      >
        <span className="font-bold">
          {walletAddress && walletAddress.length > 0
            ? `Connected: ${walletAddress.substring(
                0,
                6
              )}...${walletAddress.substring(38)}`
            : "Connect Wallet"}
        </span>
      </button>
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-bl  from-sky-900 via-gray-900 to-slate-900">
        <div className="bg-white shadow-md rounded-lg p-8">
          <h1 className="text-2xl font-bold mb-4">0x Swap API Demo</h1>
          <p className="text-gray-600 mb-6">
            Check out the 0x Docs and Code to build your own
          </p>
          <p className="text-gray-600 mb-4">Polygon Network</p>
          <div className="flex space-x-4 mb-6">
            <div className="flex items-center space-x-2">
              <select className="appearance-none bg-gray-100 border border-gray-300 rounded-md py-2 px-4 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="wmatic">WMATIC</option>{" "}
                <option value="wmatic">DAI</option>{" "}
                <option value="wmatic">USDC</option>{" "}
                <option value="wmatic">UNI</option>{" "}
                <option value="wmatic">USDT</option>
                {/* Add more options as needed */}
              </select>
              <input
                type="text"
                className="bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Amount"
              />
            </div>
            <div className="flex items-center space-x-2">
              <select className="appearance-none bg-gray-100 border border-gray-300 rounded-md py-2 px-4 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="wmatic">WMATIC</option>{" "}
                <option value="wmatic">DAI</option>{" "}
                <option value="wmatic">USDC</option>{" "}
                <option value="wmatic">UNI</option>{" "}
                <option value="wmatic">USDT</option>
                {/* Add more options as needed */}
              </select>
              <input
                type="text"
                className="bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Amount"
              />
            </div>
          </div>
          <button
            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg  text-center mr-2 mb-2 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] py-2 px-4 "
            onClick={connectWallet}
          >
            <span className="font-bold">
              {walletAddress && walletAddress.length > 0
                ? `Connected: ${walletAddress.substring(
                    0,
                    6
                  )}...${walletAddress.substring(38)}`
                : "Connect Wallet"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
