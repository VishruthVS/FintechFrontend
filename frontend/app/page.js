"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

function App() {
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
    <div
      className="bg-fixed bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url('./images/bg-1.png')" }}
    >
      <nav className="bg-gradient-to-bl  from-sky-900 via-gray-900 to-slate-900">
        <div className="container mx-auto">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl text-white">FinTech agent</h1>
            <Link href="/swap">
              <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg  text-center mr-2 mb-2 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] py-2 px-4 ">
                Swap
              </button>
            </Link>
            <Link href="/news">
              <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg  text-center mr-2 mb-2 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] py-2 px-4 ">
                News
              </button>
            </Link>
            <Link href="/dev">
              <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg  text-center mr-2 mb-2 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] py-2 px-4 ">
                Developers
              </button>
            </Link>
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
      </nav>
      <section className="bg-gradient-to-bl  from-sky-900 via-gray-900 to-slate-900 min-h-screen flex items-center justify-center">
        <div className="container mx-auto text-center">
          <h1 className="text-white text-6xl mb-8 title">Faucet</h1>
          <p className="text-white mb-4">Fast and reliable. 50 OCT/day.</p>
          <div className="w-full md:w-1/2 mx-auto">
            <div className="flex box">
              <input
                className="flex-1 rounded-l-lg border-2 border-white py-2 px-4 outline-none"
                type="text"
                placeholder="Enter your wallet address (0x...)"
              />
              <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-r-lg">
                GET TOKENS
              </button>
            </div>
            <div className="mt-4 bg-gray-800 rounded-lg panel">
              <p className="bg-black text-white py-2 px-4 rounded-t-lg panel-heading">
                Transaction Data
              </p>
              <p className="py-2 px-4">transaction data</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
