import * as Yup from "yup";

export const TaskSchema = Yup.object().shape({
  name: Yup.string().required("Please input name"),
  description: Yup.string(),
  status: Yup.bool(),
});
