import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MyCarousel = () => {
  return (
    <Carousel className="shadow-xl">
      <div className="height1 flex items-center justify-center bg-red-200">
        <img
          src="/public/images/view-3d-cinema-theatre-room.jpg"
          className="object-cover w-full h-full"
          alt="Bild 1"
        />
      </div>
      <div className="height1 flex items-center justify-center">
        <img
          src="/public/images/people-cinema-watching-movie.jpg"
          className="object-contain w-full max-h-screen"
          alt="Bild 2"
        />
      </div>
      <div className="height1 flex items-center justify-center">
        <img
          src="/public/images/portrait-young-little-boy.jpg"
          className="object-contain max-h-screen w-full"
          alt="Bild 3"
        />
      </div>
      <div className="height1 flex items-center justify-center">
        <img
          src="/public/images/3d-senior-man-watching-movie-cinema-with-popcorn.jpg"
          className="object-contain max-h-screen w-full"
          alt="Bild 4"
        />
      </div>
      <div className="height1 flex items-center justify-center">
        <img
          src="/public/images/3d-rendering-person-watching-movie-with-popcorn.jpg"
          className="object-contain max-h-screen w-full"
          alt="Bild 5"
        />
      </div>
    </Carousel>
  );
};

export default MyCarousel;

//https://www.npmjs.com/package/react-responsive-carousel?activeTab=readme
//images: https://www.freepik.com/
