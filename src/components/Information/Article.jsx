import './Article.scss';
import React from 'react';

function Article() {
  return (
    <div className="article">
      <div className="article__image-wrapper">
        <img src="https://via.placeholder.com/390x220?text=1" alt="" />
      </div>
      <div className="article__info">
        <h4>
          titletitletitletitletitletitletitletitletitletitletitletit
          letitletitletitletitletitletitletitletitletitletit
          letitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitle
        </h4>
        <p>
          contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent
        </p>
      </div>
    </div>
  );
}

export default Article;
