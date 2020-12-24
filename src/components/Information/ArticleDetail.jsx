import './ArticleDetail.scss';
import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ShareBtn from './ShareBtn';
import Tags from './Tags';
import RelatedArticle from './RelatedArticle';

function ArticleDetail() {
  return (
    <div className="article-detail border">
      <div className="article-detail__breadcrumb">
        <HomeIcon />
        <span>홈/강아지 연구소/강아지 행동/강아지 보호자를 화나게 하는 말 5가지</span>
      </div>
      <div className="article-detail__title">
        <h1>타이틀</h1>
      </div>

      <div className="article-detail__content">
        {Array(10)
          .fill('')
          .map((i, idx) => (
            <p key={i + idx}>
              여기는 콘텐츠 영역입니다.
              <br />
              <br />
            </p>
          ))}
      </div>

      <div className="article-detail__btns">
        <div className="article-detail__btns__left">
          <button type="button" onClick={console.log}>
            <ThumbUpIcon />
            <span>99</span>
          </button>
        </div>
        <div className="article-detail__btns__right">
          <ShareBtn />
        </div>
      </div>

      <Tags />

      <RelatedArticle />
    </div>
  );
}

export default ArticleDetail;
