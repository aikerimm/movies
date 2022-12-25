import React from 'react';
import PropTypes from 'prop-types';

const SortTypeSelector = ({ sortType, sortDirection, onSortChanged }) => {
  return (
    <div className='sortTypeSelect'>
      <label htmlFor='sortType' className='sortTypeLabel'>
        Sort by
      </label>
      <select
        name='sortType'
        id='sortType'
        onChange={({ target: { value } }) =>
          onSortChanged(value, sortDirection)
        }
        value={sortType || ''}
      >
        <option value=''>Select: </option>
        <a href={onSortChanged('release_date', sortDirection)}>
          {' '}
          <option value='release_date'>Release Date</option>
        </a>
        <a href={onSortChanged('title', sortDirection)}>
          <option value='title'>Title</option>
        </a>
        <a href={onSortChanged('vote_average', sortDirection)}>
          <option value='vote_average'>Rating</option>
        </a>
      </select>
      <a
        href={onSortChanged(
          sortType ? sortType : 'release_date',
          sortDirection === 'asc' ? 'desc' : 'asc'
        )}
      >
        <div>
          <span className='sortDirection'>
            {sortDirection === 'asc' ? '⇑' : '⇓'}
          </span>
        </div>
      </a>
    </div>
  );
};

SortTypeSelector.propTypes = {
  sortType: PropTypes.string,
  sortDirection: PropTypes.string.isRequired,
  onSortChanged: PropTypes.func.isRequired,
};

export default React.memo(SortTypeSelector);
