import './Articles.scss';
import React from 'react';
import Article from './Article';
import Pagination from './Pagination';

function Articles() {
  return (
    <div className="articles">
      <div className="articles__meta">
        <span>
          <strong>강아지</strong>에 대한 검색 결과
        </span>
      </div>
      <div className="articles__content">
        {Array(5)
          .fill('')
          .map((item, idx) => (
            <Article key={idx} />
          ))}
      </div>

      <Pagination current="6" total="10" baseUrl="" />
    </div>
  );
}

export default Articles;
