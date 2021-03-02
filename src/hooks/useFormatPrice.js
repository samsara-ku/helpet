import _ from 'lodash';

const useFormatPrice = price =>
  _.chunk(`${price}`.split('').reverse(), 3)
    .map(e => e.reverse().join(''))
    .reverse()
    .join(',');

export default useFormatPrice;
