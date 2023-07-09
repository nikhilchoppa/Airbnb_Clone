import React from "react";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../../utills/api-utill";
const CardItem = ({ key,id,imageSrc, title, price, locatioin }) => {
  const navigate = useNavigate();

  const EventHandler = () => {
    navigate(`/user/proposals/${id}`);
  };

  return (
    <div className="carditemss">
    <div className="card-item" onClick={EventHandler}>
      <img className="card-img" src={`${BASE_URL}/proposal/images/${imageSrc}`} alt={title} />
      <p className="card-name">{title}</p>
      <p className="card-price">{price}/-</p>
      <span className="card-location">{locatioin}</span>
    </div>
    </div>
  );
};

export default CardItem;
