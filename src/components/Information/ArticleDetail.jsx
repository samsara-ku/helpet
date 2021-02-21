/* eslint-disable react/no-danger */
import './ArticleDetail.scss';
import React, { useEffect, useState } from 'react';
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

    const lazyImg = document.querySelectorAll('img');

    if ('IntersectionObserver' in window) {
      const imgObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.lazySrc ?? img.src;
              imgObserver.unobserve(img);
              console.log(img);
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

      <Tags />

      <RelatedArticle articleList={articlePreviewList} />
    </div>
  );
}

export default ArticleDetail;
