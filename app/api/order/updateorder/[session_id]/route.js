// \app\api\order\updateorder\[session_id]\route.js

import { NextResponse } from "next/server";
import connectDB from "../../../../utils/database";
import { ItemModel } from "../../../../utils/schemeModules";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const commit_url = "/"

export async function PUT(request, context) {
  const reqBodys = await request.json();
  const sessionID = await context.params.session_id; // セッションIDを取得
  const session = await stripe.checkout.sessions.retrieve(sessionID);

  const updateReqBodys = reqBodys.map((orderOne) => {
    return { 
      ...orderOne, 
      payment_intent: session.payment_intent,
      order_name: session.customer_details.name,
      order_address: session.customer_details.address.line1 + session.customer_details.address.line2,
      status: "order_yet",
    };
  });

  try {
    await connectDB();

     // アップデートを非同期で実行し、すべてのアップデートが完了するのを待つ
     await Promise.all(updateReqBodys.map(async (reqBody) => {
      await ItemModel.updateOne({_id:reqBody._id}, reqBody);
    }));

    // await ItemModel.updateOne({_id:sessionID}, reqBody);
    return NextResponse.json({ commit_url: commit_url, message: "注文データ編集成功" });
  } catch (error) {
    return NextResponse.json({ message: "注文データ編集失敗" });
  }
}
