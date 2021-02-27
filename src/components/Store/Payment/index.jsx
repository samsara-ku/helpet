/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import _ from 'lodash';
import './index.scss';
import useFormatPrice from '../../../hooks/useFormatPrice';

function Payment() {
  const cartItems = _.map(localStorage, (e, i) =>
    JSON.parse(localStorage.getItem(localStorage.key(i)))
  );

  return (
    <div className="store__payment">
      <div className="store__payment-total">
        총 {_.sumBy(cartItems, ({ amount }) => amount)}개의 품목
      </div>
      <div className="store__payment-info">
        <div className="store__payment-main">
          <div className="store__payment-items">
            {_.map(cartItems, ({ title, image, amount, price }) => (
              <div className="store__payment-item">
                <div className="image">
                  <img src={image} alt="item_thumbnail" />
                </div>
                <div className="detail">
                  <div className="title">상품명: {title}</div>
                  <div className="amount">수량: {amount}개</div>
                  <div className="price">총 금액: ₩{useFormatPrice(price * amount)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="store__payment-side">
          <div className="store__payment-side-title">결제 정보</div>
          <div className="store__payment-side-content">
            <div className="box">
              <div className="name">이름</div>
              <input type="text" placeholder="이름" />
            </div>
            <div className="box">
              <div className="address">주소</div>
              <input type="text" placeholder="우편 번호" />
              <div>
                <input type="text" placeholder="기본주소" />
                <input type="text" placeholder="상세주소" />
              </div>
            </div>
            <div className="box">
              <div className="email">이메일</div>
              <input type="email" placeholder="이메일" />
              <div className="phone">전화번호</div>
              <input type="phone" placeholder="전화번호" />
            </div>
            <div className="box">
              <div className="memo">주문 시 요청사항</div>
              <textarea
                name=""
                id=""
                cols="40"
                rows="5"
                placeholder="주문 관련 메시지, 예) 배송 관련 메모"
              />
            </div>
          </div>
          <div className="store__payment-side-price">
            합계 금액: {useFormatPrice(_.sumBy(cartItems, ({ price, amount }) => price * amount))}
          </div>
          <button type="button">결제하기</button>
        </div>
      </div>
    </div>
  );
}

export default Payment;
