import React from 'react';
import _ from 'lodash';
import './index.scss';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem';

function CartList() {
  const { localStorage } = window;

  const cartItems = _.map(localStorage, (e, i) =>
    JSON.parse(localStorage.getItem(localStorage.key(i)))
  );

  return (
    <div className="store__cartlist">
      <div className="store__cartlist-title">장바구니</div>
      <div className="store__cartlist-content">
        {_.sortBy(cartItems, ['title']).map(({ title, image, price }) => (
          <CartItem title={title} image={image} price={price} key={title} />
        ))}
      </div>
      <div className="store__cartlist-payment">
        <Link to="/payment/">
          <button type="button">결제하러 가기</button>
        </Link>
      </div>
    </div>
  );
}

export default CartList;
