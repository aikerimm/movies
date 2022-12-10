import PropTypes from 'prop-types';
import '../app.css';
import React from 'react';

const Button = ({ value, type, onClick, isFormSubmit = false }) => {
  const cssClass = type + 'Btn roundedCorners';
  if (isFormSubmit) {
    return (
      <button type='submit' className={cssClass}>
        Submit
      </button>
    );
  }
  if (onClick) {
    return (
      <input
        type='button'
        value={value}
        className={cssClass}
        onClick={onClick}
      ></input>
    );
  }
  return <input type='button' value={value} className={cssClass}></input>;
};

Button.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isFormSubmit: PropTypes.bool,
};

export default React.memo(Button);
