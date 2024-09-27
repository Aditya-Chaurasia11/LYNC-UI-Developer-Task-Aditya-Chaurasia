import React from "react";
import "./productCard.scss";

const ProductCard = ({ data }) => {
  return (
    <div className="productCard_container">
      <div className="productCard_img">
        <img src={data?.img} className="discordImg"></img>
      </div>
      <div className="productCard_desc">
        <h2 className="heading3">{data?.title}</h2>
        <p>{data?.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
