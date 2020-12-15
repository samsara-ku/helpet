import React from 'react';
import Article from '../components/Article';
import Layout1 from '../components/Layout1';
import SideContent from '../components/SideContent';

const ArticlePageContainer = () => {
  console.log(123);

  return <Layout1 mainContent={<Article />} sideContent={<SideContent />} />;
};

export default ArticlePageContainer;
