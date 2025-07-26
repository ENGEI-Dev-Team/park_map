"use client";

import React, { useState, useRef } from "react";
import Header from "../components/Header";
import Image from "next/image";
import Detail from "@/app/components/detail/detail";
import "./globals.css";
import { MovieControl } from "@/components/moviecontrol";
import { MapModal } from "@/components/mapModal";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollLabels = [
    "区営地下駐車場出入口🔽",
    "区営浜町運動場🔽",
    "野球スタンド🔽",
    "芝生広場🔽",
    "もや立ちの池🔽",
    "サクラの樹林🔽",
    "区営総合スポーツセンター🔽",
    "デイキャンプ場🔽",
    "ユニファーガーデン🔽",
    "遊具広場🔽",
    "スポーツセンター地下駐車場出入口🔽",
    "隅田川テラス🔽",
  ];

  const handleScroll = (index: number) => {
    const target = boxRefs.current[index];
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const boxStyle = {
    width: "240px",
    height: "50px",
    border: "2px solid gray",
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
    fontSize: "16px",
  };

  const boxStyleSmallFont = {
    ...boxStyle,
    fontSize: "12px",
  };

  const greenBoxStyle = {
    width: "240px",
    height: "90px",
    backgroundColor: "#4caf50",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: "bold",
    textAlign: "center" as const,
    whiteSpace: "pre-wrap" as const,
    padding: "8px",
  };

  const containerStyle = {
    width: "960px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "column" as const,
    gap: "40px",
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* 公園紹介動画 */}
  <MovieControl />

      {/* メイン */}
      <main className="content-wrapper">
        <div>
          <div >
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
          <h2>
            スポット一覧
          </h2>
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
            <div key={index} style={index === 10 ? boxStyleSmallFont : boxStyle}>
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

        {/* スクロール先スポット */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "24px",
          }}
        >
          {scrollLabels.map((label, i) => (
            <div key={i} ref={(el) => { boxRefs.current[i] = el; }} style={greenBoxStyle}>
              {label.replace(/🔽/, "")}
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

