import './List.scss';
import React from 'react';
import ListItem from './ListItem';

function List() {
  return (
    <div className="adopt__list">
      <div className="category">
        <div className="category-title">입양</div>
        <div className="category-list">
          <div className="category-item active">입양됐어요</div>
          <div className="category-item">입양후기</div>
        </div>
        <div className="notice">
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
      <div className="list-container">
        <div className="list">
          {[1, 2, 3, 4, 5, 6].map(value => (
            <ListItem
              key={value}
              title={value}
              thumbnail={`https://via.placeholder.com/390x220?text=${value}`}
              insertDate={value}
              countView={value}
            />
          ))}
        </div>
        <div className="pagination">
          <span>여기는 페이지 네이션 위치</span>
        </div>
        <div className="search-form">
          <span>여기는 검색창 위치</span>
        </div>
      </div>
    </div>
  );
}

export default List;
