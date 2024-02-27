"use client";

import React, { useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";
import ModalComponent from "./ModalComponent";
import img1Path from "@/assets/Images/img1.jpg";
import img2Path from "@/assets/Images/img2.jpg";
import img3Path from "@/assets/Images/img3.jpg";
import img4Path from "@/assets/Images/img4.jpg";
import img5Path from "@/assets/Images/img5.jpg";
import img6Path from "@/assets/Images/img6.jpg";

const page: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [images, setImages] = useState<ImageProps[]>([]);

  useEffect(() => {
    setImages([
      { src: img1Path, alt: "Image 1" },
      { src: img2Path, alt: "Image 2" },
      { src: img3Path, alt: "Image 3" },
      { src: img4Path, alt: "Image 4" },
      { src: img5Path, alt: "Image 5" },
      { src: img6Path, alt: "Image 6" },
    ]);
  }, []);

  const handleOnClicked = (src: string, index: number) => {
    setSelectedImage(src);
    setSelectedIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleNext = () => {
    const nextIndex =
      selectedIndex === images.length - 1 ? 0 : selectedIndex + 1;
    setSelectedImage(images[nextIndex].src as string);
    setSelectedIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex =
      selectedIndex === 0 ? images.length - 1 : selectedIndex - 1;
    setSelectedImage(images[prevIndex].src as string);
    setSelectedIndex(prevIndex);
  };

  return (
    <div className="flex flex-wrap justify-center w-3/5 mx-auto">
      {images.map((image, index) => (
        <div key={index} className="w-1/3 p-2 " style={{ maxWidth: "320px" }}>
          <Image
            {...image}
            width={320}
            height={200}
            priority
            className=" border-4 border-solid border-purple-800 hover:border-purple-500"
            onClick={() => handleOnClicked(image.src as string, index)}
          />
        </div>
      ))}

      {selectedImage && (
        <ModalComponent
          images={images}
          selectedImage={selectedImage}
          onClose={handleCloseModal}
          onNext={handleNext}
          onPrev={handlePrev}
          selectedIndex={selectedIndex}
        />
      )}
    </div>
  );
};

export default page;
