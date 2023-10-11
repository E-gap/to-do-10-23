import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./FormAddTask.module.css";
import PropTypes from "prop-types";
// import { useSelector } from "react-redux";

// import { selectUserData } from "../../redux/selectors";
// import Notiflix from "notiflix";
// import { useState } from "react";
import { TaskSchema } from "../../utils/TaskSchema";

function FormAddTask({ handleAddTask }) {
  const submitForm = (values) => {
    console.log(values);
    handleAddTask();
  };

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          description: "",
          status: false,
        }}
        validationSchema={TaskSchema}
        onSubmit={submitForm}
      >
        <Form className={css.form}>
          <label className={`${css.label} ${css.name}`}>
            Name:
            <Field name="name" className={css.field} />
            <ErrorMessage
              name="name"
              render={(message) => (
                <div className={css.errorValidation}>{message}</div>
              )}
            />
          </label>
          <label className={`${css.label} ${css.statusLabel}`}>
            Status:
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
            Add task
          </button>
        </Form>
      </Formik>
    </>
  );
}

export default FormAddTask;

FormAddTask.propTypes = {
  handleAddTask: PropTypes.func.isRequired,
};
