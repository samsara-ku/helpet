/* eslint-disable react/no-danger */
import React, { useEffect, useState } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ShareBtn from '../../ShareBtn';
import Tags from '../../Tag';
import RelatedArticle from '../../RelatedArticle';
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
  const [articlePreviewList, setArticlePreviewList] = useState([]);

  useEffect(async () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

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

    setArticlePreviewList(result);

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

      <Tags cidx={categoryCode} />

      <RelatedArticle articleList={articlePreviewList} />
    </div>
  );
}

export default ArticleDetail;
