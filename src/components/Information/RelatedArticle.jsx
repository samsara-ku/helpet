import './RelatedArticle.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';

function RelatedArticle() {
  return (
    <div className="related-article border">
      <h4>관련 글</h4>
      <div>
        {Array(10)
          .fill('')
          .map((i, idx) => (
            <Link key={i + idx} to="/">
              <div>
                <div className="img-wrapper">
                  <img src={`https://via.placeholder.com/390x220?text=${i + idx}`} alt="" />
                </div>
                <span className="title">
                  제목입니다람쥐제목입니다람쥐제목입니다람쥐제목입니다람쥐
                </span>
                <div className="time">
                  <QueryBuilderIcon />
                  <span className="time">2020.12.24</span>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default RelatedArticle;
