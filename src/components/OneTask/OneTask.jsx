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
        <div>
          <p>Name: </p>
          <p className={css.name}>{name}</p>
        </div>
        <p className={css.status}>
          Status:
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
      <div>
        <p>Deescription: </p>
        <p className={css.description}>{description}</p>
      </div>
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
