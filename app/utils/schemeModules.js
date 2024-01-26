// C:\Users\User\Desktop\nfticker\app\utils\schemeModules.js
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ItemSchma = new Schema({
  walletAddress: String,
  collectionAddress: String,
  tokenID: String,
  title: String,
  thumbnail: String,
  quantity: Number,
  orderDatetime: Date, //注文日時
  status: String, //注文状況（決済失敗、キャンセル、納品完了、未発送、発注中など）
});

export const ItemModel =
  mongoose.models.Order || mongoose.model("Order", ItemSchma);
