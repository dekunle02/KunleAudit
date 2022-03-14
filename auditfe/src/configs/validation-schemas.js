import * as Yup from "yup";

export const signInSchema = Yup.object().shape({
  username: Yup.string().required("Username is required!"),
  password: Yup.string().required('Password is required')
});

export const addProjectSchema = Yup.object().shape({
  title: Yup.string().required("Project must have a title"),
  client: Yup.string().required("Please select a client"),
  start_date: Yup.date().required("Please set a start date"),
  fee: Yup.number().required("Please set a fee for this project"),
  currency: Yup.string().required("A currency is needed")
})

export const addPaintingSchema = Yup.object().shape({
  name: Yup.string().required("Painting must have a name"),
  price: Yup.number().required("Painting must have a price"),
})