/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { heroku } from '../../../../env/apiurl.json';
import ENV from '../../../../env/var.json';
import './index.scss';

function HiddenMenu({ cidx, visible }) {
  const history = useHistory();
  const [menuList, setMenuList] = useState([]);

  useEffect(async () => {
    const endpoint = `${heroku}/graphql`;
    const query = `
    {
      articlesv2(category_code: "${cidx}") {
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

    setMenuList(result);
  }, []);

  return (
    <div className={`information__hidden-menu${visible ? ' visible' : ''}`}>
      <div className="information__hidden-menu__row">
        <ul className="information__hidden-menu-category">
          {['건강', '행동', '음식', '훈련', '종류'].map((e, i) => (
            <li className="information__hidden-menu-category__choice" key={i}>
              <Link to={`/articles/${cidx}`}>
                {ENV[cidx]} {e}
              </Link>
            </li>
          ))}
        </ul>
        <div className="information__hidden-menu-article">
          {menuList
            ?.filter((_, pIdx) => pIdx < 3)
            .map((elem, i) => (
              <div
                className="information__hidden-menu-article__post"
                onClick={e => {
                  e.stopPropagation();
                  history.push(`/articles/article/${elem.aidx}`);
                }}
                role="button"
                tabIndex={0}
                key={i}
              >
                <div className="information__hidden-menu-article__post-col">
                  <img src={elem.thumbnail} alt="" />
                </div>
                <div className="information__hidden-menu-article__post-col">
                  <div className="information__hidden-menu-article__post-title">{elem.title}</div>
                  <div className="information__hidden-menu-article__post-description">
                    {elem.summary}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default HiddenMenu;
