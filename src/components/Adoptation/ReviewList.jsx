import React from 'react';
import List from './List';
import AdoptationLayout from './AdoptationLayout';

function ReviewList() {
  return <AdoptationLayout category="review" content={<List category="review" />} />;
}

export default ReviewList;
