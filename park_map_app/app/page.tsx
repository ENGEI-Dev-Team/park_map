// Import necessary React hooks
import React from 'react';
import Header from '../components/Header';


export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-900">
      <Header />

      {/* YouTube埋め込みセクション - レスポンシブ対応 */}
      {/* w-full: 親要素の全幅を使用 */}
      {/* aspect-video: 16:9のアスペクト比を維持 */}
      {/* rounded-lg: 角を丸くする */}
      {/* overflow-hidden: 子要素がはみ出さないようにする */}
      <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg mb-8">
        <iframe
          src="https://www.youtube.com/embed/LCLZK84R0eU?autoplay=1&mute=1&loop=1&playlist=LCLZK84R0eU" // loopとplaylistを追加して自動ループ
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full" // iframeが親要素にフィットするように設定
        ></iframe>
      </div>

      {/* メインコンテンツセクション - レスポンシブ対応 */}
      {/* container mx-auto: コンテンツを中央に配置し、左右に自動マージンを設定 */}
      {/* px-4: 左右にパディング (モバイル向け) */}
      {/* sm:px-6 md:px-8: 画面サイズに応じてパディングを増やす */}
      {/* py-8: 上下パディング */}
      <main className="container mx-auto px-4 sm:px-6 md:px-8 py-8">
        <div className="flex flex-col items-center text-center">
          {/* タイトル - 画面サイズに応じてフォントサイズを変更 */}
          {/* text-3xl: モバイル向け */}
          {/* sm:text-4xl: 小画面以上 */}
          {/* md:text-5xl: 中画面以上 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-800 mb-4 rounded-md p-2 bg-blue-100 shadow-sm">
            浜町公園へようこそ！
          </h1>
          {/* 説明文 - 画面サイズに応じてフォントサイズを変更 */}
          {/* text-base: モバイル向け */}
          {/* sm:text-lg: 小画面以上 */}
          {/* text-gray-700: テキストの色 */}
          <p className="text-base sm:text-lg text-gray-700 mb-8 max-w-2xl leading-relaxed">
            浜町公園は、都心に位置しながらも豊かな自然と広々とした空間を提供する、市民の憩いの場です。散策路、スポーツ施設、子供向けの遊び場など、様々な年代の方が楽しめる設備が充実しています。四季折々の美しい景色も魅力の一つです。
          </p>

          {/* 地図のプレースホルダー - レスポンシブ対応 */}
          {/* w-full: 親要素の全幅を使用 */}
          {/* h-64: モバイル向け高さ */}
          {/* sm:h-80 md:h-96: 画面サイズに応じて高さを変更 */}
          {/* bg-gray-200: 背景色 */}
          {/* rounded-lg: 角を丸くする */}
          {/* flex items-center justify-center: 中央にテキストを配置 */}
          {/* text-gray-500: テキストの色 */}
          {/* text-xl: テキストサイズ */}
          <div className="w-full h-64 sm:h-80 md:h-96 bg-gray-200 rounded-lg shadow-inner flex items-center justify-center text-gray-500 text-xl font-medium border border-gray-300">
            ここに公園の地図が表示されます (Google Mapsなど)
          </div>
        </div>
      </main>

      {/* フッターセクション - シンプルなフッター */}
      <footer className="bg-blue-600 text-white p-4 mt-8 text-center">
        <p>&copy; 2025 浜町公園. All rights reserved.</p>
      </footer>
    </div>
  );
}
