import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ page, onPageDecrement, onPageIncrement }) => {
  return (
    <div className='pagination'>
      <div className='circle' onClick={onPageDecrement}>
        &lt;
      </div>
      <div className='circle'>{page}</div>
      <div className='circle' onClick={onPageIncrement}>
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
