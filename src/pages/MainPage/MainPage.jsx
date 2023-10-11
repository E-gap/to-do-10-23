import TasksList from "../../components/TasksList/TasksList";
import Container from "../../components/Container/Container";
import css from "./MainPage.module.css";
import Button from "../../components/Button/Button";
import ModalWindow from "../../components/ModalWindow/ModalWindow";
import FormAddTask from "../../components/FormAddTask/FormAddTask";
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
        <TasksList allTasks={allTasks} />
      </Container>
      {isModalWindowOpen && (
        <ModalWindow setIsModalWindowOpen={setIsModalWindowOpen}>
          {typeOperation === "add" && (
            <FormAddTask handleAddTask={handleAddTask} />
          )}
        </ModalWindow>
      )}
    </section>
  );
};

export default MainPage;
