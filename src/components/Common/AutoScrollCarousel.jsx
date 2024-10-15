import React from 'react';
import { UncontrolledCarousel } from "reactstrap";

//import Images
import img01 from "../../assets/images/carousel1.jfif";
import img02 from "../../assets/images/carousel1.jfif";
import img03 from "../../assets/images/carousel1.jfif";

const AutoScrollCarousel = () => {
    return (
        <React.Fragment>
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
        </React.Fragment>
    );
}

export default AutoScrollCarousel;