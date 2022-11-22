import { useState } from "react";
import img1 from "./matchAssets/match_of_week.png";
import img2 from "./matchAssets/detailed_match.png";
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
