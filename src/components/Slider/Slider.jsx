import React from "react";
import "./Slider.css";
import { Carousel,Button } from "react-bootstrap";
import sliderImg from "../../assets/images/slider_image2.jpg";

function Slider() {
  return (
    // Slider section
    <div className="slider_section">
      <Carousel controls={false}>
        <Carousel.Item>
          <img src={sliderImg} className="slider_image img-fluid" alt="" style={{height:'80vh', width: '100%'}} />
          <Carousel.Caption className="pb-5">
            <h1 className='fw-bold slider_heading'>I Love to Play! Welcome back school!</h1>
            <p className='mt-5 para'>
              Perspiciatis unde omnis iste natus error sit voluptatem
              accusantium totam rem aperiam, eaque ipsa quae ab illo inventore
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <Button variant="outline-light slider-btn" className='py-2 px-5 fw-bold mt-3'>Learn more</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
