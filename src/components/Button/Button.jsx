import PropTypes from "prop-types";
import css from "./Button.module.css";

const Button = ({ text, handleButton, view, idTask, total }) => {
  const style = css[view];

  const clickButton = () => {
    if (idTask) {
      handleButton(idTask);
    } else {
      handleButton(view);
    }
  };

  return (
    <button type="button" className={style} onClick={clickButton}>
      {text}
      {total >= 0 && <span className={css.total}>{total}</span>}
    </button>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  view: PropTypes.string.isRequired,
  idTask: PropTypes.number,
  total: PropTypes.number,
  handleButton: PropTypes.func,
};
