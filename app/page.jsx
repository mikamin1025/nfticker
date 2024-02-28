// app\page.jsx

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header_block}>
          <div className={styles.header_surface}>
            <div className={styles.header_titlearea}>
              <h1 className={styles.header_title}>{`NFT\nを\nステッカー\nに！！`}</h1>
              <Image
                src="/image/survice_img.png"
                height={267}
                width={730}
                alt=""
                className={styles.header_img}
              />
            </div>
          </div>
          <div className={styles.header_buttonarea}>
            <Link className={styles.header_button} href="/">
              ORDER
            </Link>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        {/* SECTION-SURVICE */}
        <section className={styles.section}>
          <h2 className={styles.section_survice_title}>SURVICE</h2>
          <ul className={styles.senction_survice_ulist}>
            <li className={styles.section_survice_ulist_li}>
              ウォレットアドレスに所有するNFT画像を「ステッカー」にするサービスです。
            </li>
            <li className={styles.section_survice_ulist_li}>
              自身のアイデンティティとも言えるPFP（プロフィール画像）をデジタルから現実世界へ！
            </li>
            <li className={styles.section_survice_ulist_li}>
              オフ会などのイベントでスマホやパソコンに貼ってさりげなくアピールしちゃおう！
            </li>
          </ul>
        </section>
        {/* SECTION-PRICE */}
        <section className={styles.section}>
          <h2 className={styles.section_price_title}>PRICE</h2>
          <p className={styles.section_price_big}>
            &yen;500/<span>枚</span>
          </p>
          <ul className={styles.senction_price_ulist}>
            <li className={styles.section_price_ulist_li}>
              支払い金額は&yen;500×注文数 となります。
            </li>
          </ul>
        </section>
        {/* SECTION-HOW TO ORDER */}
        <section className={styles.section}>
          <h2 className={styles.section_how_title}>HOW TO ORDER</h2>
          {/* STEP1 */}
          <div className={styles.section_how_stepblock}>
            <div className={styles.section_how_steptitle}>
              <div className={styles.section_how_stepnumber}>
                <p className={styles.section_how_number}>01</p>
                <p className={styles.section_how_step}>STEP</p>
              </div>
              <p className={styles.section_how_text}>
                ウォレットアドレスを入力する
              </p>
            </div>
            <Image
              src="/image/STEP1.JPG"
              height={160}
              width={916}
              alt="メタマスクのウォレットアドレスを入力"
              className={styles.section_how_img1}
            />
          </div>
          {/* STEP2 */}
          <div className={styles.section_how_stepblock}>
            <div className={styles.section_how_steptitle}>
              <div className={styles.section_how_stepnumber}>
                <p className={styles.section_how_number}>02</p>
                <p className={styles.section_how_step}>STEP</p>
              </div>
              <p className={styles.section_how_text}>
                ウォレットに紐づくNFT画像を一覧表示する
              </p>
            </div>
            <Image
              src="/image/STEP2.JPG"
              height={531}
              width={821}
              alt="NFT画像を一覧表示する"
              className={styles.section_how_img2}
            />
          </div>
          {/* STEP3 */}
          <div className={styles.section_how_stepblock}>
            <div className={styles.section_how_steptitle}>
              <div className={styles.section_how_stepnumber}>
                <p className={styles.section_how_number}>03</p>
                <p className={styles.section_how_step}>STEP</p>
              </div>
              <p className={styles.section_how_text}>
                カートに追加＆注文内容を確認する
              </p>
            </div>
            <Image
              src="/image/STEP3.JPG"
              height={492}
              width={414}
              alt="カートに追加＆注文内容を確認する"
              className={styles.section_how_img3}
            />
          </div>
          {/* STEP4 */}
          <div className={styles.section_how_stepblock}>
            <div className={styles.section_how_steptitle}>
              <div className={styles.section_how_stepnumber}>
                <p className={styles.section_how_number}>04</p>
                <p className={styles.section_how_step}>STEP</p>
              </div>
              <p className={styles.section_how_text}>
                クレジットカードで決済する
              </p>
            </div>
            <Image
              src="/image/STEP4.JPG"
              height={275}
              width={476}
              alt="クレジットカードで決済する"
              className={styles.section_how_img4}
            />
          </div>
        </section>
        {/* SECTION-FAQ */}
        <seciton className={styles.section_faq}>
          <h2 className={styles.section_faq_title}>FAQ</h2>

          <div className={styles.section_faq_accordion}>
            <div className={styles.option}>
              <input
                type="checkbox"
                id="toggle1"
                className={styles.toggle}
              ></input>
              <label className={styles.title} htmlFor="toggle1">
                Ｑ．費用はどれくらいですか？
              </label>
              <div className={styles.content}>
                <p>
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </p>
              </div>
            </div>
            <div className={styles.option}>
              <input
                type="checkbox"
                id="toggle2"
                className={styles.toggle}
              ></input>
              <label className={styles.title} htmlFor="toggle2">
                Ｑ．ステッカーの配送方法は？
              </label>
              <div className={styles.content}>
                <p>
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </p>
              </div>
            </div>
            <div className={styles.option}>
              <input
                type="checkbox"
                id="toggle3"
                className={styles.toggle}
              ></input>
              <label className={styles.title} htmlFor="toggle3">
                Ｑ．注文から納品までどれくらいの期間がかかりますか？
              </label>
              <div className={styles.content}>
                <p>
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </p>
              </div>
            </div>
            <div className={styles.option}>
              <input
                type="checkbox"
                id="toggle4"
                className={styles.toggle}
              ></input>
              <label className={styles.title} htmlFor="toggle4">
                Ｑ．WalletはMetaMask（メタマスク）のみですか？
              </label>
              <div className={styles.content}>
                <p>
                  現在のところはMetaMaskのみの対応としております。今後の状況を踏まえ、対応範囲を拡充していく予定です。
                </p>
              </div>
            </div>
            <div className={styles.option}>
              <input
                type="checkbox"
                id="toggle5"
                className={styles.toggle}
              ></input>
              <label className={styles.title} htmlFor="toggle5">
                Ｑ．自分が所有するNFT以外を注文する方法はありますか？
              </label>
              <div className={styles.content}>
                <p>
                  『自分が所有している』ことが重要と考えており、所有する画像以外は注文できないようにしておりますのでご了承ください。
                </p>
              </div>
            </div>
            <div className={styles.option}>
              <input
                type="checkbox"
                id="toggle6"
                className={styles.toggle}
              ></input>
              <label className={styles.title} htmlFor="toggle6">
                Ｑ．ギフト包装は対応できますか？
              </label>
              <div className={styles.content}>
                <p>
                  ご自分用の購入を想定しており、現在のところはギフト対応は行っておりません。
                </p>
              </div>
            </div>
            <div className={styles.option}>
              <input
                type="checkbox"
                id="toggle7"
                className={styles.toggle}
              ></input>
              <label className={styles.title} htmlFor="toggle7">
                Ｑ．注文後のキャンセル方法は？
              </label>
              <div className={styles.content}>
                <p>
                  受注生産となりますので、注文後のキャンセルに対応することはできません。注文確定前にしっかりと内容を確認の上、注文いただきますようお願いします。
                </p>
              </div>
            </div>
          </div>
        </seciton>
      </main>
    </>

    // <main className={styles.main}>
    //   <div className={styles.mv_block}>
    //     <div className={styles.mv_nav}>
    //       <a href="" className={styles.mv_wallet}>
    //         <svg
    //           className="w-6 h-6 text-gray-800 dark:text-white"
    //           aria-hidden="true"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 20 20"
    //         >
    //           <path
    //             stroke="currentColor"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M11.905 1.316 15.633 6M18 10h-5a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h5m0-5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1m0-5V7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1v-3m-6.367-9L7.905 1.316 2.352 6h9.281Z"
    //           />
    //         </svg>
    //       </a>
    //     </div>
    //     <div className={styles.mv_title}>
    //       <p className={styles.mv_subtitle2}>
    //         ＼スマホケースに挟んだり！パソコンに貼ったり！／
    //       </p>
    //       <h1 className={styles.mv_maintitle}>NFT TO STICKER</h1>
    //       <p className={styles.mv_subtitle}>
    //         あなたの所有するNFTを「ステッカー」にして現実世界でアピールしよう！
    //       </p>
    //     </div>
    //     <a className={styles.button_connectwallet} href="./order">
    //       NFTを選択する
    //     </a>
    //     {/* <a className={styles.button_connectwallet_bottom} href="./order">
    //       Connect Wallet
    //     </a> */}
    //   </div>
    //   <div className={styles.section}>
    //     <h2 className={styles.section_title}>SURVICE</h2>
    //     <div className={styles.section_detail}>
    //       <p className={styles.section_detail_text}>
    //         あなたが所有している「NFT」を「ステッカー」にするサービスです。
    //       </p>
    //       <Image src="/image/survice_img.png"  height={267} width={730} alt="" className={styles.survice_img}/>
    //     </div>
    //   </div>
    //   <div className={styles.section}>
    //     <h2 className={styles.section_title}>HOW TO ORDER</h2>
    //     <div className={styles.section_detail}>
    //       <div className={styles.order_flow}>
    //         {/* STEP1 */}
    //         <div className={styles.order_step}>
    //           <h3 className={styles.order_step_name}>STEP①</h3>
    //           <h3 className={styles.order_step_detail}>Connect your wallet</h3>
    //           <svg
    //             className="w-6 h-6 text-gray-800 dark:text-white"
    //             aria-hidden="true"
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 20 20"
    //           >
    //             <path
    //               stroke="currentColor"
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M11.905 1.316 15.633 6M18 10h-5a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h5m0-5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1m0-5V7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1v-3m-6.367-9L7.905 1.316 2.352 6h9.281Z"
    //             />
    //           </svg>
    //         </div>

    //         {/* STEP2 */}
    //         <div className={styles.order_step}>
    //           <h3 className={styles.order_step_name}>STEP②</h3>
    //           <h3 className={styles.order_step_detail}>View your NFTs</h3>
    //           <svg
    //             className="w-6 h-6 text-gray-800 dark:text-white"
    //             aria-hidden="true"
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 18 18"
    //           >
    //             <path
    //               stroke="currentColor"
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M6.143 1H1.857A.857.857 0 0 0 1 1.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 7 6.143V1.857A.857.857 0 0 0 6.143 1Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 17 6.143V1.857A.857.857 0 0 0 16.143 1Zm-10 10H1.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 7 16.143v-4.286A.857.857 0 0 0 6.143 11Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z"
    //             />
    //           </svg>
    //         </div>

    //         {/* STEP3 */}
    //         <div className={styles.order_step}>
    //           <h3 className={styles.order_step_name}>STEP③</h3>
    //           <h3 className={styles.order_step_detail}>
    //             Choose your NFT & ADD to cart
    //           </h3>
    //           <svg
    //             className="w-6 h-6 text-gray-800 dark:text-white"
    //             aria-hidden="true"
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 19 20"
    //           >
    //             <path
    //               stroke="currentColor"
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm1-4H5m0 0L3 4m0 0h5.501M3 4l-.792-3H1m11 3h6m-3 3V1"
    //             />
    //           </svg>
    //         </div>

    //         {/* STEP4 */}
    //         <div className={styles.order_step}>
    //           <h3 className={styles.order_step_name}>STEP④</h3>
    //           <h3 className={styles.order_step_detail}>PAY</h3>
    //           <svg
    //             className="w-6 h-6 text-gray-800 dark:text-white"
    //             aria-hidden="true"
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 20 14"
    //           >
    //             <path
    //               stroke="currentColor"
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M4 9h2m3 0h5M1 5h18M2 1h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"
    //             />
    //           </svg>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className={styles.section}>
    //     <h2 className={styles.section_title}>FAQ</h2>
    //     <div className={styles.section_detail}>
    //       <div className={styles.accordion}>
    //       <div className={styles.option}>
    //           <input
    //             type="checkbox"
    //             id="toggle1"
    //             className={styles.toggle}
    //           ></input>
    //           <label className={styles.title} htmlFor="toggle1">
    //             Ｑ．費用はどれくらいですか？
    //           </label>
    //           <div className={styles.content}>
    //             <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
    //           </div>
    //         </div>
    //         <div className={styles.option}>
    //           <input
    //             type="checkbox"
    //             id="toggle2"
    //             className={styles.toggle}
    //           ></input>
    //           <label className={styles.title} htmlFor="toggle2">
    //             Ｑ．ステッカーの配送方法は？
    //           </label>
    //           <div className={styles.content}>
    //             <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
    //           </div>
    //         </div>
    //         <div className={styles.option}>
    //           <input
    //             type="checkbox"
    //             id="toggle3"
    //             className={styles.toggle}
    //           ></input>
    //           <label className={styles.title} htmlFor="toggle3">
    //             Ｑ．注文から納品までどれくらいの期間がかかりますか？
    //           </label>
    //           <div className={styles.content}>
    //             <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
    //           </div>
    //         </div>
    //         <div className={styles.option}>
    //           <input
    //             type="checkbox"
    //             id="toggle4"
    //             className={styles.toggle}
    //           ></input>
    //           <label className={styles.title} htmlFor="toggle4">
    //             Ｑ．WalletはMetaMask（メタマスク）のみですか？
    //           </label>
    //           <div className={styles.content}>
    //             <p>現在のところはMetaMaskのみの対応としております。今後の状況を踏まえ、対応範囲を拡充していく予定です。</p>
    //           </div>
    //         </div>
    //         <div className={styles.option}>
    //           <input
    //             type="checkbox"
    //             id="toggle5"
    //             className={styles.toggle}
    //           ></input>
    //           <label className={styles.title} htmlFor="toggle5">
    //             Ｑ．自分が所有するNFT以外を注文する方法はありますか？
    //           </label>
    //           <div className={styles.content}>
    //             <p>『自分が所有している』ことが重要と考えており、所有する画像以外は注文できないようにしておりますのでご了承ください。</p>
    //           </div>
    //         </div>
    //         <div className={styles.option}>
    //           <input
    //             type="checkbox"
    //             id="toggle6"
    //             className={styles.toggle}
    //           ></input>
    //           <label className={styles.title} htmlFor="toggle6">
    //             Ｑ．ギフト包装は対応できますか？
    //           </label>
    //           <div className={styles.content}>
    //             <p>ご自分用の購入を想定しており、現在のところはギフト対応は行っておりません。</p>
    //           </div>
    //         </div>
    //         <div className={styles.option}>
    //           <input
    //             type="checkbox"
    //             id="toggle7"
    //             className={styles.toggle}
    //           ></input>
    //           <label className={styles.title} htmlFor="toggle7">
    //             Ｑ．注文後のキャンセル方法は？
    //           </label>
    //           <div className={styles.content}>
    //             <p>受注生産となりますので、注文後のキャンセルに対応することはできません。注文確定前にしっかりと内容を確認の上、注文いただきますようお願いします。</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className={styles.section}>
    //     <h2 className={styles.section_title}>CONTACT</h2>
    //     <div className={styles.section_detail}></div>
    //   </div>
    // </main>
  );
}
