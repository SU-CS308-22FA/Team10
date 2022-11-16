import { useState } from "react";
import img1 from "./matchAssets/Adsiz.png";
import img2 from "./matchAssets/Adsiz2.png";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

const matchesSlides = () => {
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
    </MDBCarousel>
  );
};

export default matchesSlides;
