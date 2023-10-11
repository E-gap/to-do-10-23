import css from "./OneTask.module.css";
import Button from "../Button/Button";
import PropTypes from "prop-types";
import {
  deleteTask,
  changeTask,
  changeTaskStatus,
} from "../../redux/tasks/tasksSlice";
import { useDispatch } from "react-redux";
import ModalWindow from "../ModalWindow/ModalWindow";
import FormTask from "../FormTask/FormTask";
import { useState } from "react";

const OneTask = ({ oneTask }) => {
  const { name, status, description, id } = oneTask;
  const [isModalWindowOpen, setIsModalWindowOpen] = useState(false);
  const [typeOperation, setTypeOperation] = useState(null);
  const dispatch = useDispatch();

  const deleteOneTask = (idTask) => {
    dispatch(deleteTask(idTask));
  };

  const changeOneTask = (data) => {
    dispatch(changeTask(data));
    setIsModalWindowOpen(false);
  };

  const handleButtonChange = () => {
    setTypeOperation("change");
    setIsModalWindowOpen(true);
  };

  return (
    <li className={css.oneTask}>
      <div className={css.nameStatus}>
        <p className={`${css.label} ${css.labelName}`}>Name: {name}</p>
        <p className={`${css.status} ${css.label}`}>
          Is done:
          <input
            className={css.statusInput}
            type="checkbox"
            defaultChecked={oneTask.status}
            onChange={() => {
              dispatch(changeTaskStatus({ id, isDone: !status }));
            }}
          />
        </p>
      </div>
      {oneTask.description.length > 0 && (
        <div>
          <p className={`${css.label} ${css.labelDescription}`}>
            Description:{" "}
          </p>
          <p className={css.description}>{description}</p>
        </div>
      )}
      <div className={css.buttons}>
        <Button
          text="Change"
          view="change"
          idTask={id}
          handleButton={handleButtonChange}
        />
        <Button
          text="Delete"
          view="delete"
          idTask={id}
          handleButton={deleteOneTask}
        />
      </div>
      {isModalWindowOpen && (
        <ModalWindow setIsModalWindowOpen={setIsModalWindowOpen}>
          {typeOperation === "change" && (
            <FormTask
              idTask={id}
              typeOperation={typeOperation}
              oneTask={oneTask}
              handleTask={changeOneTask}
            />
          )}
        </ModalWindow>
      )}
    </li>
  );
};

export default OneTask;

OneTask.propTypes = {
  oneTask: PropTypes.shape({
    name: PropTypes.string.isRequired,
    status: PropTypes.bool,
    description: PropTypes.string,
    id: PropTypes.number,
  }),
};
