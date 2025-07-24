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
    <div
      id={`detail-content-${id}`}
      style={{
        padding: '15px 0px',
        color: 'black',
      }}
    >
      <button
        onClick={toggleAccordion}
        style={{
          fontSize: "1.2rem",
          border: "none",
          borderBottom: "2px solid lightgray",
          background: "none",
          paddingBottom: "0.3rem",
          cursor: "pointer",
          width: "100%",
          textAlign: "left",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>{title}</span>
        <span style={{ fontSize: "2rem" }}>{isOpen ? 'ｰ' : '+'}</span>
      </button>

      {isOpen && (
        <div
          style={{
            marginTop: '1rem',
            display: 'flex',
            flexDirection: 'row',
            gap: '1.5rem',
            alignItems: 'flex-start',
          }}
        >
          {/* 左側：画像＋公式サイトボタン */}
          <div style={{ width: "40%" }}>
            <img
              src={imgPath}
              alt="画像"
              style={{
                width: "100%",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            {url?.trim() !== "" && (
              <div style={{ marginTop: "1rem", textAlign: "center" }}>
                <button
                  onClick={() => window.open(url, "_blank")}
                  style={{
                    marginTop: "0.4rem",
                    padding: "1.3rem 11.3rem",
                    fontSize: "",
                    backgroundColor: "#38a169",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    textAlign: "center",
                    objectFit: "cover",
                  }}
                >
                  ホームページ
                </button>
              </div>
            )}
          </div>

          {/* 右側：情報テキスト */}
          <div style={{ flex: 1 }}>
            <div>{info}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Content;
