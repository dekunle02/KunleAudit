import * as Yup from "yup";

export const signInSchema = Yup.object().shape({
  username: Yup.string().required("Username is required!"),
  password: Yup.string().required('Password is required')
});

export const addPaintingSchema = Yup.object().shape({
  name: Yup.string().required("Painting must have a name"),
  price: Yup.number().required("Painting must have a price"),
})