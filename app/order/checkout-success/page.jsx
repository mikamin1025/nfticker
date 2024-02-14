// C:\Users\User\Desktop\nfticker\app\order\checkout-success\page.jsx
"use client";

import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

//■MongoDBから更新対象データを取得する
const getOrderInfo = async (sessionID) => {
  const response = await fetch(`/api/order/readorder/${sessionID}`);
  const jsonData = await response.json();
  const orders = jsonData.orders;
  return orders;
};

export default function updateOrderInfo(context) {
  //URLのsession_idを取得する
  const sessionID = context.searchParams.session_id;
  const router = useRouter();

  useEffect(() => {
    const fetchSessionInfo = async () => {
      try {
        //MongoDBから追加した注文情報を再取得する
        const ordersInfo = await getOrderInfo(sessionID);
        console.log(ordersInfo);

        const response = await fetch(`/api/order/updateorder/${sessionID}`, {
          method: "PUT",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(ordersInfo),
        });
        const jsonData = await response.json();
        alert(jsonData.message);
        console.log("DB書き込み処理完了");

        if(jsonData) {
          router.push(jsonData.commit_url);
        }

      } catch (error) {
        console.error("セッション情報の取得中にエラーが発生しました。", error);
      }
    };
    // 関数を呼び出してセッション情報を取得
    fetchSessionInfo();
  },[]);

  return (
    <div>
      <h1>支払い完了ページ</h1>
    </div>
  );
}
