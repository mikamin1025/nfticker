import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request, response) {
  //商品情報を受け取る
  const { title, price, totalQuantity, walletAddress } = await request.json();

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "jpy",
            product_data: {
              name: title,
            },
            unit_amount: price,
          },
          quantity: totalQuantity,
        },
      ],
      shipping_address_collection: {
        allowed_countries: ['JP']
      },
      mode: "payment",
      // メタデータとしてwalletaddressを追加
      metadata: {
        walletaddress: walletAddress,
      },
      //支払いが成功したときのURL（リダイレクト先）※デプロイ時に変更が必要
      success_url:
        "http://localhost:3000/order/checkout-success?session_id={CHECKOUT_SESSION_ID}",
      //支払いがキャンセルされたときのURL（リダイレクト先）※デプロイ時に変更が必要
      cancel_url: "http://localhost:3000/order/checkout-chancel?session_id={CHECKOUT_SESSION_ID}",
    });

    return NextResponse.json({ checkout_url: session.url, session_id: session.id });
  } catch (err) {
    //エラーが発生した場合はエラーメッセージを返す
    return NextResponse.json(err.message);
  }
}
