import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ page, onPageDecrement, onPageIncrement }) => {
  const pageDecrement = onPageDecrement();
  const pageIncrement = onPageIncrement();
  return (
    <div className='pagination'>
      <a href={pageDecrement}>
        <div
          id='pageDecrement'
          alt='pageDecrement'
          className='circle'
          onClick={onPageDecrement}
        >
          &lt;
        </div>
      </a>
      <div className='circle' id='currentPage'>
        {page}
      </div>
      <a href={pageIncrement}>
        <div
          id='pageIncrement'
          alt='pageIncrement'
          className='circle'
          onClick={onPageIncrement}
        >
          &gt;
        </div>
      </a>
    </div>
  );
};

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  onPageDecrement: PropTypes.func.isRequired,
  onPageIncrement: PropTypes.func.isRequired,
};

export default React.memo(Pagination);
