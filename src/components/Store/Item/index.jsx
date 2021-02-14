import React from 'react';

function Item({ image, title, price, reviewNum, rating }) {
  return (
    <div className="store__item">
      <img className="item__thumbnail" src={image} alt="thumbnail" />
      <div className="item__title">{title}</div>
      <div className="item__rating">{rating}</div>
      <div className="item_review">(리뷰 수: {reviewNum})</div>
      <div className="item__price">{price}</div>
      <div className="button-wrapper">
        <button type="button">1</button>
      </div>
    </div>
  );
}

export default Item;
