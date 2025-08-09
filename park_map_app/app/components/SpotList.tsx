"use client";

import React from "react";
import ContentData from "./detail/parts/contentData";

interface SpotData {
  id: number; // stringからnumberに変更
  label: string;
  title: string;
  description: string;
  image: string;
}

interface SpotListProps {
  spots: SpotData[];
  refs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  selectedSpot?: number | null;
  onSpotClick?: (index: number) => void;
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

const SpotContent = ({
  title,
  description,
  contentInfo,
  url,
}: {
  title: string;
  description: string;
  contentInfo?: React.ReactNode;
  url?: string;
}) => {
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

      {/* ContentDataの詳細情報を表示 */}
      {contentInfo && (
        <div
          style={{
            margin: 0,
            fontWeight: "normal",
            lineHeight: "1.6",
            fontSize: "16px",
            color: "#333",
          }}
        >
          {contentInfo}
        </div>
      )}

      {/* 元のdescriptionがある場合は表示 */}
      {description && (
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
      )}

      {/* URLがある場合はリンクを表示 */}
      {url && url.trim() !== "" && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#006400",
            textDecoration: "underline",
            fontSize: "14px",
          }}
        >
          詳細情報を見る
        </a>
      )}
    </div>
  );
};

const SpotCard = React.forwardRef<
  HTMLDivElement,
  { spot: SpotData; isSelected?: boolean; onClick?: () => void }
>(({ spot, isSelected, onClick }, ref) => {
  // ContentDataからIDに基づいて詳細情報を取得
  const contentData = ContentData.find((item) => item.id === spot.id);

  const title = contentData?.title || spot.title;
  const description = spot.description;
  const image = contentData?.imgPath || spot.image;
  const contentInfo = contentData?.info;
  const url = contentData?.url;

  return (
    <div
      ref={ref}
      onClick={onClick}
      style={{
        width: "100%",
        maxWidth: "1000px",
        backgroundColor: "white",
        borderRadius: "16px",
        color: "black",
        boxShadow: isSelected
          ? "0 6px 20px rgba(0,100,0,0.2)"
          : "0 4px 12px rgba(0,0,0,0.1)",
        padding: "20px",
        display: "flex",
        flexDirection: "row",
        gap: "20px",
        alignItems: "flex-start",
        border: isSelected ? "2px solid #006400" : "1px solid #e0e0e0",
        transform: isSelected ? "scale(1.02)" : "scale(1)",
        transition: "all 0.3s ease",
        cursor: "pointer",
      }}
    >
      <SpotImage src={image} alt={title} />
      <SpotContent
        title={title}
        description={description}
        contentInfo={contentInfo}
        url={url}
      />
    </div>
  );
});

SpotCard.displayName = "SpotCard";

export function SpotList({
  spots,
  refs,
  selectedSpot,
  onSpotClick,
}: SpotListProps) {
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
          isSelected={selectedSpot === index}
          onClick={() => onSpotClick?.(index)}
        />
      ))}
    </div>
  );
}

export { SpotList as default };
