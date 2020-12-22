import React from 'react';
import Counter from '../components/Information/Counter';
import { CounterActions } from '../hooks/useMyActions';
import { useCounter } from '../hooks/useMyState';

const CounterContainer = () => {
  const counter = useCounter();

  const { decrease, increase } = CounterActions();

  return <Counter number={counter} onIncrease={increase} onDecrease={decrease} />;
};

export default CounterContainer;
