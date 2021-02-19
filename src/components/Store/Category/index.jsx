import React from 'react';
import _ from 'lodash';
import './index.scss';
import Item from '../Item';

function Category() {
  const mockData = _.chunk(
    [
      {
        title: '고양이용 스크래쳐',
        image:
          'https://koozpetshop.com/web/product/medium/202012/ed2915d1f708af93e24a07ed03088d5e.jpg',
        price: 45000,
        rating: 3,
      },
      {
        title: '고양이용 사료',
        image: 'https://koozpetshop.com/web/product/medium/2b122.jpg',
        price: 24000,
        rating: 4,
      },
      {
        title: '강아지용 스낵볼',
        image: 'https://koozpetshop.com/web/product/medium/tobpet1222_sum_009.jpg',
        price: 9500,
        rating: 1,
      },
      {
        title: '강아지용 노즈워크 동글과녁',
        image: 'https://koozpetshop.com/web/product/medium/tobpet_210114_sum_012.jpg',
        price: 32000,
        rating: 2,
      },
      {
        title: '고양이용 스크래쳐',
        image:
          'https://koozpetshop.com/web/product/medium/202012/ed2915d1f708af93e24a07ed03088d5e.jpg',
        price: 45000,
        rating: 3,
      },
      {
        title: '고양이용 사료',
        image: 'https://koozpetshop.com/web/product/medium/2b122.jpg',
        price: 24000,
        rating: 4,
      },
      {
        title: '강아지용 스낵볼',
        image: 'https://koozpetshop.com/web/product/medium/tobpet1222_sum_009.jpg',
        price: 9500,
        rating: 1,
      },
      {
        title: '강아지용 노즈워크 동글과녁',
        image: 'https://koozpetshop.com/web/product/medium/tobpet_210114_sum_012.jpg',
        price: 32000,
        rating: 2,
      },
      {
        title: '고양이용 스크래쳐',
        image:
          'https://koozpetshop.com/web/product/medium/202012/ed2915d1f708af93e24a07ed03088d5e.jpg',
        price: 45000,
        rating: 3,
      },
      {
        title: '고양이용 사료',
        image: 'https://koozpetshop.com/web/product/medium/2b122.jpg',
        price: 24000,
        rating: 4,
      },
      {
        title: '강아지용 스낵볼',
        image: 'https://koozpetshop.com/web/product/medium/tobpet1222_sum_009.jpg',
        price: 9500,
        rating: 1,
      },
      {
        title: '강아지용 노즈워크 동글과녁',
        image: 'https://koozpetshop.com/web/product/medium/tobpet_210114_sum_012.jpg',
        price: 32000,
        rating: 2,
      },
      {
        title: '고양이용 사료',
        image: 'https://koozpetshop.com/web/product/medium/2b122.jpg',
        price: 24000,
        rating: 4,
      },
    ],
    4
  );

  return (
    <div className="store__category">
      <div className="store__category__header">
        <div className="store__category__col">{mockData.flat().length}개의 검색 결과</div>
      </div>
      <div className="store__category__content">
        {mockData.map(array =>
          array.map((elem, eIdx) => (
            <Item
              key={eIdx}
              title={elem.title}
              image={elem.image}
              price={elem.price}
              rating={elem.rating}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Category;
