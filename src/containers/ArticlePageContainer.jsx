import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import ArticleDetail from '../components/Information/ArticleDetail';
import Layout1 from '../components/Information/Layout1';

const ArticlePageContainer = () => {
  const match = useRouteMatch();
  const { aidx } = match.params;

  const [article, setArticle] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(async () => {
    setIsLoaded(false);

    const endpoint = 'https://helpet-backend.herokuapp.com/graphql';
    const query = `
    {
      article(aidx: ${aidx}) {
        title,
        content,
        count_view,
        count_like,
        insert_date,
        update_date,
        insert_uidx,
        category_code,
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
    ).data.article;

    setArticle(result);
    setIsLoaded(true);
  }, [aidx]);

  const {
    title,
    content,
    count_view: countView,
    count_like: countLike,
    insert_date: insertDate,
    update_date: updateDate,
    insert_uidx: insertUidx,
    category_code: categoryCode,
  } = article;

  return isLoaded ? (
    <Layout1
      mainContent={
        <ArticleDetail
          title={title}
          content={content}
          countView={countView}
          countLike={countLike}
          insertDate={insertDate}
          updateDate={updateDate}
          insertUidx={insertUidx}
          categoryCode={categoryCode}
        />
      }
    />
  ) : (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <CircularProgress />
    </div>
  );
};

export default ArticlePageContainer;
