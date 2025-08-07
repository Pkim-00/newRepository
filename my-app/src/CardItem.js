import React from "react";

function CardItem(props) {
  return(
    <div className="card">
      <img src={props.imageUrl} alt={props.title} className="card-img" />
      <div className="card-info">
        <sapn className="card-price">
          {props.price}원 &nbsp;
        </sapn>
        <span className="card-title">
          {props.title}
        </span>
      </div>
    </div>
  );
}

export default CardItem;