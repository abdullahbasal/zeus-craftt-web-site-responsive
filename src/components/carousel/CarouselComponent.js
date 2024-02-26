import "./CarouselComponent.css";

import Slide2 from "../../assets/images/slide-image-2.jpg";
import Slide1 from "../../assets/images/zeuscraft-car-2.jpg";
import Slide5 from "../../assets/images/slide-image-5.jpg";
import Slide7 from "../../assets/images/slide-image-7.jpg";
import Slide9 from "../../assets/images/slide-image-9.jpg";
import { Carousel } from "react-bootstrap";

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={Slide2} className="d-block w-100" alt="..." />
      </Carousel.Item>
      <Carousel.Item>
        <img src={Slide5} className="d-block w-100" alt="..." />
      </Carousel.Item>
      <Carousel.Item>
        <img src={Slide1} className="d-block w-100" alt="..." />
      </Carousel.Item>

      <Carousel.Item>
        <img src={Slide9} className="d-block w-100" alt="..." />
      </Carousel.Item>
      <Carousel.Item>
        <img src={Slide7} className="d-block w-100" alt="..." />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
