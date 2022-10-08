import React, { useState } from "react";
import "./carousel.scss";
import Item from "./item";
import Carousel from "react-elastic-carousel";

   import image1 from '../../../assets/image1.jpeg'
   import image2 from '../../../assets/image2.jpeg'
   import image3 from '../../../assets/image3.jpeg'
   import image4 from '../../../assets/image4.jpeg'
   import image5 from '../../../assets/image5.jpeg'
   import image6 from '../../../assets/image6.jpeg'
  
const CarouselApp = () => {
  return (
    <div className="carousel">
      <Carousel itemsToShow={1}>
      
   <div className="image1">

   </div>
   <div className="image2">
   
   </div>
   <div  className="image3">
   
   </div>
   <div className="image4">
   
   </div>
   <div className="image5">
   
   </div>
   <div className="image6">
   
   </div>
      
      </Carousel>
    </div>
  );
};
export default CarouselApp;
