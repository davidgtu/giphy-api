import React from 'react';
import classNames from 'classnames';

const History = props => {
  const cachedItems = props.list.map((item, idx) => {
    return <option key={idx} value={item}>{item}</option>
  });

  let selectClasses = classNames (
    'gif-history--container',
    'text-center',
    {
      'invisible': props.list.length < 1
    }
  )
  return (
    <div className={selectClasses}>
      <span>Your past searches:</span>
      <select onChange={event => props.click(event.target.value)} className='gif-history'>{cachedItems}</select>
    </div>
  );
}

export default History;
