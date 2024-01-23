"use client";

import styles from "./nftCard.module.scss";
import { useRef, useEffect } from "react";

export const NFTCard = ({ nft, walletAddress, carts, setCarts }) => {
  const addButtonRef = useRef(null);

  //カートに追加ボタン押下したときの処理
  const addButtonClick = () => {
    if (addButtonRef.current.className.includes("add")) {
      //選択した商品がすでにカートに入っているか判別する変数
      let positionThisProductInCart = carts.findIndex(
        (value) => value.collectionAddress == nft.contract.address &&
        value.tokenID == nft.id.tokenId
      );

      if (carts.length <= 0) {
        // console.log("初期追加のif文に入った");
        setCarts([
          {
            walletAddress: walletAddress,
            collectionAddress: nft.contract.address,
            tokenID: nft.id.tokenId,
            title: nft.title,
            thumbnail: nft.media[0].gateway,
            quantity: 1,
          },
        ]);
      } else if (positionThisProductInCart < 0) {
        // console.log("追加のif文に入った");
        setCarts([
          ...carts,
          {
            walletAddress: walletAddress,
            collectionAddress: nft.contract.address,
            tokenID: nft.id.tokenId,
            title: nft.title,
            thumbnail: nft.media[0].gateway,
            quantity: 1,
          },
        ]);
      } else {
        // console.log("quantity増加のif文に入った");
        const updatedCarts = carts.map((item, index) =>
          index === positionThisProductInCart
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        setCarts(updatedCarts);
      }
    }
  };

  useEffect(() => {
    // useEffect を使用して状態が変更されたときにログを表示
    // console.log(carts);
  }, [carts]);

  return (
    <div className={styles.card_block}>
      <img className={styles.card_img} src={nft.media[0].gateway}></img>
      <div className={styles.card_detail}>
        <h2 className={styles.card_title}>{nft.title}</h2>
        {/* <p className="">Id: {nft.id.tokenId}</p> */}
        {/* <p className="">{nft.contract.address}</p> */}
        {/* <p className={styles.card_description}>{nft.description}</p> */}
        <button
          className={styles.addCart}
          ref={addButtonRef}
          onClick={() => {
            addButtonClick();
          }}
        >
          カートに追加
        </button>
      </div>
    </div>
  );
};
