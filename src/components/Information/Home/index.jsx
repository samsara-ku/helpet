import React, { useState, useEffect } from 'react';
import GradeIcon from '@material-ui/icons/Grade';
import { Link } from 'react-router-dom';
import Search from '../Search';
import { heroku } from '../../../env/apiurl.json';
import './index.scss';

function Home() {
  const [articlePreviewList, setArticlePreviewList] = useState([]);

  useEffect(async () => {
    const endpoint = `${heroku}/graphql`;
    const query = `
      {
        articlesv2(category_code: "10|20") {
            aidx,
            title,
            summary,
            thumbnail,
            insert_date
          },
      }
      `;

    const result = (
      await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      }).then(res => res.json())
    ).data.articlesv2;

    setArticlePreviewList(result);
  }, []);

  return (
    <div className="information__home">
      <div className="information__home__header">
        <div className="information__home__header__logo">
          <GradeIcon />
        </div>
        <div className="information__home__header__search-area">
          <Search />
        </div>
      </div>
      <div className="information__home__content">
        <div className="information__home__content__title">인기 콘텐츠</div>
        <div className="information__home__content__box popular">
          {articlePreviewList
            .filter((e, i) => i < 3)
            .map((elem, eidx) => (
              <Link to={`/articles/article/${elem.aidx}/`} key={eidx}>
                <div className="information__home__content__post">
                  <div className="information__home__content__post-col">
                    <img src={elem.thumbnail} alt="" />
                  </div>
                  <div className="information__home__content__post-col">
                    <div className="information__home__content__post-title">{elem.title}</div>
                    <div className="information__home__content__post-content">{elem.summary}</div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
      <div className="information__home__content">
        <div className="information__home__content__title">집사 필수 정보</div>
        <div className="information__home__content__box essential">
          {articlePreviewList
            .filter((e, i) => i < 4)
            .map((elem, eidx) => (
              <Link to={`/articles/article/${elem.aidx}/`} key={eidx}>
                <div className="information__home__content__post">
                  <div className="information__home__content__post-col">
                    <img src={elem.thumbnail} alt="" />
                  </div>
                  <div className="information__home__content__post-col">
                    <div className="information__home__content__post-title">{elem.title}</div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
      <div className="information__home__content">
        <div className="information__home__content__title">이런건 어때요?</div>
        <div className="information__home__content__box etc">
          {articlePreviewList
            .filter((e, i) => i >= 5)
            .map((elem, eidx) => (
              <Link to={`/articles/article/${elem.aidx}/`} key={eidx}>
                <div className="information__home__content__post">
                  <div className="information__home__content__post-col">
                    <img src={elem.thumbnail} alt="" />
                  </div>
                  <div className="information__home__content__post-col">
                    <div className="information__home__content__post-title">{elem.title}</div>
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
