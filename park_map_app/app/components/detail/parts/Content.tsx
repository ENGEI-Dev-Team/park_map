"use client";

import React, { useState } from 'react';

type Props = {
    title: string;
    imgPath: string;
    info: React.ReactNode;
    url?: string;
    id: number;
};

const Content = ({ title, imgPath, info, url, id }: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
    setIsOpen(!isOpen);
    };

    return (
    <div id={`detail-content-${id}`} className="py-4 text-black">
        <button
        onClick={toggleAccordion}
        className="text-lg w-full text-left border-b-2 border-gray-300 bg-transparent pb-1 cursor-pointer flex justify-between items-center"
        >
        <span>{title}</span>
        <span className="text-2xl">{isOpen ? 'ｰ' : '+'}</span>
        </button>
        {isOpen && (
        <div className="mt-4 flex flex-col md:flex-row gap-6 items-start">
          {/* 左カラム：画像＋ボタン */}
                <div className="w-full md:w-2/5 flex flex-col">
                <img
                    src={imgPath}
                    alt="画像"
                    className="w-full h-auto object-cover rounded-lg"
                    />
                    {url?.trim() !== "" && (
                    <div className="mt-4">
                    <button
                    onClick={() => window.open(url, "_blank")}
                    className="
                    w-full
                    py-2
                    text-sm sm:text-base md:text-lg
                    bg-green-600 text-white rounded-lg
                    cursor-pointer whitespace-nowrap text-center"
                    >
                    ホームページ
                    </button>
                    </div>
                    )}
                </div>
          {/* 右カラム：テキスト */}
        <div className="w-full md:flex-1">
            <div>{info}</div>
        </div>
        </div>
    )}
    </div>
);
};

export default Content;
