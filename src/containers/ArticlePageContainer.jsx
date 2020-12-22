import React from 'react';
import Article from '../components/Information/Article';
import Layout1 from '../components/Information/Layout1';
import SideContent from '../components/Information/SideContent';

const ArticlePageContainer = () => {
  console.log(123);

  return <Layout1 mainContent={<Article />} sideContent={<SideContent />} />;
};

export default ArticlePageContainer;
