"use client";

import { useState } from "react";
import { NFTCard } from "../components/order/nftCard";
import { MetaMask } from "../components/order/metaMask";
import "../globals.css";
import styles from "./page.module.scss";

export default function Home() {
  const [wallet, setWalletAddress] = useState("");
  const [NFTs, setNFTs] = useState([]);

  const fetchNFTs = async () => {
    let nfts;
    console.log("fetching nfts");
    // const api_key = "A8A1Oo_UTB9IN5oNHfAc2tAxdR4UVwfM";
    const api_key = "iEYZQqbPyGnjt-YGmdXVlzuX8fpEsgZN";
    const baseURL = `https://eth-mainnet.g.alchemy.com/v2/${api_key}/getNFTs/`;
    var requestOptions = {
      method: "GET",
    };

    //ウォレットに紐づくNFTデータを取得する
    const fetchURL = `${baseURL}?owner=${wallet}`;
    nfts = await fetch(fetchURL, requestOptions).then((data) => data.json());

    if (nfts) {
      console.log("nfts:", nfts);
      setNFTs(nfts.ownedNfts);
    }
  };

  return (
    <div className={styles.order_page}>
      <div className="">
        <MetaMask setWalletAddress={setWalletAddress} />
        <input
          onChange={(e) => {
            setWalletAddress(e.target.value);
          }}
          value={wallet}
          type={"text"}
          placeholder="Add your wallet address"
        ></input>
        <button
          className=""
          onClick={() => {
            fetchNFTs();
          }}
        >
          Let's go!
        </button>
      </div>
      <div className={styles.order_nftcard}>
        {NFTs.length
          ? NFTs.map((nft) => {
              return <NFTCard nft={nft}></NFTCard>;
            })
          : ""}
      </div>
    </div>
  );
}
