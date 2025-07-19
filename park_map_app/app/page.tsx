"use client";

import test from "node:test";
import { useRef } from "react";

export default function Home() {
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

// #test
