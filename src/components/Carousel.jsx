import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MyCarousel = () => {
  return (
    <Carousel className="shadow-xl">
      <div className="height1 flex items-center justify-center bg-red-200">
        <img
          src="/src/images/468d639f5fdba166a131f8d2fafe2072.jpg"
          className="object-cover w-full h-full"
          alt="Bild 1"
        />
      </div>
      <div className="height1 flex items-center justify-center">
        <img
          src="/src/images/712a972bb2f0003a776acad62c35734a.jpg"
          className="object-cover w-full h-full"
          alt="Bild 2"
        />
      </div>
      <div className="height1 flex items-center justify-center">
        <img
          src="/src/images/9445a8a9ab4a2c3ce380a2b6d26c2bc6.jpg"
          className="object-cover w-full h-full"
          alt="Bild 3"
        />
      </div>
    </Carousel>
  );
};

export default MyCarousel;

//https://www.npmjs.com/package/react-responsive-carousel?activeTab=readme
