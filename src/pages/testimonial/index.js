import React from "react";
import { Card } from "./Card.js";
import { testimonials } from "../../content_option";
import Slider from "react-slick";
import meric from "./meric.jpeg";
import ismail from "./ismail.jpeg";
import siyah from "./siyah.jpeg";
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Testimonial = () => {
  const elements = testimonials.map((item, i) => {
    return (
      <Card
        key={i}
        img={item.img}
        comment={item.comment}
        name={item.name}
        title={item.title}
        header={item.header}
      />
    );
  }); /*bug alert */
  const settings = {
    dots: true,
    autoPlay: true,
    autoplaySpeed: 1000
  };
  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="carousel-item">
          <div className="testimonial_content">
            <p>
              Hunger of information and excitement of new techs never ends in
              this man.{" "}
            </p>
          </div>
          <div className="client_container">
            <img src={meric} className="carousel-img" alt="meric" />
            <div className="client-info">
              <p className="name">Meriç Demirörs</p>
              <p className="title">AI Developer</p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="testimonial_content">
            <p>Always innovative. </p>
          </div>
          <div className="client_container">
            <img src={ismail} className="carousel-img" alt="ismail" />
            <div className="client-info">
              <p className="name">İsmail Buğra Öz</p>
              <p className="title">AI Developer</p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="testimonial_content">
            <p>I love this man. </p>
          </div>
          <div className="client_container">
            <img src={siyah} className="carousel-img" alt="doruk" />
            <div className="client-info">
              <p className="name">Doruk Ata Özkara</p>
              <p className="title">Game Developer</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};
