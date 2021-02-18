import './List.scss';
import React from 'react';
import { Link } from 'react-router-dom';

function List({ category = 'information', content }) {
  return (
    <div className="adopt__list">
      <div className="category">
        <div className="category-title">입양</div>
        <div className="category-list">
          <Link to="/information/list">
            <div className={`category-list-item${category === 'information' ? ' active' : ''}  `}>
              센터 아이들
            </div>
          </Link>
          <Link to="/review/list">
            <div className={`category-list-item${category === 'review' ? ' active' : ''}  `}>
              입양후기
            </div>
          </Link>
        </div>
        <div className="notice border">
          <div className="notice-title">입양센터</div>
          <div className="notice-content">
            사지말고
            <br />
            <strong>입양하세요.</strong>
          </div>
          <div className="notice-tel">
            <span>상담문의</span>
            <span>02-2658-6224</span>
          </div>
        </div>
      </div>

      {content}
    </div>
  );
}

export default List;
