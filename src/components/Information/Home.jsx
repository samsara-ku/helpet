import './Home.scss';
import React, { useState, useEffect } from 'react';
import GradeIcon from '@material-ui/icons/Grade';
import { Link } from 'react-router-dom';
import Search from './Search';
import Menu from './Menu';

function Home() {
  const [articlePreviewList, setArticlePreviewList] = useState([]);

  useEffect(async () => {
    const endpoint = 'https://helpet-backend.herokuapp.com/graphql';
    const query = `
      {
        articles {
            aidx,
            title,
            summary,
            thumbnail,
            insert_date
          },
      }
      `;

    // fetch 로 graphql 요청 보내기
    // 결과로 받는 객체 data.{쿼리객체명} 을 적으면 결과를 꺼낼 수 있음.
    const result = (
      await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      }).then(res => res.json())
    ).data.articles;

    setArticlePreviewList(result);
  }, []);

  return (
    <div className="home">
      <Menu articles={articlePreviewList} />
      <div className="home__header">
        <div className="home__header__logo">
          <GradeIcon />
        </div>
        <div className="home__header__search-area">
          <Search />
        </div>
      </div>
      <div className="home__content">
        <div className="home__content__title">인기 콘텐츠</div>
        <div className="home__content__box popular">
          {articlePreviewList
            .filter((e, i) => i < 3)
            .map((elem, eidx) => (
              <Link to={`./home/articles/article/${elem.aidx}`} key={eidx}>
                <div className="home__content__post">
                  <div className="home__content__post-col">
                    <img src={elem.thumbnail} alt="" />
                  </div>
                  <div className="home__content__post-col">
                    <div className="home__content__post-title">{elem.title}</div>
                    <div className="home__content__post-content">{elem.summary}</div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
      <div className="home__content">
        <div className="home__content__title">집사 필수 정보</div>
        <div className="home__content__box essential">
          {articlePreviewList
            .filter((e, i) => i < 4)
            .map((elem, eidx) => (
              <Link to={`./home/articles/article/${elem.aidx}`} key={eidx}>
                <div className="home__content__post">
                  <div className="home__content__post-col">
                    <img src={elem.thumbnail} alt="" />
                  </div>
                  <div className="home__content__post-col">
                    <div className="home__content__post-title">{elem.title}</div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
      <div className="home__content">
        <div className="home__content__title">이런건 어때요?</div>
        <div className="home__content__box etc">
          {articlePreviewList
            .filter((e, i) => i >= 5)
            .map((elem, eidx) => (
              <Link to={`./home/articles/article/${elem.aidx}`} key={eidx}>
                <div className="home__content__post">
                  <div className="home__content__post-col">
                    <img src={elem.thumbnail} alt="" />
                  </div>
                  <div className="home__content__post-col">
                    <div className="home__content__post-title">{elem.title}</div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
