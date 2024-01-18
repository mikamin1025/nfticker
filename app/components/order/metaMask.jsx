"use client";

import styles from "./metaMask.module.scss";
import { useState, useEffect } from "react";
import detectEthereumProvider from "@metamask/detect-provider";

export const MetaMask = (props) => {
  const [hasProvider, setHasProvider] = useState(null);
  const initialState = { accounts: [] }; /* New */
  const [wallet, setWallet] = useState(initialState); /* New */

  const [isConnecting, setIsConnecting] = useState(false); /* New */
  const [error, setError] = useState(false); /* New */
  const [errorMessage, setErrorMessage] = useState(""); /* New */

  useEffect(() => {
    const refreshAccounts = (accounts) => {
      /* New */
      if (accounts.length > 0) {
        /* New */
        updateWallet(accounts); /* New */
      } else {
        /* New */
        // if length 0, user is disconnected                    /* New */
        setWallet(initialState); /* New */
      } /* New */
    }; /* New */

    const getProvider = async () => {
      const provider = await detectEthereumProvider({ silent: true });
      console.log(provider);
      setHasProvider(Boolean(provider)); // transform provider to true or false

      if (provider) {
        /* New */
        const accounts = await window.ethereum.request(
          /* New */
          { method: "eth_accounts" } /* New */
        ); /* New */
        refreshAccounts(accounts); /* New */
        window.ethereum.on("accountsChanged", refreshAccounts); /* New */
      } /* New */
    };

    getProvider();
    return () => {
      /* New */
      window.ethereum?.removeListener("accountsChanged", refreshAccounts);
    }; /* New */
  }, []);

  const updateWallet = async (accounts) => {
    /* New */
    setWallet({ accounts }); /* New */
  }; /* New */

  const handleConnect = async () => {
    /* Updated */
    setIsConnecting(true); /* New */
    await window.ethereum
      .request({
        /* Updated */ method: "eth_requestAccounts",
      })
      .then((accounts) => {
        /* New */
        setError(false); /* New */
        updateWallet(accounts); /* New */
      }) /* New */
      .catch((err) => {
        /* New */
        setError(true); /* New */
        setErrorMessage(err.message); /* New */
      }); /* New */
    setIsConnecting(false); /* New */
  };
  const handleRevoke = async () => {
    var result = window.confirm("ウォレット接続を解除しますか");

    if (result) {
      await window.ethereum
        .request({
          method: "wallet_revokePermissions",
          params: [
            {
              eth_accounts: {},
            },
          ],
        })
        .then(() => {
          setError(false);
          updateWallet("");
          // reloadメソッドによりページをリロード
          window.location.reload();
        });
    } else {
      //処理なし
      return;
    }
  };

  return (
    <div className={styles.MeataMask}>
      <div>Injected Provider {hasProvider ? "DOES" : "DOES NOT"} Exist</div>
      {window.ethereum?.isMetaMask &&
      wallet.accounts.length < 1 /* Updated */ ? (
        <button onClick={handleConnect}>Connect MetaMask</button>
      ) : (
        <button onClick={handleRevoke}>Revoke MetaMask</button>
      )}

      {wallet.accounts.length > 0 /* New */ ? (
        // <div>Wallet Accounts: { wallet.accounts[0] }</div>
        <div>{props.setWalletAddress(wallet.accounts[0])}</div>
      ) : (
        <div>{props.setWalletAddress("")}</div>
      )}
    </div>
  );
};
