import PropTypes from "prop-types";
import css from "./Button.module.css";

const Button = ({ text, handleButton, view, idTask }) => {
  const style = css[view];

  return (
    <button
      type="button"
      className={style}
      onClick={() => {
        handleButton(idTask);
      }}
    >
      {text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  view: PropTypes.string.isRequired,
  idTask: PropTypes.number,
  handleButton: PropTypes.func,
};
