"use client";

import React, { useState } from 'react';
import Header from '../components/Header';
import './globals.css'; // ファイルパスはプロジェクト構成による
import test from "node:test";
import { useRef } from "react";
  
export default function App() {
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-900">
      <Header />

      {/* 公園紹介動画 */}
      <div className="w-full overflow-hidden shadow-lg mb-8" style={{ maxHeight: '70vh' }}>
        <video
          src="/park_movie/parkMovie.MOV"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* メインコンテンツ */}
<main className="container mx-auto px-4 sm:px-6 md:px-8 py-8">
  <div className="flex flex-col items-center">
    <div className="w-full max-w-2xl text-left">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black-800 mb-4 rounded-md p-2 bg-gray-300 shadow-sm">
        浜町公園へようこそ！
      </h1>
      <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
        浜町公園は、都心に位置しながらも豊かな自然と広々とした空間を提供する、市民の憩いの場です。散策路、スポーツ施設、子供向けの遊び場など、様々な年代の方が楽しめる設備が充実しています。四季折々の美しい景色も魅力の一つです。
      </p>
      <div className="mb-6">
<h2 >
  公園の地図
</h2>
        <p className="text-sm sm:text-base text-gray-600 mb-2">
          公園の詳細な地図をクリックして拡大できます。
        </p>
      </div>

      <div
        className="w-full h-64 sm:h-80 md:h-96 bg-gray-200 rounded-lg shadow-inner flex items-center justify-center border border-gray-300 overflow-hidden cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <img
          src="/park_picture/parkMap.png"
          alt="公園の地図"
          className="object-contain w-full h-full"
        />
      </div>
    </div>
  </div>
</main>


      {/* 拡大モーダル */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <img
            src="/park_picture/parkMap.png"
            alt="公園の地図拡大"
            className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()} // 背景クリックでのみ閉じる
          />
        </div>
      )}
      
  
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
  };

  
  
  return (
    <div style={{ ...containerStyle, gap: "40px" }}>
      {/* スポット一覧のタイトルに淡い背景色を追加 */}
      <div
        style={{
          backgroundColor: "#e6f9e6", // 淡いブルー
          padding: "16px",
          borderRadius: "12px",
          marginBottom: "24px",
        }}
      >
        <h1
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            textAlign: "left",
            margin: 0,
            color: "#000", // 黒文字で可読性確保
          }}
        >
          スポット一覧
        </h1>
      </div>

      {/* ボタン：3行×4列 */}
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
              style={{
                all: "unset",
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() => handleScroll(index)}
              title={label.replace(/\n/g, " ")}
            >
              {label}
            </button>
          </div>
        ))}
      </div>

      {/* 空白スペース */}
      <div style={{ height: "100vh" }} />

      {/* スクロール先：縦一列・左揃え */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "24px",
        }}
      >
        {scrollLabels.map((label, i) => (
          <div
            key={i}
            ref={(el) => (boxRefs.current[i] = el)}
            style={greenBoxStyle}
          >
            {label.replace(/🔽/, "")}
          </div>
        ))}
      </div>
    </div>
  );
}
      
            {/* フッター */}
      <footer className="bg-amber-600 text-white p-4 mt-8 text-center">
        <p>&copy; 2025 浜町公園. All rights reserved.</p>
      </footer>

// #test
