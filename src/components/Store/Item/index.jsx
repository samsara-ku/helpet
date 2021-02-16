import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import './index.scss';
import { Link } from 'react-router-dom';

function Item({ image, title, price, rating }) {
  const handleItem = () => {
    const { localStorage } = window;
    const amount = parseInt(localStorage.getItem(title));

    if (amount) {
      localStorage.setItem(title, amount + 1);
    } else {
      localStorage.setItem(title, 1);
    }

    console.log(amount);
  };

  return (
    <div className="store__item">
      <Link to={`/product/${title}/`}>
        <img className="item__thumbnail" src={image} alt="thumbnail" />
        <div className="item__title">{title}</div>
      </Link>
      <div className="item__rating">
        {new Array(5 - rating).fill(0).map((e, i) => (
          <StarBorderIcon key={i} />
        ))}
        {new Array(rating).fill(0).map((e, i) => (
          <StarIcon key={i} />
        ))}
      </div>
      <div className="item__price">₩{price}</div>
      <div className="item__button">
        <button type="button" onClick={handleItem}>
          장바구니
        </button>
      </div>
    </div>
  );
}

export default Item;
