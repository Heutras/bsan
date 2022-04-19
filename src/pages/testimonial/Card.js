import React from "react";
export const Card = (props) => {
  return (
    <div className="carousel-item">
      <h2>{props.header}</h2>
      <div className="testimonial_content">
        <p>{props.comment}</p>
      </div>
      <div className="client_container">
        <img src={props.img} alt={props.name} className="carousel-img" />
        <div className="client-info">
          <p className="name">{props.name} </p>
          <p className="title">{props.title}</p>
        </div>
      </div>
    </div>
  );
};
