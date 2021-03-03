import React, { useState, useEffect } from 'react';
import Article from '../Article';
import Pagination from '../Pagination';
import { heroku } from '../../../env/apiurl.json';
import './index.scss';

function ArticleList() {
  const [articlePreviewList, setArticlePreviewList] = useState([]);

  useEffect(async () => {
    const endpoint = `${heroku}/graphql`;
    const query = `
    {
      articlesv2(category_code: "10") {
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
    ).data.articlesv2;

    setArticlePreviewList(result);
  }, []);

  return (
    <div className="information__articles">
      <div className="information__articles__meta">
        <span>
          <strong>강아지</strong>에 대한 검색 결과
        </span>
      </div>
      <div className="information__articles__content">
        {articlePreviewList.map((item, idx) => {
          const { aidx, title, summary, thumbnail, insert_date: insertDate } = item;

          return (
            <Article
              key={idx}
              aidx={aidx}
              title={title}
              summary={summary}
              thumbnail={thumbnail}
              insertDate={insertDate.slice(0, 10)}
            />
          );
        })}
      </div>

      <Pagination current="6" total="10" baseUrl="" />
    </div>
  );
}

export default ArticleList;
