import styles from "./nftCard.module.scss";

export const NFTCard = ({ nft }) => {
  return (
    <div className={styles.card_block}>
      <img className={styles.card_img} src={nft.media[0].gateway}></img>
      <div className={styles.card_detail}>
        <h2 className="">{nft.title}</h2>
        <p className="">Id: {nft.id.tokenId}</p>
        <p className="">{nft.contract.address}</p>
        <p className="">{nft.description}</p>
      </div>
    </div>
  );
};
