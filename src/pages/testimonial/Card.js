import React from "react";

export const Card = (props) => {
  return (
    <div>
      <img src={props.img} alt={props.name} />
      <div className="myCarousel">
        <h3>{props.name}</h3>
        <h4>{props.title}</h4>
        <p>{props.comment}</p>
      </div>
    </div>
  );
};
