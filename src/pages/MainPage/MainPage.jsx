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

  const allTasks = useSelector(selectAllTasks);

  const handleButton = () => {
    setIsModalWindowOpen(true);
    setTypeOperation("add");
  };

  const handleAddTask = () => {
    setIsModalWindowOpen(false);
  };

  return (
    <section className={css.mainPage}>
      <Container>
        <h1 className={css.headLine}>your tasks</h1>
        <Button text="Add task" view="addtask" handleButton={handleButton} />
        {allTasks.length > 0 ? (
          <TasksList allTasks={allTasks} />
        ) : (
          <p className={css.noTasks}>You don have any tasks</p>
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
