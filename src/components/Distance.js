import React from 'react';

export default function Distance({d}) {
  let distance = '';
  switch (d) {
    case '42k':
      distance = 'Marathon';
      break;
    case '21k':
      distance = 'Halvmarathon';
      break;
    default:
      distance = d;
  }

  return <span>{distance}</span>
}
