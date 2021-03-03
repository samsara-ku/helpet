import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './Home/index';
import Articles from './ArticleList';
import ArticlePageContainer from '../../containers/ArticlePageContainer';
import QnA from './QnA';
import Menu from './Menu';

function Index() {
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

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <Router basename="/home">
      <Menu articles={articlePreviewList} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/articles">
          <Articles />
        </Route>

        <Route path="/articles/article/:aidx">
          <ArticlePageContainer />
        </Route>

        <Route path="/qna/">
          <QnA />
        </Route>
      </Switch>
    </Router>
  );
}

export default Index;
