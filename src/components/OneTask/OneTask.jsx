import css from "./OneTask.module.css";
import Button from "../Button/Button";
const OneTask = () => {
  return (
    <li className={css.oneTask}>
      <div className={css.nameStatus}>
        <p>Name: ssdsdsdsd</p>
        <p className={css.status}>
          Status: <input className={css.statusInput} type="checkbox" />
        </p>
        <Button text="change" view="change" />
        <Button text="delete" view="delete" />
      </div>
      <p>Description: sdsdssdsd</p>
    </li>
  );
};

export default OneTask;
