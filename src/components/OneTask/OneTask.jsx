import css from "./OneTask.module.css";
import Button from "../Button/Button";
import PropTypes from "prop-types";

const OneTask = ({ oneTask: { name, status, description, id } }) => {
  return (
    <li className={css.oneTask}>
      <div className={css.nameStatus}>
        <p className={css.name}>Name: {name}</p>
        <p className={css.status}>
          Status: <input className={css.statusInput} type="checkbox" />
        </p>
      </div>
      <p>Description: {description}</p>
      <div className={css.buttons}>
        <Button text="change" view="change" idTask={id} />
        <Button text="delete" view="delete" idTask={id} />
      </div>
    </li>
  );
};

export default OneTask;

OneTask.propTypes = {
  oneTask: PropTypes.object.isRequired,
};
