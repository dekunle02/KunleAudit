import { useState, useEffect } from "react";
import { useApi } from "../../context/auth.context";
import { toastConfig } from "../../configs/toast-config";
import { toast } from "react-toastify";
import { Formik } from "formik";
import { FormInput, FormSelectInput } from "../../components/form-input.component";
import { addProjectSchema } from "../../configs/validation-schemas";
import { useNavigate } from "react-router-dom";


function ProjectAdd() {
    const django = useApi()
    const navigate = useNavigate()
    const [clientArr, setClientArr] = useState([])
    const [currencyArr, setCurrencyArr] = useState([])

    useEffect(() => {
        django.listClients().then(response => {
            if (response.status === django.SUCCESS) {
                setClientArr(response.data)
            }
        })
    }, [django, setClientArr])

    useEffect(() => {
        django.listCurrencies().then(response => {
            if (response.status === django.SUCCESS) {
                setCurrencyArr(response.data)
            }
        })
    }, [django, setCurrencyArr])


    const handleSubmit = (values) => {
        const toastId = toast.loading("Adding..", toastConfig);
        django.addProject(values).then(response => {
            if (response.status === django.SUCCESS) {
                toast.update(toastId, {
                    render: "Project added successfully!",
                    type: "success",
                    isLoading: false,
                });
                const id = response.data.id
                navigate(`/projects/${id}`)
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
        <div className="flex flex-col md:w-3/4 mx-auto mt-2 md:rounded md:drop-shadow-lg md:bg-colorWhite md:p-10">
            <h2 className="text-2xl text-center">Add a New Project</h2>
            <br />
            <Formik
                initialValues={{
                    title: "",
                    client: "",
                    fee: "",
                    currency: "",
                    start_date: ""
                }}
                validationSchema={addProjectSchema}
                onSubmit={handleSubmit}
            >
                {({ values, touched, errors, handleChange, handleSubmit }) => (
                    <form className="flex flex-col" onSubmit={handleSubmit}>

                        <FormInput
                            id="title"
                            type="text"
                            label="Project Title"
                            showError={errors.title && touched.title}
                            errorMessage={errors.title}
                            onChange={handleChange}
                            value={values.title}
                        />

                        <FormSelectInput
                            id="client"
                            label="Client"
                            showError={errors.client && touched.client}
                            isRequired
                            errorMessage={errors.client}
                            onChange={handleChange}
                            value={values.client}>

                            <option value={"selected"}>Select the Client</option>
                            {
                                clientArr.map(client => (
                                    <option key={client.id} value={client.name}>{client.name}</option>
                                ))
                            }
                        </FormSelectInput>

                        <FormInput
                            id="start_date"
                            type="date"
                            label="Start Date"
                            showError={errors.start_date && touched.start_date}
                            errorMessage={errors.start_date}
                            onChange={handleChange}
                            value={values.start_date}
                        />

                        <FormSelectInput
                            id="currency"
                            label="Currency"
                            showError={errors.currency && touched.currency}
                            isRequired
                            errorMessage={errors.currency}
                            onChange={handleChange}
                            value={values.currency}>

                            <option value={"selected"}>Select the currency</option>
                            {
                                currencyArr.map((currency, index) => (
                                    <option key={index} value={currency}>{currency}</option>
                                ))
                            }
                        </FormSelectInput>

                        <FormInput
                            id="fee"
                            type="number"
                            label="Fee"
                            showError={errors.fee && touched.fee}
                            errorMessage={errors.fee}
                            onChange={handleChange}
                            value={values.fee}
                        />

                        <br />

                        <button
                            type="submit"
                            className="button-primary py-1 w-3/4 mx-auto">
                            ADD +
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default ProjectAdd