import './List.scss';
import React, { useEffect, useState } from 'react';
import ListItem from './ListItem';
import Pagination from '../Information/Pagination';

const categoryCodeMap = new Map([
  ['information', '300'],
  ['review', '400'],
]);

function List({ category = 'information' }) {
  const [articlePreviewList, setArticlePreviewList] = useState([]);

  useEffect(async () => {
    const endpoint = 'https://helpet-backend.herokuapp.com/graphql';
    // const endpoint = 'https://helpet-backend.herokuapp.com/graphql';
    const query = `
    {
      articlesv2(category_code: "${categoryCodeMap.get(category)}" ) {
        title,
        aidx,
        count_view,
        count_like,
        insert_date,
        thumbnail,
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
    ).data.articlesv2;

    console.log(result);

    setArticlePreviewList(result);
  }, []);

  return (
    <div className="list-container">
      <div className="title">{category === 'review' ? '입양후기' : '센터 아이들'}</div>
      <div className="list">
        {articlePreviewList.map(item => {
          const {
            aidx,
            title,
            // summary,
            thumbnail,
            insert_date: insertDate,
            count_view: countView,
          } = item;

          return (
            <ListItem
              key={aidx}
              aidx={aidx}
              title={title}
              thumbnail={thumbnail}
              insertDate={insertDate.slice(0, 10)}
              countView={countView}
            />
          );
        })}
      </div>

      <div className="pagination-container">
        <Pagination current="6" total="10" baseUrl="" />
      </div>

      <div className="list-container__search-form">
        <div className="mode">
          <select>
            <option selected>제목</option>
            <option>내용</option>
            <option>이름</option>
          </select>
        </div>

        <div className="input-keyword">
          <input
            type="text"
            placeholder=". . ."
            onChange={e => {
              console.log(e.target.value);
            }}
          />
        </div>

        <button
          type="button"
          onClick={() => {
            console.log(12);
          }}
        >
          검색
        </button>
      </div>
    </div>
  );
}

export default List;
