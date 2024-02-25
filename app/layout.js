import { Inter } from "next/font/google";
import '../styles/reset.css'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NFT TO STICKER",
  description: "あなたの所有するNFTを現実世界でアピールしよう",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
