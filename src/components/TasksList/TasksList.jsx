import OneTask from "../OneTask/OneTask";
import PropTypes from "prop-types";

const TasksList = ({ allTasks }) => {
  return (
    <ul>
      {allTasks.map((item) => (
        <OneTask oneTask={item} />
      ))}
    </ul>
  );
};

export default TasksList;

TasksList.propTypes = {
  allTasks: PropTypes.arrayOf(PropTypes.object),
};
