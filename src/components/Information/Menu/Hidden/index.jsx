import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

function HiddenMenu({ category, articles, visible }) {
  return (
    <div className={`information__hidden-menu${visible ? ' visible' : ''}`}>
      <div className="information__hidden-menu__row">
        <ul className="information__hidden-menu-category">
          {category.map((e, i) => (
            <li className="information__hidden-menu-category__choice" key={i}>
              <Link to="/articles/">{e}</Link>
            </li>
          ))}
        </ul>
        <div className="information__hidden-menu-article">
          {articles
            ?.filter((post, pIdx) => pIdx < 3)
            .map((e, i) => (
              <Link to={`/articles/article/${e.aidx}`} key={i}>
                <div className="information__hidden-menu-article__post">
                  <div className="information__hidden-menu-article__post-col">
                    <img src={e.thumbnail} alt="" />
                  </div>
                  <div className="information__hidden-menu-article__post-col">
                    <div className="information__hidden-menu-article__post-title">{e.title}</div>
                    <div className="information__hidden-menu-article__post-description">
                      {e.summary}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default HiddenMenu;
