import React from 'react';
import { UncontrolledCarousel } from "reactstrap";

//import Images
import img01 from "../../assets/images/carousel_images/carousel1.jpg";
import img02 from "../../assets/images/carousel_images/carousel2.png";
import img03 from "../../assets/images/carousel_images/carousel3.jpg";

const AutoScrollCarousel = () => {
    return (
        <React.Fragment>
          <div className='home-banner-carousel shadow'>
            <UncontrolledCarousel
              interval={4000}
              indicators={false}
              items={[
                {
                  altText: " ",
                  caption: " ",
                  key: 1,
                  src: img02,
                },
                {
                  altText: " ",
                  caption: " ",
                  key: 2,
                  src: img01,
                },
                {
                  altText: " ",
                  caption: " ",
                  key: 3,
                  src: img03,
                },
              ]}
            />
          </div>

          <style>
            {`
              .carousel-control-prev,
              .carousel-control-next {
                display: none;
              }
            `}
          </style>
        </React.Fragment>
    );
}

export default AutoScrollCarousel;