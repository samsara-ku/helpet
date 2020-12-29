import './Home.scss';
import React, { useState, useEffect } from 'react';
import GradeIcon from '@material-ui/icons/Grade';
import { Link } from 'react-router-dom';
import Search from './Search';
import Menu from './Menu';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mockData = [
    {
      content:
        'A new rule from the Department of Transportation now officially restricts the definition of service animals traveling with airline passengers with a disability to be dogs. More specifically, the rule states the service animal must be “a dog, regardless of breed or type, that is individually trained to do work or perform tasks for the benefit of a qualified individual with a disability, including a physical, sensory, psychiatric, intellectual, or other mental disability.”',
      title: 'Service Animals on Planes Now Officially Limited to Dogs',
      time: '12:11:50',
      imgPath:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*',
    },
    {
      content:
        'Health insurance is the one thing in life you need but hope you never have to use: It’s the best safeguard against unforeseen illness, injury, and all the other potential pitfalls of being alive. For a growing number of pet insurance customers, the sentiment holds true for our beloved companion animals. But the pet insurance space, which seems to add more companies and options to choose from by the day, can be confusing and overwhelming to navigate.',
      title: 'The Best Pet Insurance: A Pet Parent’s Guide',
      time: '12:11:50',
      imgPath:
        'https://media.nature.com/lw800/magazine-assets/d41586-020-01430-5/d41586-020-01430-5_17977552.jpg',
    },
    {
      content:
        'December brings many welcome changes, including the “Age of Aquarius” that’s coming our way later in the month. This cosmic event will usher in wide-sweeping changes allowing opportunities for healing, transformation, and higher-minded, humanitarian pursuits. We’ll start to connect more—even it’s virtually—with the aim of building a better world together.',
      title: 'December Pet Horoscopes: What the Stars Have in Store for Dogs and Cats',
      time: '12:11:50',
      imgPath: 'https://i.ytimg.com/vi/7xh1DAKIdng/maxresdefault.jpg',
    },
    {
      content: '0966',
      title: 'The Top 10 Smartest Dog Breeds',
      time: '12:11:50',
      imgPath:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-puppy-lying-down-on-grass-royalty-free-image-1587052215.jpg?crop=1.00xw:0.754xh;0,0.166xh&resize=980:*',
    },
    {
      content: '7546',
      title: 'The 18 Cutest Mixed-Breed Dogs',
      time: '12:11:50',
      imgPath:
        'https://images.mypetlife.co.kr/content/uploads/2019/07/10150937/IMG_59781-e1562739086699-610x446.jpg',
    },
    {
      content: '2109',
      title: '31 Cute Pictures of All-Star Dogs',
      time: '12:11:50',
      imgPath:
        'https://images.mypetlife.co.kr/content/uploads/2019/07/10153003/IMG_9464-610x813.jpg',
    },
    {
      content: '1034',
      title: 'The Breeds to Watch at the Westminster Dog Show',
      time: '12:11:50',
      imgPath:
        'https://images.mypetlife.co.kr/content/uploads/2019/07/18175456/adorable-angry-animal-208984-e1563440212415-390x220.jpg',
    },
  ];

  return (
    <div className="home">
      <Menu />
      <div className="home__header">
        <div className="home__header__logo">
          <GradeIcon />
        </div>
        <div className="home__header__search-area">
          <Search />
        </div>
      </div>
      <div className="home__content">
        <div className="home__content__title">인기 콘텐츠</div>
        <div className="home__content__box popular">
          {mockData
            .filter((e, i) => i < 3)
            .map(e => (
              <div className="home__content__post">
                <div className="home__content__post-col">
                  <img src={e.imgPath} alt="" />
                </div>
                <div className="home__content__post-col">
                  <div className="home__content__post-title">{e.title}</div>
                  <div className="home__content__post-content">{e.content}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="home__content">
        <div className="home__content__title">집사 필수 정보</div>
        <div className="home__content__box essential">
          {mockData
            .filter((e, i) => i < 4)
            .map(e => (
              <div className="home__content__post">
                <div className="home__content__post-col">
                  <img src={e.imgPath} alt="" />
                </div>
                <div className="home__content__post-col">
                  <div className="home__content__post-title">{e.title}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="home__content">
        <div className="home__content__title">이런건 어때요?</div>
        <div className="home__content__box etc">
          {mockData
            .filter((e, i) => i !== 2 && i !== 0)
            .map(e => (
              <div className="home__content__post">
                <div className="home__content__post-col">
                  <img src={e.imgPath} alt="" />
                </div>
                <div className="home__content__post-col">
                  <div className="home__content__post-title">{e.title}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
