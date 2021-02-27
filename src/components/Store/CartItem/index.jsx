import React, { useState, useEffect } from 'react';
import './index.scss';
import useFormatPrice from '../../../hooks/useFormatPrice';

function CartItem({ title, image, price }) {
  const [quantity, setQuantity] = useState(JSON.parse(localStorage.getItem(title)).amount);

  const handleAmount = v => {
    const { amount } = JSON.parse(localStorage.getItem(title));

    if (amount + parseInt(v)) setQuantity(amount + parseInt(v));
    else alert('더 이상 줄일 수 없습니다');
  };

  useEffect(() => {
    localStorage.setItem(
      title,
      JSON.stringify({
        title,
        image,
        price,
        amount: quantity,
      })
    );
  }, [quantity]);

  return (
    <div className="store__cartitem">
      <div className="store__cartitem-image">
        <img src={image} alt="item_thumbnail" />
      </div>
      <div className="store__cartitem-detail">
        <div className="store__cartitem-title">{title}</div>
        <div className="store__cartitem-amount">
          <button type="button" value="-1" onClick={e => handleAmount(e.target.value)}>
            -
          </button>
          {quantity}개
          <button type="button" value="1" onClick={e => handleAmount(e.target.value)}>
            +
          </button>
        </div>
        <div className="store__cartitem-price">₩{useFormatPrice(price * quantity)}</div>
      </div>
    </div>
  );
}

export default CartItem;
