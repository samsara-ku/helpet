import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import Article from '../Article';
import Paginator from '../../Global/Paginator';
import { heroku } from '../../../env/apiurl.json';
import ENV from '../../../env/var.json';
import './index.scss';

function ArticleList() {
  const match = useRouteMatch();
  const { cidx } = match.params;
  const [articlePreviewList, setArticlePreviewList] = useState([]);

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

    setArticlePreviewList(result);
  }, [cidx]);

  return (
    <div className="information__articles">
      <div className="information__articles__meta">
        <span>
          <strong>{ENV[cidx]}</strong>에 대한 검색 결과
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

      <Paginator current="6" total="10" baseUrl="" />
    </div>
  );
}

export default ArticleList;
