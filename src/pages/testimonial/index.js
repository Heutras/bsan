import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card from "./Card.js";
import { Carousel } from "react-responsive-carousel";
import { testimonials } from "../../content_option";

const cards = testimonials.map((item) => {
  return (
    <Card
      img={item.img}
      comment={item.comment}
      name={item.name}
      title={item.title}
    />
  );
});

export default class Testimonial extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        {cards}
      </Carousel>
    );
  }
}
