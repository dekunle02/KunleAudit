import { Formik } from "formik";
import { signInSchema } from "../configs/validation-schemas";
import { toastConfig } from "../configs/toast-config";
import { toast } from "react-toastify";
import { FormInput } from "../components/form-input.component"
import { ReactComponent as Logo } from '../assets/logo.svg';

import getAuth from '../api/auth'

function SignInPage() {

    const handleSubmit = (values) => {
        const auth = getAuth()
        const toastId = toast.loading("Signing In..", toastConfig);
        auth.signIn(values).then(response => {
            if (response.status === auth.SUCCESS) {
                toast.update(toastId, {
                    render: "Log in successful!",
                    type: "success",
                    isLoading: false,
                });
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
        <div className="w-screen h-screen">
            <div className="w-full min-h-min m-10 px-5 pb-20 md:shadow-2xl md:w-3/4 md:mx-auto lg:w-1/2 rounded">
                <Logo className="h-20 mb-24" />
                <h2 className="font-semibold text-4xl text-colorPrimary">Sign In</h2>
                <div className="my-10">
                    <Formik
                        initialValues={{
                            username: "",
                            password: ""
                        }}
                        validationSchema={signInSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ values, touched, errors, handleChange, handleSubmit }) => (
                            <form className="gap-y-5 flex flex-col" onSubmit={handleSubmit}>

                                <FormInput
                                    id="username"
                                    type="text"
                                    label="Username"
                                    showError={errors.username && touched.username}
                                    errorMessage={errors.username}
                                    hasErrorIcon
                                    placeholder="Enter your username"
                                    onChange={handleChange}
                                    value={values.username}
                                />

                                <FormInput
                                    id="password"
                                    type="password"
                                    label="Password"
                                    showError={errors.password && touched.password}
                                    errorMessage={errors.password}
                                    placeholder="**********"
                                    onChange={handleChange}
                                    value={values.password}
                                />

                                <br />

                                <button
                                    type="submit"
                                    className="button-primary py-1 w-3/4 mx-auto">
                                    CONTINUE ＞
                                </button>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}
export default SignInPage