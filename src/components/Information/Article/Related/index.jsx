import React from 'react';
import { Link } from 'react-router-dom';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import './index.scss';

function RelatedArticle({ articles }) {
  return (
    <div className="information__related-article border">
      <h4>관련 글</h4>
      <div>
        {articles.map((elem, idx) => (
          <Link key={idx} to={`/articles/article/${elem.aidx}`}>
            <div>
              <div className="img-wrapper">
                <img src={elem.thumbnail} alt="" />
              </div>
              <span className="title">{elem.title}</span>
              <div className="time">
                <QueryBuilderIcon />
                <span className="time">{elem.insert_date.slice(0, 10)}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RelatedArticle;
