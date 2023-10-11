import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./FormTask.module.css";
import PropTypes from "prop-types";
import { TaskSchema } from "../../utils/TaskSchema";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/tasks/tasksSlice";

function FormTask({ handleTask, idTask, typeOperation, oneTask }) {
  const dispatch = useDispatch();

  const submitForm = (values) => {
    if (typeOperation === "add") {
      const taskData = {
        ...values,
        id: Date.now(),
      };
      handleTask();
      dispatch(addTask(taskData));
    } else if (typeOperation === "change") {
      handleTask({ ...values, id: idTask });
    }
  };

  const initialValues =
    typeOperation === "change"
      ? {
          name: oneTask.name,
          description: oneTask.description,
          status: oneTask.status,
        }
      : { name: "", description: "", status: false };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={TaskSchema}
        onSubmit={submitForm}
      >
        <Form className={css.form}>
          <label className={`${css.label} ${css.name}`}>
            Name:
            <Field name="name" className={`${css.field} ${css.nameText}`} />
            <ErrorMessage
              name="name"
              render={(message) => (
                <div className={css.errorValidation}>{message}</div>
              )}
            />
          </label>
          <label className={`${css.label} ${css.statusLabel}`}>
            Is done:
            <Field name="status" type="checkbox" className={css.checkbox} />
            <ErrorMessage
              name="status"
              render={(message) => (
                <div className={css.errorValidation}>{message}</div>
              )}
            />
          </label>
          <label className={`${css.label} ${css.description}`}>
            Description:
            <Field
              as="textarea"
              name="description"
              className={css.descriptionText}
            />
          </label>
          <button type="submit" className={css.submit}>
            {typeOperation === "add" && "Add task"}
            {typeOperation === "change" && "Change task"}
          </button>
        </Form>
      </Formik>
    </>
  );
}

export default FormTask;

FormTask.propTypes = {
  handleTask: PropTypes.func,
  idTask: PropTypes.number,
  typeOperation: PropTypes.string.isRequired,
  oneTask: PropTypes.object,
};
