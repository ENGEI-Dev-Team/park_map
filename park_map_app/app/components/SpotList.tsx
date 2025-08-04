"use client";

import React from "react";

interface SpotData {
  id: string;
  label: string;
  image?: string;
}

interface SpotListProps {
  spots: SpotData[];
  refs: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

const SpotImage = ({ src, alt }: { src?: string; alt?: string }) => {
  const imageStyle = {
    width: "200px",
    height: "150px",
    backgroundColor: "#f5f5f5",
    borderRadius: "8px",
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
    color: "#666",
    border: "1px solid #ddd",
  };

  if (src) {
    return (
      <img
        src={src}
        alt={alt || "スポット画像"}
        style={{
          ...imageStyle,
          objectFit: "cover" as const,
          backgroundColor: "transparent",
        }}
      />
    );
  }

  return <div style={imageStyle}>画像エリア</div>;
};

const SpotContent = ({ title, description }: { title: string; description: string }) => {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <h2
        style={{
          margin: 0,
          fontSize: "20px",
          fontWeight: "bold",
          color: "black",
          borderBottom: "2px solid #333",
          paddingBottom: "8px",
        }}
      >
        {title}
      </h2>
      <p
        style={{
          margin: 0,
          fontWeight: "normal",
          lineHeight: "1.6",
          fontSize: "16px",
          color: "#333",
        }}
      >
        {description}
      </p>
    </div>
  );
};

const SpotCard = React.forwardRef<HTMLDivElement, { spot: SpotData }>(
  ({ spot }, ref) => {
    const title = spot.label.replace(/🔽/, "");
    const description = `ここに「${spot.label
      .replace(/^[^区市町村]+/, "")
      .replace(
        /🔽/,
        ""
      )}」の詳細説明を追加できます。施設の特徴や利用方法、アクセス情報などを記載することができます。`;

    return (
      <div
        ref={ref}
        style={{
          width: "100%",
          maxWidth: "1000px",
          backgroundColor: "white",
          borderRadius: "16px",
          color: "black",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          padding: "20px",
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          alignItems: "flex-start",
          border: "1px solid #e0e0e0",
        }}
      >
        <SpotImage src={spot.image} alt={title} />
        <SpotContent title={title} description={description} />
      </div>
    );
  }
);

SpotCard.displayName = "SpotCard";

export function SpotList({ spots, refs }: SpotListProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "24px",
      }}
    >
      {spots.map((spot, index) => (
        <SpotCard
          key={spot.id || index}
          ref={(el: HTMLDivElement | null) => {
            refs.current[index] = el;
          }}
          spot={spot}
        />
      ))}
    </div>
  );
}

export { SpotList as default };