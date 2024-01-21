import styles from "./nftCard.module.scss";
import { useRef } from "react";

export const NFTCard = ({ nft, walletAddress }) => {
  const addButtonRef = useRef(null);
  let carts = [];

  //カートに追加ボタン押下したときの処理
  const addButtonClick = () => {
    console.log(nft);
    console.log(walletAddress);

    if (addButtonRef.current.className.includes("add")) {
      if (carts.length <= 0) {
        carts = [
          {
            walletAddress: {walletAddress},
            collectionAddress: nft.contract.address,
            tokenID: nft.id.tokenId,
            title: nft.title,
            value: 1,
          },
        ];
      }
    }

    console.log(carts);
  };

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
