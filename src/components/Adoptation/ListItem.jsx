import './ListItem.scss';
import React from 'react';
import { Link } from 'react-router-dom';

function ListItem({ aidx, title, thumbnail, insertDate, countView }) {
  return (
    <Link to={`/information/list/${aidx}`}>
      <div className="list-item border">
        <div className="image-wrapper">
          <img src={thumbnail} alt="no thumbnail" />
        </div>
        <div className="title">
          <strong>{title}</strong>
        </div>
        <div className="meta">
          <span>유기동물입양센터</span>
          <span>{`${insertDate}`}</span>
          <span>조회 {countView}</span>
        </div>
      </div>
    </Link>
  );
}

export default ListItem;
