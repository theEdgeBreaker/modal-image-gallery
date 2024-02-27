import React from "react";
import Image, { ImageProps } from "next/image";

interface ModalProps {
  images: ImageProps[];
  selectedImage: string | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  selectedIndex: number;
}

const ModalComponent: React.FC<ModalProps> = ({
  images,
  selectedImage,
  onClose,
  onNext,
  onPrev,
  selectedIndex,
}) => {
  return (
    selectedImage && (
      <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-25">
        <div className="max-w-screen-lg mx-4">
          <div className="bg-white px-4 pb-4">
            <div className="flex flex-row justify-between text-center items-center py-3">
              <span className="text-lg font-semibold">LightBox</span>
              <button
                className=" bg-gray-600 bg-opacity-50 py-1 px-2.5 hover:bg-gray-400
                  hover:bg-opacity-70 transition-all rounded-full text-xl text-white font-bold"
                onClick={onClose}
              >
                &#10005;
              </button>
            </div>
            <div className="relative">
              <button
                className="absolute top-1/2 transform -translate-y-1/2 left-0
               text-white py-6 px-4 md:py-24 md:px-4 text-2xl md:text-5xl"
                onClick={onPrev}
              >
                &lt;
              </button>

              <button
                className="absolute top-1/2 transform -translate-y-1/2 right-0
              text-white py-6 px-4 md:py-24 md:px-4 text-3xl md:text-5xl"
                onClick={onNext}
              >
                &gt;
              </button>

              <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                <span className="text-black text-opacity-80 text-lg font-bold">{`Image ${
                  selectedIndex + 1
                }`}</span>
              </div>

              <Image src={selectedImage} alt="Selected Image" width={660} />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ModalComponent;
