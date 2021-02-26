import React from 'react';
import './index.scss';

const isAuthorized = false;
const mockData = [
  { aidx: '1', title: '질문1', author: '유저1', insertDate: 'today' },
  { aidx: '11', title: '질문2', author: '유저2', insertDate: 'today' },
  { aidx: '12', title: '질문2', author: '유저2', insertDate: 'today' },
  { aidx: '13', title: '질문2', author: '유저2', insertDate: 'today' },
  { aidx: '14', title: '질문2', author: '유저2', insertDate: 'today' },
  { aidx: '15', title: '질문2', author: '유저2', insertDate: 'today' },
  { aidx: '16', title: '질문2', author: '유저2', insertDate: 'today' },
  { aidx: '17', title: '질문2', author: '유저2', insertDate: 'today' },
  { aidx: '18', title: '질문2', author: '유저2', insertDate: 'today' },
  { aidx: '19', title: '질문2', author: '유저2', insertDate: 'today' },
  { aidx: '20', title: '질문2', author: '유저2', insertDate: 'today' },
  { aidx: '21', title: '질문2', author: '유저2', insertDate: 'today' },
  { aidx: '22', title: '질문2', author: '유저2', insertDate: 'today' },
];

function QnA() {
  return (
    <div className="information__qna">
      <h1>질문과 답변</h1>

      <div className="form">
        {isAuthorized ? (
          <div>Login</div>
        ) : (
          <>
            <input type="text" name="q" placeholder="질문을 적어주세요" />
            <button type="button" onClick={() => {}}>
              질문하기
            </button>
          </>
        )}
      </div>

      <div className="list">
        {mockData.map(({ aidx, title, author, insertDate }) => (
          <div key={aidx} className="list-item">
            <div className="title">{title}</div>
            <div className="meta">
              <span>{author}</span>
              <span>{insertDate}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QnA;
