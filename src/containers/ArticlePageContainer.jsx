import React from 'react';
import ArticleDetail from '../components/Information/ArticleDetail';
import Layout1 from '../components/Information/Layout1';

const ArticlePageContainer = () => {
  console.log(123);

  return <Layout1 mainContent={<ArticleDetail />} />;
};

export default ArticlePageContainer;
