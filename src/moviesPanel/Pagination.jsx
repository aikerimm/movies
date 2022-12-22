import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ page, onPageDecrement, onPageIncrement }) => {
  return (
    <div className='pagination'>
      <div id='pageDecrement' alt='pageDecrement' className='circle' onClick={onPageDecrement}>
        &lt;
      </div>
      <div className='circle' id='currentPage'>{page}</div>
      <div id='pageIncrement' alt='pageIncrement' className='circle' onClick={onPageIncrement}>
        &gt;
      </div>
    </div>
  );
};

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  onPageDecrement: PropTypes.func.isRequired,
  onPageIncrement: PropTypes.func.isRequired,
};

export default React.memo(Pagination);
