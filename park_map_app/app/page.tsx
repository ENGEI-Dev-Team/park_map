"use client";

import React, { useState, useRef } from "react";
import Header from "../components/Header";
import Detail from "@/app/components/detail/detail";
import "./globals.css";
import { MovieControl } from "@/components/moviecontrol";
import { MapModal } from "@/components/mapModal";
import SpotList from "./components/SpotList";
import ContentData from "./components/detail/parts/contentData";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSpot, setSelectedSpot] = useState<number | null>(null);
  const buttonRefs = useRef<(HTMLDivElement | null)[]>([]);

  const facilityData = [
    {
      id: "spot-0",
      label: "区営地下駐車場出入口🔽",
      title: "区営地下駐車場出入口",
      description:
        "浜町公園地下駐車場の出入口です。公園利用者のための駐車施設としてご利用いただけます。",
      image: "/park_picture/underground-parking.jpg",
    },
    {
      id: "spot-1",
      label: "区営浜町運動場🔽",
      title: "区営浜町運動場",
      description:
        "区が運営する総合運動施設です。テニスコートや多目的グラウンドを備え、地域のスポーツ活動の拠点となっています。",
      image: "/park_picture/parking-entrance.jpg",
    },
    {
      id: "spot-2",
      label: "野球スタンド🔽",
      title: "野球スタンド",
      description:
        "本格的な野球場と観客スタンドを備えた施設です。少年野球から一般の試合まで幅広く利用されています。",
      image: "/park_picture/baseball-stand.jpg",
    },
    {
      id: "spot-3",
      label: "芝生広場🔽",
      title: "芝生広場",
      description:
        "幅幅とした芝生の広場で、家族連れやペットとのくつろぎスポットです。ピクニックや軽いスポーツを楽しむことができます。",
      image: "/park_picture/lawn-area.jpg",
    },
    {
      id: "spot-4",
      label: "もや立ちの池🔽",
      title: "もや立ちの池",
      description:
        "公園内の美しい池で、自然豊かな水辺空間です。鯉や水鳥が生息し、自然観察や写真撮影スポットとして人気です。",
      image: "/park_picture/pond.jpg",
    },
    {
      id: "spot-5",
      label: "サクラの樹林🔽",
      title: "サクラの樹林",
      description:
        "春になると満開の桜が咲き誇る美しい樹林です。お花見シーズンには多くの人が訪れ、秋には紅葉も楽しめます。",
      image: "/park_picture/cherry-grove.jpg",
    },
    {
      id: "spot-6",
      label: "区営総合スポーツセンター🔽",
      title: "区営総合スポーツセンター",
      description:
        "体育館、プール、トレーニング室を備えた総合スポーツ施設です。各種スポーツ教室も開催し、健康づくりに最適です。",
      image: "/park_picture/sports-center.jpg",
    },
    {
      id: "spot-7",
      label: "デイキャンプ場🔽",
      title: "デイキャンプ場",
      description:
        "都心でアウトドア体験ができるデイキャンプ場です。バーベキューや野外料理が楽しめ、家族や友人とのレクリエーションに人気です。",
      image: "/park_picture/day-camp.jpg",
    },
    {
      id: "spot-8",
      label: "ユニファーガーデン🔽",
      title: "ユニファーガーデン",
      description:
        "針葉樹を中心とした美しい庭園です。四季を通じて緑豊かな風景が楽しめ、静かで落ち着いた雰囲気でリラックスできます。",
      image: "/park_picture/conifer-garden.jpg",
    },
    {
      id: "spot-9",
      label: "遊具広場🔽",
      title: "遊具広場",
      description:
        "子どもたちが安全に遊べる充実した遊具が設置された広場です。滑り台、ブランコ、砂場など多様な遊具で親子で楽しく過ごせます。",
      image: "/park_picture/playground.jpg",
    },
    {
      id: "spot-10",
      label: "スポーツセンター地下駐車場出入口🔽",
      title: "スポーツセンター地下駐車場出入口",
      description:
        "総合スポーツセンター専用の地下駐車場入口です。スポーツセンター利用者が便利に利用できる駐車施設です。",
      image: "/park_picture/underground-parking.jpg",
    },
    {
      id: "spot-11",
      label: "隅田川テラス🔽",
      title: "隅田川テラス",
      description:
        "隅田川沿いの美しいテラスで、親水空間です。川の流れを眺めながら散策やジョギングが楽しめ、デートスポットとしても人気です。",
      image: "/park_picture/sumida-river-terrace.jpg",
    },
  ];

  const scrollLabels = facilityData.map((facility) => facility.label);

  const handleScroll = (index: number) => {
    const targetElement = document.getElementById(`detail-content-${index}`);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      setSelectedSpot(index);
    }
  };


  const getBoxStyle = (index: number, isSmallFont: boolean = false) => ({
    width: "240px",
    height: "50px",
    border: selectedSpot === index ? "2px solid #006400" : "2px solid gray",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontWeight: "bold",
    textAlign: "center" as const,
    whiteSpace: "nowrap" as const,
    overflow: "hidden",
    paddingTop: "1px",
    paddingBottom: "1px",
    paddingLeft: "8px",
    paddingRight: "8px",
    fontSize: isSmallFont ? "12px" : "16px",
    backgroundColor: selectedSpot === index ? "#e3f7ec" : "transparent",
  });

  return (
    <div className="min-h-screen">
      <Header />

      {/* 公園紹介動画 */}
      <MovieControl />

      {/* メイン */}
      <main className="content-wrapper">
        <div>
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black-800 mb-4 rounded-md p-2 bg-[rgba(202,138,4,0.5)] shadow-sm">
              浜町公園へようこそ！
            </h1>
            <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
              浜町公園は、都心に位置しながらも自然豊かな空間を提供する公園です。四季折々の風景を楽しむことができ、家族や友人と一緒にリラックスした時間を過ごすことができます。
            </p>

            <div className="mb-6">
              <h2>公園の地図</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-2">
                公園の詳細な地図をクリックして拡大できます。
              </p>
            </div>

            <div onClick={() => setIsOpen(true)}>
              <img
                src="/park_picture/parkMap.png"
                alt="公園の地図"
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* map拡大モーダル */}

        <MapModal isOpen={isOpen} onClose={() => setIsOpen(false)} />

        {/* スポット一覧 */}
        <div className="mt-8">
          <div>
            <h2>スポット一覧</h2>
          </div>

          {/* ボタンエリア */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "16px",
              justifyItems: "center",
            }}
          >
            {scrollLabels.map((label, index) => (
              <div
                key={index}
                ref={(el) => {
                  buttonRefs.current[index] = el;
                }}
                style={getBoxStyle(index, index === 10)}
              >
                <button
                  className="w-full h-full flex items-center justify-center bg-transparent border-none p-0"
                  type="button"
                  onClick={() => handleScroll(index)}
                >
                  {label}
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* 詳細コンポーネント */}

        <Detail />
      </main>
      {/* フッター */}
      <footer className="bg-amber-600 text-white p-4 mt-8 text-center">
        <p>&copy; 2025 浜町公園. All rights reserved.</p>
      </footer>
    </div>
  );
}
