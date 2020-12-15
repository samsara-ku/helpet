import './Article.css';
import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';

function Article() {
  return (
    <div className="article border">
      <div className="article__breadcrumb">
        <HomeIcon />
        <span>
          홈/강아지 연구소/강아지 행동/강아지 보호자를 화나게 하는 말 5가지
        </span>
      </div>

      <div className="article__title">
        <h1>타이틀</h1>
      </div>
      <div className="article__meta">
        <span className="article__meta__date">4일전</span>
        <span className="article__meta__read-time">2분 읽을거리</span>
      </div>

      <div className="article__content">
        {Array(10)
          .fill('')
          .map(() => (
            <>
              <p>여기는 콘텐츠 영역입니다.</p>
              <br />
            </>
          ))}
      </div>

      <div className="article__ad">
        <img src="https://via.placeholder.com/600x160?text=ad" alt="" />
      </div>

      <div className="article__tags">
        {['강아지 산책', '강아지 주인', '강아지 행동'].map((e) => (
          <Link>
            <span className="article__tag boder">{e}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Article;
