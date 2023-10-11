import TasksList from "../../components/TasksList/TasksList";
import Container from "../../components/Container/Container";
import css from "./MainPage.module.css";
import Button from "../../components/Button/Button";
import ModalWindow from "../../components/ModalWindow/ModalWindow";
import FormTask from "../../components/FormTask/FormTask";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectAllTasks } from "../../redux/selectors";

const MainPage = () => {
  const [isModalWindowOpen, setIsModalWindowOpen] = useState(false);
  const [typeOperation, setTypeOperation] = useState(null);
  const [filter, setFilter] = useState("alltasks");
  const allTasks = useSelector(selectAllTasks);

  const filteredTasks = allTasks.filter((task) => {
    if (filter === "alltasks") {
      return true;
    } else if (filter === "isdone" && task.status) {
      return true;
    } else if (filter === "notdone" && !task.status) {
      return true;
    } else return false;
  });

  const totalAllTasks = allTasks.length;
  const totalDoneTasks = allTasks.filter((task) => task.status).length;
  const totalNotDoneTasks = allTasks.filter((task) => !task.status).length;

  const handleButton = () => {
    setIsModalWindowOpen(true);
    setTypeOperation("add");
  };

  const changeFilter = (filter) => {
    setFilter(filter);
  };

  const handleAddTask = () => {
    setIsModalWindowOpen(false);
  };

  return (
    <section className={css.mainPage}>
      <Container>
        <h1 className={css.headLine}>your tasks</h1>
        <div className={css.mainButtons}>
          <Button text="Add task" view="addtask" handleButton={handleButton} />
          <Button
            text="All tasks"
            view="alltasks"
            total={totalAllTasks}
            handleButton={changeFilter}
          />
          <Button
            text="Is done"
            view="isdone"
            total={totalDoneTasks}
            handleButton={changeFilter}
          />
          <Button
            text="Not done"
            view="notdone"
            total={totalNotDoneTasks}
            handleButton={changeFilter}
          />
        </div>

        {filteredTasks.length > 0 ? (
          <TasksList allTasks={filteredTasks} />
        ) : (
          <p className={css.noTasks}>You do not have such tasks</p>
        )}
      </Container>
      {isModalWindowOpen && (
        <ModalWindow setIsModalWindowOpen={setIsModalWindowOpen}>
          {typeOperation === "add" && (
            <FormTask
              handleTask={handleAddTask}
              typeOperation={typeOperation}
            />
          )}
        </ModalWindow>
      )}
    </section>
  );
};

export default MainPage;
