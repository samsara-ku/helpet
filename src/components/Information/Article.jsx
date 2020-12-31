import './Article.scss';
import React from 'react';
import { Link } from 'react-router-dom';

// type ArticlePreview {
//   aidx: Int
//   title: String
//   summary: String
//   thumbnail: String
//   use_flag: String
//   count_view: Int
//   count_like: Int
//   insert_date: String
//   update_date: String
//   insert_uidx: Int
//   category_code: String
// }

function Article({ aidx, title, summary, thumbnail, insertDate }) {
  return (
    <Link to={`./article/${aidx}`}>
      <div className="article">
        <div className="article__image-wrapper">
          <img src={thumbnail} alt="no thumbnail" />
        </div>
        <div className="article__info">
          <h4>{title}</h4>
          <p>{summary}</p>
          <span>{insertDate}</span>
        </div>
      </div>
    </Link>
  );
}

export default Article;
