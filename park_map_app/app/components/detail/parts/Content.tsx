"use client";

import React, { useState } from 'react';
import Title from './title';
import Info from "./info";

type Props = {
  title: string;
  imgPath: string;
  info: React.ReactNode;
  url?: string;
  id : number
};

const Content = ({ title, imgPath, info, url, id }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div id={`detail-content-${id}`}
      style={{
        maxWidth: '800px',
        margin: 'auto',
        padding: '1rem',
        backgroundColor: 'white',
        color: 'black',
      }}
    >
      <button
        onClick={toggleAccordion}
        style={{
          fontSize: "1.2rem",
          border: "none",
          borderBottom: "2px solid black",
          background: "none",
          paddingBottom: "0.5rem",
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
          <img
            src={imgPath}
            alt="画像"
            style={{
              width: "40%",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />

          <div style={{ flex: 1 }}>
            <div>{info}</div>
            {url?.trim() !== "" && (
                <button
                onClick={() => window.open(url, "_blank")}
                style={{
                marginTop: "1rem",
                padding: "0.5rem 1rem",
                fontSize: "1rem",
                backgroundColor: "#3182ce",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer"
            }}
            >
              公式サイトへ
            </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Content;