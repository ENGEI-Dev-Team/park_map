// components/MapModal.tsx
type MapModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const MapModal = ({ isOpen, onClose }: MapModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <img
        src="/park_picture/parkMap.png"
        alt="公園の地図拡大"
        className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()} // 背景クリックでのみ閉じる
      />
    </div>
  );
};
