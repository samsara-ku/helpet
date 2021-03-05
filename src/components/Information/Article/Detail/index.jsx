/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Share from '../../../Global/Share';
import Tags from '../../Tag';
import RelatedArticle from '../Related';
import { heroku } from '../../../../env/apiurl.json';
import './index.scss';

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
  const [relatedArticles, setRelatedArticles] = useState([]);

  const handleButton = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  useEffect(async () => {
    const endpoint = `${heroku}/graphql`;
    const query = `
      {
        articlesv2(page: ${Math.round(Math.random() * 2 + 1)}, size: 6 ) {
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

    setRelatedArticles(result);

    const lazyImg = document.querySelectorAll('img');

    if ('IntersectionObserver' in window) {
      const imgObserver = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.lazySrc ?? img.src;
              imgObserver.unobserve(img);
            }
          });
        },
        { rootMargin: '0px 0px 300px 0px' }
      );

      lazyImg.forEach(image => imgObserver.observe(image));
    }
  }, []);

  const _content = { __html: content };

  return (
    <div className="information__article-detail border">
      <div className="information__article-detail__breadcrumb">
        <HomeIcon />
        <span>
          {categoryCode} {countView} {insertDate} {updateDate} {insertUidx}
        </span>
      </div>
      <div className="information__article-detail__title">
        <h1>{title}</h1>
      </div>

      <div className="information__article-detail__content" dangerouslySetInnerHTML={_content} />

      <div className="information__article-detail__btns">
        <div className="information__article-detail__btns__left">
          <button type="button" onClick={console.log}>
            <ThumbUpIcon />
            <span>{countLike}</span>
          </button>
        </div>
        <div className="information__article-detail__btns__right">
          <Share />
        </div>
      </div>

      <Tags cidx={categoryCode} />

      <RelatedArticle articles={relatedArticles} />

      <div className="top-button" role="button" tabIndex={0} onClick={handleButton}>
        <ArrowUpwardIcon />
      </div>
    </div>
  );
}

export default ArticleDetail;
