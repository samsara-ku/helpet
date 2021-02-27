/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import './index.scss';
import Item from './Item';
import SignIn from '../SignIn';

const isAuthorized = false;
const mockData = [
  {
    aidx: '1',
    title: '질문1',
    content: '12121123123213123122313',
    author: '유저1',
    insertDate: 'today',
  },
  {
    aidx: '11',
    title: '질문2',
    content:
      '내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용',
    author: '유저2',
    insertDate: 'today',
  },
  {
    aidx: '12',
    title: '질문2',
    content: '121211231232131231223131212112312321312312231312121123123213123122313',
    author: '유저2',
    insertDate: 'today',
  },
  {
    aidx: '13',
    title: '질문2',
    content: '121211231232131231223131212112312321312312231312121123123213123122313',
    author: '유저2',
    insertDate: 'today',
  },
  {
    aidx: '14',
    title: '질문2',
    content: '12121123123213123122313',
    author: '유저2',
    insertDate: 'today',
  },
  {
    aidx: '15',
    title: '질문2',
    content: '12121123123213123122313',
    author: '유저2',
    insertDate: 'today',
  },
  {
    aidx: '16',
    title: '질문2',
    content: '12121123123213123122313',
    author: '유저2',
    insertDate: 'today',
  },
  {
    aidx: '17',
    title: '질문2',
    content: '12121123123213123122313',
    author: '유저2',
    insertDate: 'today',
  },
  {
    aidx: '18',
    title: '질문2',
    content: '12121123123213123122313',
    author: '유저2',
    insertDate: 'today',
  },
  {
    aidx: '19',
    title: '질문2',
    content: '12121123123213123122313',
    author: '유저2',
    insertDate: 'today',
  },
  {
    aidx: '20',
    title: '질문2',
    content: '12121123123213123122313',
    author: '유저2',
    insertDate: 'today',
  },
  {
    aidx: '21',
    title: '질문2',
    content: '12121123123213123122313',
    author: '유저2',
    insertDate: 'today',
  },
  {
    aidx: '22',
    title: '질문2',
    content: '12121123123213123122313',
    author: '유저2',
    insertDate: 'today',
  },
];

function QnA() {
  const [open, setOpen] = useState(false);

  return (
    <div className="information__qna">
      <h1>질문과 답변</h1>

      <div className="information__qna-form">
        {isAuthorized ? (
          <div className="information__qna-form-notLogin">
            <div>로그인 이후에 글을 작성하실 수 있습니다.</div>
            <button type="button" tabIndex={0} onClick={() => setOpen(true)}>
              로그인 하러가기
            </button>
          </div>
        ) : (
          <div className="information__qna-form-isLogin">
            <div className="information__qna-form-row">
              <span> 글 제목:</span>
              <input type="text" name="title" placeholder="제목을 적어주세요" />
            </div>
            <div className="information__qna-form-row">
              <span> 글 내용:</span>
              <textarea
                type="text"
                name="description"
                placeholder="질문 내용을 적어주세요"
                rows="8"
                cols="30"
              />
            </div>
            <div className="information__qna-form-row">
              <button type="button" onClick={() => {}}>
                질문하기
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="information__qna-content">
        <h2>질문 리스트</h2>
        {mockData.map(({ aidx, title, content, author, insertDate }) => (
          <Item
            key={aidx}
            title={title}
            content={content}
            author={author}
            insertDate={insertDate}
          />
        ))}
      </div>

      <SignIn isOpen={open} close={() => setOpen(false)} />
    </div>
  );
}

export default QnA;
