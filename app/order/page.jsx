// C:\Users\User\Desktop\nfticker\app\order\page.jsx
"use client";

import { useEffect, useState, useRef } from "react";
import { NFTCard } from "../components/order/nftCard";
import { MetaMask } from "../components/order/metaMask";
import "../globals.css";
import styles from "./page.module.scss";

export default function Home() {
  const [wallet, setWalletAddress] = useState(""); //walletAdress
  const [NFTs, setNFTs] = useState([]); //NFTデータ
  const [isOpen, setIsOpen] = useState(false); //カートの表示・非表示
  const [carts, setCarts] = useState([]); //カートの中身
  let subQuantity = 0; //注文数合計用変数
  const [totalQuantity, settotalQuantity] = useState(0); //注文ステッカー合計数

  //■カートの中身表示
  const cartClick = () => {
    setIsOpen((prev) => !prev);
  };

  //■カート内のマイナスボタン押下処理
  const mainusClick = async (event) => {
    carts[event.target.id].quantity =
      (await carts[event.target.id].quantity) - 1;

    if (carts[event.target.id].quantity === 0) {
      carts.splice(event.target.id, 1);
    }
    setCarts([...carts]);
  };

  //■カート内のプラスボタン押下処理
  const plusClick = async (event) => {
    carts[event.target.id].quantity =
      (await carts[event.target.id].quantity) + 1;
    setCarts([...carts]);
  };

  //■NFT取得
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

  //■NFTを一覧表示する（wallet情報が変わったときに再表示）
  useEffect(() => {
    fetchNFTs();
  }, [wallet]);

  //■カートのブラウザストレージ情報があったら取得
  useEffect(() => {
    //カートのブラウザストレージ情報があったら取得
    if (localStorage.getItem("carts")) {
      if (
        JSON.parse(localStorage.getItem("carts"))[0].walletAddress == wallet
      ) {
        setCarts(JSON.parse(localStorage.getItem("carts")));
      }
    }
  }, [wallet]);

  //■カート追加ボタンを押したときの挙動（リストに追加）
  useEffect(() => {
    //「カート追加」ボタン押下でカート内容が表示
    if (carts.length > 0) {
      // totalQuantity取得
      carts.forEach((cart) => {
        subQuantity = subQuantity + cart.quantity;
        settotalQuantity(subQuantity);
      });
      //カート画面制御
      // setIsOpen(true);

      //ブラウザメモリにデータ格納
      localStorage.setItem("carts", JSON.stringify(carts));
    }
  }, [carts]);

  //■注文確定ボタン押下時の処理
  const handleCheckOut = async(e) => {
    e.preventDefault(); //ブラウザのリロードを止める
    try {
      const orderItems = carts.map((item) => ({
        walletAddress: item.walletAddress,
        collectionAddress: item.collectionAddress,
        tokenID: item.tokenID,
        title: item.title,
        thumbnail: item.thumbnail,
        quantity: item.quantity,
        orderDatetime: new Date(), // 現在の日時を取得して設定
        status: "pending", // 例として "pending" を設定、実際の状態に合わせて変更する
      }));

      const response = await fetch("http://localhost:3000/api/order", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderItems),
      });
      const jsonData = await response.json();
      alert(jsonData.message);
    } catch (error) {
      alert("商品情報更新失敗");
    }
  };

  return (
    <body className={isOpen ? styles.showCart : ""}>
      <div className={styles.order_page}>
        <div className={styles.order_page_header}>
          <MetaMask setWalletAddress={setWalletAddress} />
          {/* <input
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
          </button> */}
        </div>

        <div className={styles.order_page_body}>
          <div
            className={styles.icon_cart}
            id="icon_cart"
            onClick={() => {
              cartClick();
            }}
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
              <span>{totalQuantity}</span>
            </div>
          </div>

          {/* NFTの画像表示（商品一覧） */}
          <div className={styles.ListProduct}>
            <div className={styles.order_nftcard}>
              {NFTs.length
                ? NFTs.map((nft) => {
                    return (
                      <NFTCard
                        nft={nft}
                        walletAddress={wallet}
                        carts={carts}
                        setCarts={setCarts}
                      ></NFTCard>
                    );
                  })
                : ""}
            </div>
          </div>

          {/* カート内容 */}
          <div className={styles.cartTab}>
            <h1>Shopping Cart</h1>
            <div className={styles.listCart}>
              {carts.length
                ? carts.map((product, index) => {
                    return (
                      <div className={styles.item}>
                        <div className={styles.image}>
                          <img src={product.thumbnail} alt="" />
                        </div>
                        <div className={styles.name}>{product.title}</div>
                        {/* 金額は現状は一定→商品ラインナップが増えたら要修正 */}
                        <div className={styles.totalPrice}>
                          &yen;{500 * product.quantity}
                        </div>
                        <div className={styles.quantity}>
                          <span
                            className={styles.minus}
                            id={index}
                            onClick={(e) => {
                              mainusClick(e);
                            }}
                          >
                            -
                          </span>
                          <span>{product.quantity}</span>
                          <span
                            className={styles.plus}
                            id={index}
                            onClick={(e) => {
                              plusClick(e);
                            }}
                          >
                            +
                          </span>
                        </div>
                      </div>
                    );
                  })
                : ""}
            </div>
            <div className={styles.btn}>
              <button
                className={styles.close}
                onClick={() => {
                  cartClick();
                }}
              >
                CLOSE
              </button>
              <button className={styles.checkOut} onClick={handleCheckOut}>CHECK OUT</button>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
