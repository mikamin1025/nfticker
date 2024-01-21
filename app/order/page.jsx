"use client";

import { useEffect, useState } from "react";
import { NFTCard } from "../components/order/nftCard";
import { MetaMask } from "../components/order/metaMask";
import "../globals.css";
import styles from "./page.module.scss";

export default function Home() {
  const [wallet, setWalletAddress] = useState("");
  const [NFTs, setNFTs] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  //カートの中身表示
  const cartClick = () => {
    setIsOpen((prev) => !prev);
  };

  //NFT取得
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
    <body className={isOpen ? styles.showCart : ""}>
      <div className={styles.order_page}>
        <div className={styles.order_page_header}>
          <MetaMask setWalletAddress={setWalletAddress}/>
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
            表示
          </button>
        </div>

        <div className={styles.order_page_body}>
          <div className={styles.icon_cart} id="icon_cart"
            onClick={() => {cartClick();}}
          >
            <div className={styles.icon_cart_inner}>
              <svg
                class="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1"
                />
              </svg>
              <span>0</span>
            </div>
          </div>

          {/* NFTの画像表示（商品一覧） */}
          <div className={styles.ListProduct}>
            <div className={styles.order_nftcard}>
              {NFTs.length
                ? NFTs.map((nft) => {
                    return <NFTCard nft={nft} walletAddress={wallet}></NFTCard>;
                  })
                : ""}
            </div>
          </div>

          {/* カート内容 */}
          <div className={styles.cartTab}>
            <h1>Shopping Cart</h1>
            <div className={styles.listCart}>
              <div className={styles.item}>
                <div className={styles.image}>
                  <img src="../../public/image/5.jpg" alt="" />
                </div>
                <div className={styles.name}>NAME</div>
                <div className={styles.totalPrice}>&yen;2,000</div>
                <div className={styles.quantity}>
                  <span className={styles.minus}>&lt;</span>
                  <span>1</span>
                  <span className={styles.minus}>&gt;</span>
                </div>
              </div>
            </div>
            <div className={styles.btn}>
              <button className={styles.close} onClick={() => {cartClick();}}>CLOSE</button>
              <button className={styles.checkOut}>CHECK OUT</button>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
