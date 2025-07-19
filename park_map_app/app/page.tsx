"use client";

import React, { useState } from 'react';
import Header from '../components/Header';
import './globals.css'; // ファイルパスはプロジェクト構成による


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
          src="/park_picture/parkMap.jpg"
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
            src="/park_picture/parkMap.jpg"
            alt="公園の地図拡大"
            className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()} // 背景クリックでのみ閉じる
          />
        </div>
      )}

      {/* フッター */}
      <footer className="bg-amber-600 text-white p-4 mt-8 text-center">
        <p>&copy; 2025 浜町公園. All rights reserved.</p>
      </footer>
    </div>
  );
}
