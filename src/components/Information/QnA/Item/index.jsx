import React from 'react';
import './index.scss';

function Item({ title, content, author, insertDate }) {
  return (
    <div className="information__qna__item">
      <div className="information__qna__item-col">
        <div className="title">{title}</div>
        <div className="content">{content}</div>
      </div>
      <div className="information__qna__item-col">
        <div className="author">작성자: {author}</div>
        <div className="date">작성일: {insertDate}</div>
      </div>
    </div>
  );
}

export default Item;
