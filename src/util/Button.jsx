import PropTypes from 'prop-types';
import '../app.css';

const Button = ({ value, type, onClick }) => {
  const cssClass = type + 'Btn roundedCorners';
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
};

export default Button;
