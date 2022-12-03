import React from 'react';
import PropTypes from 'prop-types';

const SortTypeSelector = ({sortType, sortDirection, onSortChanged}) => {
  const arrowSymbol = sortDirection === 'asc' ? <span className='sortDirection'>&uArr;</span> : <span className='sortDirection'>&dArr;</span>;

  return (
    <div className='sortTypeSelect'>
      <label htmlFor='sortType' className='sortTypeLabel'>
        Sort by
      </label>
      <select
        name='sortType'
        id='sortType'
        onChange={({ target: { value } }) => onSortChanged(value, sortDirection)}
      >
        <option value='release_date'>Release Date</option>
        <option value='title'>Title</option>
        <option value='vote_average'>Rating</option>
      </select>
      <div onClick={() => onSortChanged(sortType ? sortType : 'release_date', sortDirection === 'asc' ? 'desc' :  'asc')}>
        {arrowSymbol}
      </div>
    </div>
  );
};

SortTypeSelector.propTypes = {
  sortType: PropTypes.string,
  sortDirection: PropTypes.string.isRequired,
  onSortChanged: PropTypes.func.isRequired
};

export default React.memo(SortTypeSelector);
