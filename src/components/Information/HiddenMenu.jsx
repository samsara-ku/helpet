import React from 'react';
import './HiddenMenu.scss';

function HiddenMenu({ category, post, visible }) {
  return (
    <div className={`hidden-menu ${visible ? ' visible' : ''}`}>
      <div className="hidden-menu__row">
        <ul className="hidden-menu-category">
          {category.map((e, i) => (
            <li className="hidden-menu-category__choice" key={i}>
              {e}
            </li>
          ))}
        </ul>
        <div className="hidden-menu-article">
          {post.map((e, i) => (
            <div key={i} className="hidden-menu-article__post">
              <div className="hidden-menu-article__post-col">
                <img src={e.imgSrc} alt="" />
              </div>
              <div className="hidden-menu-article__post-col">
                <div className="hidden-menu-article__post-title">{e.title}</div>
                <div className="hidden-menu-article__post-description">{e.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HiddenMenu;
