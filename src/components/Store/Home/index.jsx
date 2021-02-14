import React from 'react';
import './index.scss';
import Item from '../Item';

function Home() {
  const mockData = [
    {
      title: '고양이용 스크래쳐',
      image:
        'https://koozpetshop.com/web/product/medium/202012/ed2915d1f708af93e24a07ed03088d5e.jpg',
      price: '45,000',
      rating: 3,
      reviewNum: '12',
    },
    {
      title: '고양이용 사료',
      image: 'https://koozpetshop.com/web/product/medium/2b122.jpg',
      price: '24,000',
      rating: 4,
      reviewNum: '1',
    },
    {
      title: '강아지용 스낵볼',
      image: 'https://koozpetshop.com/web/product/medium/tobpet1222_sum_009.jpg',
      price: '9,550',
      rating: 1,
      reviewNum: '3',
    },
    {
      title: '강아지용 노즈워크 동글과녁',
      image: 'https://koozpetshop.com/web/product/medium/tobpet_210114_sum_012.jpg',
      price: '32,000',
      rating: 2,
      reviewNum: '0',
    },
  ];

  return (
    <div className="store__home">
      <div className="store__home__row">
        <div className="divider-wrapper">
          <span className="divider" />
        </div>
        <div className="title">반려동물 용품</div>
        <div className="content-wrapper">
          {mockData.map((e, i) => (
            <Item
              key={i}
              title={e.title}
              image={e.image}
              price={e.price}
              reviewNum={e.reviewNum}
              rating={e.rating}
            />
          ))}
        </div>
        <div className="button-wrapper">
          <button type="button">더 보기 +</button>
        </div>
      </div>
      <div className="store__home__row">
        <div className="divider-wrapper">
          <span className="divider" />
        </div>
        <div className="title">굿즈</div>
        <div className="content-wrapper">
          {mockData.map((e, i) => (
            <Item
              key={i}
              title={e.title}
              image={e.image}
              price={e.price}
              reviewNum={e.reviewNum}
              rating={e.rating}
            />
          ))}
        </div>
        <div className="button-wrapper">
          <button type="button">더 보기 +</button>
        </div>
      </div>
      <div className="store__home__row">
        <div className="divider-wrapper">
          <span className="divider" />
        </div>
        <div className="title">다양한 카테고리</div>
        <div className="content-wrapper">
          <div className="content">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/70/Dog_silhouette.svg"
              alt="thumbnail"
            />
            <span>강아지 용품</span>
            <button type="button">보러가기</button>
          </div>
          <div className="content">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cat_silhouette.svg/400px-Cat_silhouette.svg.png"
              alt="thumbnail"
            />
            <span>고양이 용품</span>
            <button type="button">보러가기</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
