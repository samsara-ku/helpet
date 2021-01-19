/* eslint-disable react/no-danger */
import './ArticleDetail.scss';
import React, { useEffect } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ShareBtn from './ShareBtn';
import Tags from './Tags';
import RelatedArticle from './RelatedArticle';

function ArticleDetail({
  title,
  content,
  countView,
  countLike,
  insertDate,
  updateDate,
  insertUidx,
  categoryCode,
}) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

    const lazyImg = document.querySelectorAll('img');

    if ('IntersectionObserver' in window) {
      const imgObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.lazySrc ?? img.src;
            imgObserver.unobserve(img);
            console.log(img);
          }
        });
      });

      lazyImg.forEach(image => imgObserver.observe(image));
    }
  }, []);

  const _content = { __html: content };

  return (
    <div className="article-detail border">
      <div className="article-detail__breadcrumb">
        <HomeIcon />
        <span>
          {categoryCode} {countView} {insertDate} {updateDate} {insertUidx}
        </span>
      </div>
      <div className="article-detail__title">
        <h1>{title}</h1>
      </div>

      <div className="article-detail__content" dangerouslySetInnerHTML={_content} />

      <div className="article-detail__btns">
        <div className="article-detail__btns__left">
          <button type="button" onClick={console.log}>
            <ThumbUpIcon />
            <span>{countLike}</span>
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
