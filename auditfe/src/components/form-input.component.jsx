import { GrFormView } from "react-icons/gr";
import { GrFormViewHide } from "react-icons/gr";
import { IoAlertCircleSharp } from "react-icons/io5";
import { useState } from "react";

function FormInput({
    id,
    label,
    showError,
    errorMessage,
    isRequired,
    type,
    name,
    children,
    ...otherProps
}) {
    const [isVisible, setVisibility] = useState(false);
    const initialType = type;

    return (
        <div className="relative flex-grow flex flex-col">
            <label className={`form-label ${isRequired ? "after:content-['*'] after:text-colorRed" : ""}`} htmlFor={id}>
                {label}
            </label>

            {type === "textarea" ? (
                <textarea
                    className={`${showError ? "ring-2 ring-colorRed border border-colorRed" : "border"
                        } w-full rounded p-2 focus:border-colorPrimary focus:ring-colorPrimary focus:ring-2`}
                    type={type}
                    id={id}
                    {...otherProps}
                />
            ) : (
                <input
                    className={`${showError ? "ring-2 ring-colorRed border border-colorRed" : "border"
                        } w-full rounded p-2 focus:border-colorPrimary focus:ring-colorPrimary focus:ring-2`}
                    type={isVisible ? "text" : initialType}
                    id={id}
                    name={name}
                    {...otherProps}
                />
            )}

            <div className={`top-full flex flex-row items-center transition-all duration-100 scale-0 ${showError ? "scale-100 my-1 " : ""}`}>
                <IoAlertCircleSharp className="text-colorRed text-lg" />
                <p className="text-colorRed text-sm text-right">&nbsp;&nbsp;{errorMessage}</p>
            </div>

            {type === "password" ? (
                <div
                    className="text-lg absolute top-10 right-4 cursor-pointer"
                    onClick={() => setVisibility(!isVisible)} >
                    {isVisible ? <GrFormViewHide /> : <GrFormView />}
                </div>
            ) : null}
            {children}
        </div>
    );
}


function FormSelectInput({
    id,
    label,
    showError,
    errorMessage,
    children,
    isRequired,
    className,
    ...otherProps
}) {
    return (
        <div className="relative flex-grow flex flex-col">
            <label className={`form-label ${isRequired ? "after:content-['*'] after:text-colorRed" : ""}`} htmlFor={id}>{label}</label>
            <select
                className="border w-full rounded focus:border-colorPrimary focus:ring-colorPrimary focus:ring-2"
                id={id}
                {...otherProps}
            >
                {children}
            </select>

            <div className={`top-full flex flex-row items-center transition-all duration-100 scale-0 ${showError ? "scale-100 " : ""}`}>
                <IoAlertCircleSharp className="text-colorRed text-lg" />
                <p className="text-colorRed text-sm">&nbsp;&nbsp;{errorMessage}</p>
            </div>

        </div>
    );
}

export { FormInput, FormSelectInput };