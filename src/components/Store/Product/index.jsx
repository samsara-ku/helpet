/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import './index.scss';

function Product() {
  const handleButton = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="store__product">
      <div className="store__product__row">
        <div className="title">고양이용 스크래쳐</div>
        <div className="divider-wrapper">
          <span className="divider" />
        </div>
      </div>
      <div className="store__product__row">
        <div className="store__product__thumbnail">
          <img
            src="https://koozpetshop.com/web/product/medium/202012/ed2915d1f708af93e24a07ed03088d5e.jpg"
            alt="product_thumbnail"
          />
        </div>
        <div className="store__product__detail">
          <div className="store__product__detail-row">제품 요약 설명</div>
          <div className="store__product__detail-row">₩19,500</div>
          <div className="store__product__detail-row">
            <input type="number" min="1" step="1" />
            <button type="button">장바구니</button>
          </div>
        </div>
      </div>
      <div className="store__product__row">This area is for content of product</div>
      <div className="store__product__row">This area is for content of product</div>
      <div className="store__product__row">This area is for content of product</div>
      <div className="store__product__row">This area is for content of product</div>
      <div className="store__product__row">This area is for content of product</div>
      <div className="store__product__row">This area is for content of product</div>
      <div className="store__product__row">This area is for content of product</div>
      <div className="store__product__row">This area is for content of product</div>
      <div className="store__product__row">This area is for content of product</div>
      <div className="store__product__row">This area is for content of product</div>
      <div className="store__product__row">This area is for content of product</div>
      <div className="store__product__row">This area is for content of product</div>
      <div className="store__product__row">This area is for content of product</div>
      <div className="store__product__row">This area is for content of product</div>
      <div className="store__product__row">This area is for content of product</div>
      <div className="top-button" role="button" tabIndex={0} onClick={handleButton}>
        <ArrowUpwardIcon />
      </div>
    </div>
  );
}

export default Product;
