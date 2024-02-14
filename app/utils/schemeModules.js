// C:\Users\User\Desktop\nfticker\app\utils\schemeModules.js
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ItemSchma = new Schema({
  sessionID: String, //stripeのsession情報
  payment_intent: String, //strpieの支払いユニークコード
  order_name: String, //注文者氏名
  order_address: String, //注文者お届け先
  walletAddress: String, //ウォレットアドレス
  collectionAddress: String, //コレクションアドレス
  tokenID: String, //NFTトークンID
  title: String, //NFTタイトル
  thumbnail: String, //NFT画像
  quantity: Number, //注文合計数
  orderDatetime: Date, //注文日時
  status: String, //注文状況（決済失敗、キャンセル、納品完了、未発送、発注中など）
});

export const ItemModel =
  mongoose.models.Order || mongoose.model("Order", ItemSchma);
