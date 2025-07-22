import React from "react";

export const Header = () => {
  return (
    <header className="bg-amber-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">浜町公園</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">ホーム</a></li>
            <li><a href="#" className="hover:underline">ギャラリー</a></li>
            <li><a href="#" className="hover:underline">アクセス</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
