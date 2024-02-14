// app/api/order/post.js

import { NextResponse } from "next/server";
import connectDB from "../../utils/database";
import { ItemModel } from "../../utils/schemeModules";

export async function POST(request) {
  const reqBody = await request.json();

  try {
    await connectDB();
    await ItemModel.create(reqBody);
    return NextResponse.json({ message: "注文情報登録" });
  } catch (error) {
    return NextResponse.json({ message: "注文情報登録失敗" });
  }
}
