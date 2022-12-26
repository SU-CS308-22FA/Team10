import { useState } from "react";
import img1 from "./MainCards/landing.png";
import img2 from "./MainCards/landing2.png";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

const ImageSlider = () => {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={1}
        src={img1}
        alt="..."
      ></MDBCarouselItem>

      <MDBCarouselItem
        className="w-100 d-block"
        itemId={2}
        src={img2}
        alt="..."
      ></MDBCarouselItem>

      <MDBCarouselItem
        className="w-100 d-block"
        itemId={3}
        src={img1}
        alt="..."
      ></MDBCarouselItem>
    </MDBCarousel>
  );
};

export default ImageSlider;
