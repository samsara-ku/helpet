import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

function Article({ aidx, title, summary, thumbnail, insertDate }) {
  return (
    <Link to={`/articles/article/${aidx}`}>
      <div className="information__article">
        <div className="information__article__image-wrapper">
          <img src={thumbnail} alt="thumbnail" />
        </div>
        <div className="information__article__info">
          <h4>{title}</h4>
          <p>{summary}</p>
          <span>{insertDate}</span>
        </div>
      </div>
    </Link>
  );
}

export default Article;
