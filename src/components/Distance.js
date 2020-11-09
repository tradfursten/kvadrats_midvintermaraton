import React from 'react';

export default function Distance({ d }) {
  let distance = '';
  switch (d) {
    case '42k':
      distance = 'Marathon';
      break;
    case '21k':
      distance = 'Halvmarathon';
      break;
    case '10k':
      distance = '10 kilometer';
      break;
    case '5k':
      distance = '5 kilometer';
      break;
    default:
      distance = d;
  }

  return <span>{distance}</span>;
}
