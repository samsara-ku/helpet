import './ArticleDetail.scss';
import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { Link } from 'react-router-dom';
import ShareIcon from '@material-ui/icons/Share';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';

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
          <button type="button" onClick={console.log}>
            <ShareIcon />
          </button>
        </div>
      </div>

      <div className="article-detail__tags">
        {['강아지 산책', '강아지 주인', '강아지 행동'].map(e => (
          <Link to="/" key={e}>
            <span className="article-detail__tag boder">{e}</span>
          </Link>
        ))}
      </div>

      <div className="article-detail__related-posts border">
        <h4>관련 글</h4>
        <div>
          {Array(10)
            .fill('')
            .map((i, idx) => (
              <Link key={i + idx}>
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
    </div>
  );
}

export default ArticleDetail;
