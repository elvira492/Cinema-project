import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MyCarousel = () => {
  return (
    <Carousel className="shadow-xl">
      <div className="height1 flex items-center justify-center bg-red-200">
        <img
          src="/src/images/view-3d-cinema-theatre-room.jpg"
          className="object-cover w-full h-full"
          alt="Bild 1"
        />
      </div>
      <div className="height1 flex items-center justify-center">
        <img
          src="/src/images/people-cinema-watching-movie.jpg"
          className="object-cover w-full h-full"
          alt="Bild 2"
        />
      </div>
      <div className="height1 flex items-center justify-center overflow-y-auto">
        <img
          src="/src/images/portrait-young-little-boy.jpg"
          className="object-cover h-full w-full" //"overflow-y-auto max-h-48
          alt="Bild 3"
        />
      </div>
    </Carousel>
  );
};

export default MyCarousel;

//https://www.npmjs.com/package/react-responsive-carousel?activeTab=readme
//images: https://www.freepik.com/
