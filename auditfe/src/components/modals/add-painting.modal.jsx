import { useModal } from "../../context/modal.context"
import { MdClose } from "react-icons/md"
import { useApi } from "../../context/auth.context";
import { toastConfig } from "../../configs/toast-config";
import { toast } from "react-toastify";
import { Formik } from "formik";
import { FormInput } from "../form-input.component";
import { addPaintingSchema } from "../../configs/validation-schemas";

function AddPainting(projectId) {
    const modal = useModal()
    const django = useApi()

    const handleSubmit = (values) => {
        const toastId = toast.loading("Adding..", toastConfig);
        django.addPainting(projectId, values).then(response => {
            if (response.status === django.SUCCESS) {
                toast.update(toastId, {
                    render: "Painting added successfully!",
                    type: "success",
                    isLoading: false,
                });
                modal.dismiss()
            } else {
                toast.update(toastId, {
                    render: `Something went wrong...`,
                    type: "error",
                    isLoading: false,
                });
            }
        })
    }

    return (
        <div className="bg-colorWhite p-5 rounded flex flex-col w-screen max-w-lg">
            <button onClick={modal.dismiss}
                className="hover:bg-colorPrimary/10 action:bg-colorPrimary/20 p-2 rounded-full ml-auto">
                <MdClose />
            </button>
            <h2 className="text-2xl text-center">Add a New Painting</h2>
            <br />
            <Formik
                initialValues={{
                    name: "",
                    price: ""
                }}
                validationSchema={addPaintingSchema}
                onSubmit={handleSubmit}
            >
                {({ values, touched, errors, handleChange, handleSubmit }) => (
                    <form className="flex flex-col" onSubmit={handleSubmit}>

                        <FormInput
                            id="name"
                            type="text"
                            label="Painting Name"
                            showError={errors.name && touched.name}
                            errorMessage={errors.name}
                            onChange={handleChange}
                            value={values.name}
                        />

                        <FormInput
                            id="price"
                            type="number"
                            label="Price"
                            showError={errors.price && touched.price}
                            errorMessage={errors.price}
                            placeholder="00.00"
                            onChange={handleChange}
                            value={values.price}
                        />

                        <br />

                        <button
                            type="submit"
                            className="button-primary py-1 w-3/4 mx-auto">
                            ADD ＞
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default AddPainting