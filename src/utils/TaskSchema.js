import * as Yup from "yup";

export const TaskSchema = Yup.object().shape({
  name: Yup.string()
    .required("Please input name")
    .max(30, "Must be no more 30 digits"),
  description: Yup.string(),
  status: Yup.bool(),
});
