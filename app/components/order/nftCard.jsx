import styles from "./nftCard.module.scss";

export const NFTCard = ({ nft }) => {
  return (
    <div className={styles.card_block}>
      <img className={styles.card_img} src={nft.media[0].gateway}></img>
      <div className={styles.card_detail}>
        <h2 className={styles.card_title}>{nft.title}</h2>
        {/* <p className="">Id: {nft.id.tokenId}</p> */}
        {/* <p className="">{nft.contract.address}</p> */}
        {/* <p className={styles.card_description}>{nft.description}</p> */}
        <button className={styles.addCart}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};
