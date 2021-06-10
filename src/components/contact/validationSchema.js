import { FORMIK_HELPER } from "./constans";
import * as Yup from "yup";

export const formikValidationSchema = Yup.object().shape({
  [FORMIK_HELPER.NAME]: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  [FORMIK_HELPER.MESSAGE]: Yup.string()
    .min(2, "Too Short!")
    .max(160, "Too Long!")
    .required("Required"),
  [FORMIK_HELPER.EMAIL]: Yup.string()
    .email("Invalid email")
    .required("Required"),
});
