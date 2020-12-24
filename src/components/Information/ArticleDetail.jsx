import './ArticleDetail.scss';
import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';

function ArticleDetail() {
  return (
    <div className="article-detail border">
      <div className="article-detail__breadcrumb">
        <HomeIcon className />
        <span>홈/강아지 연구소/강아지 행동/강아지 보호자를 화나게 하는 말 5가지</span>
      </div>
      <div className="article-detail__title">
        <h1>타이틀</h1>
      </div>

      <div className="article-detail__content">
        {Array(10)
          .fill('')
          .map(() => (
            <>
              <p>여기는 콘텐츠 영역입니다.</p>
              <br />
            </>
          ))}
      </div>

      <div className="article-detail__tags">
        {['강아지 산책', '강아지 주인', '강아지 행동'].map(e => (
          <Link to="/">
            <span className="article-detail__tag boder">{e}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ArticleDetail;
