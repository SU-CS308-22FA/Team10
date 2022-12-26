import { useState } from "react";
import img1 from "./assets/player_messi.png";
import img2 from "./assets/player_ronaldo.png";
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
