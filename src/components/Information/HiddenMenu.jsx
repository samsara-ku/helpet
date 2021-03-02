import React from 'react';
import './HiddenMenu.scss';
import { Link } from 'react-router-dom';

function HiddenMenu({ category, articles, visible }) {
  return (
    <div className={`hidden-menu${visible ? ' visible' : ''}`}>
      <div className="hidden-menu__row">
        <ul className="hidden-menu-category">
          {category.map((e, i) => (
            <li className="hidden-menu-category__choice" key={i}>
              <Link to="/articles/">{e}</Link>
            </li>
          ))}
        </ul>
        <div className="hidden-menu-article">
          {articles
            ?.filter((post, pIdx) => pIdx < 3)
            .map((e, i) => (
              <Link to={`/articles/article/${e.aidx}`}>
                <div key={i} className="hidden-menu-article__post">
                  <div className="hidden-menu-article__post-col">
                    <img src={e.thumbnail} alt="" />
                  </div>
                  <div className="hidden-menu-article__post-col">
                    <div className="hidden-menu-article__post-title">{e.title}</div>
                    <div className="hidden-menu-article__post-description">{e.summary}</div>
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
