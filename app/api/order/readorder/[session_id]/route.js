// \app\api\order\readsingle\session_id\route.js

import { NextResponse } from "next/server";
import connectDB from "../../../../utils/database";
import { ItemModel } from "../../../../utils/schemeModules";

export async function GET(reauest, context) {
  try {
    await connectDB();
    const sessionID = await context.params.session_id; // セッションIDを取得
    const orders = await ItemModel.find({sessionID:sessionID});
    
    return NextResponse.json({
      message: "注文情報読み取り成功",
      orders: orders,
    });
  } catch (error) {
    return NextResponse.json({ message: "注文情報読み取り失敗" });
  }
}
