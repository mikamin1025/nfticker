"use client";

import styles from "./metaMask.module.scss";
import { useState, useEffect } from "react";
import detectEthereumProvider from "@metamask/detect-provider";

export const MetaMask = (props) => {
  const [hasProvider, setHasProvider] = useState(null);
  const initialState = { accounts: [] };
  const [wallet, setWallet] = useState(initialState);
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const refreshAccounts = (accounts) => {
      if (accounts.length > 0) {
        updateWallet(accounts);
      } else {
        // if length 0, user is disconnected
        setWallet(initialState);
      }
    };

    const getProvider = async () => {
      const provider = await detectEthereumProvider({ silent: true });
      console.log(provider);
      setHasProvider(Boolean(provider)); // transform provider to true or false

      if (provider) {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        refreshAccounts(accounts);
        window.ethereum.on("accountsChanged", refreshAccounts);
      }
    };

    getProvider();
    return () => {
      window.ethereum?.removeListener("accountsChanged", refreshAccounts);
    };
  }, []);

  const updateWallet = async (accounts) => {
    setWallet({ accounts });
    // 親コンポーネントでの状態更新
    props.setWalletAddress(accounts.length > 0 ? accounts[0] : "");
  };

  const handleConnect = async () => {
    setIsConnecting(true);
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setError(false);
      updateWallet(accounts);
    } catch (err) {
      setError(true);
      setErrorMessage(err.message);
    }
    setIsConnecting(false);
  };
  const handleRevoke = async () => {
    var result = window.confirm("ウォレット接続を解除しますか");

    if (result) {
      try {
        await window.ethereum.request({
          method: "wallet_revokePermissions",
          params: [{ eth_accounts: {} }],
        });
        setError(false);
        updateWallet("");
        window.location.reload();
      } catch (err) {
        console.error("ウォレットの接続解除中にエラーが発生しました:", err);
      }
    }
  };

  return (
    <div className={styles.MeataMask}>
      {wallet.accounts.length < 1 ? (
        <button onClick={handleConnect} disabled={isConnecting}>
          {isConnecting ? "接続中..." : "MetaMaskに接続"}
        </button>
      ) : (
        <button onClick={handleRevoke}>MetaMaskの接続を解除</button>
      )}
    </div>
  );
};
