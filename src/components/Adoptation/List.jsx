import './List.scss';
import React from 'react';
import ListItem from './ListItem';
import Pagination from '../Information/Pagination';

function List() {
  return (
    <div className="adopt__list">
      <div className="category">
        <div className="category-title">입양</div>
        <div className="category-list">
          <div className="category-list-item active">입양됐어요</div>
          <div className="category-list-item">입양후기</div>
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
      <div className="list-container">
        <div className="title">입양됐어요</div>
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

        <div className="pagination-container">
          <Pagination current="6" total="10" baseUrl="" />
        </div>

        <div className="list-container__search-form">
          <div className="mode">
            <select>
              <option selected>제목</option>
              <option>내용</option>
              <option>이름</option>
            </select>
          </div>

          <div className="input-keyword">
            <input
              type="text"
              placeholder=". . ."
              onChange={e => {
                console.log(e.target.value);
              }}
            />
          </div>

          <button
            type="button"
            onClick={() => {
              console.log(12);
            }}
          >
            검색
          </button>
        </div>
      </div>
    </div>
  );
}

export default List;
