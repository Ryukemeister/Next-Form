import * as yup from "yup";

// This defines the user schema and the necessary and required fields
// for the form
export const userSchema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
});
