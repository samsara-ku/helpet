import './RelatedArticle.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';

function RelatedArticle({ articleList }) {
  return (
    <div className="related-article border">
      <h4>관련 글</h4>
      <div>
        {articleList
          .filter(e => e.aidx <= 124)
          .map((elem, idx) => (
            <Link key={idx} to={`/home/articles/article/${elem.aidx}`}>
              <div>
                <div className="img-wrapper">
                  <img src={elem.thumbnail} alt="" />
                </div>
                <span className="title">{elem.title}</span>
                <div className="time">
                  <QueryBuilderIcon />
                  <span className="time">{elem.insert_date}</span>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default RelatedArticle;
