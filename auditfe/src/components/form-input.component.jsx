import { useState } from 'react'
import { IoAlertCircleSharp } from 'react-icons/io5'
import { GrFormViewHide } from 'react-icons/gr'
import { GrFormView } from 'react-icons/gr'


function FormInput({ id, label, showError, errorMessage, hasErrorIcon, type, ...otherProps }) {
    const [isVisible, setVisibility] = useState(false)
    const initialType = type
    
    return (
        <div className="relative flex-grow">
            <label className="block mb-1 font-light text-sm"
                htmlFor={id}>{label}</label>
            {type === 'textarea' ?
                <textarea
                    className="border-gray-400 w-full rounded p-2 focus:border-colorPrimary focus:ring-colorPrimary h-40"
                    type={type}
                    id={id}
                    {...otherProps}
                />
                :
                (<input
                    className="border border-gray-400 w-full rounded p-2 focus:border-colorPrimary focus:ring-colorPrimary"
                    type={isVisible? "text": initialType}
                    id={id}
                    {...otherProps}
                />)
            }

            {showError &&
                (<div className="relative">
                    <p className="text-colorRed text-sm text-right mt-1 md:mt-2 ">{errorMessage}</p>
                    {hasErrorIcon && (<IoAlertCircleSharp className="text-colorRed absolute -top-8 md:-top-9 right-4"/>)}
                </div>)
            }
            {
                type === "password" ? (
                    <div className="text-lg absolute top-9 right-4 cursor-pointer" onClick={() => setVisibility(!isVisible)}>
                        {isVisible ? <GrFormViewHide /> : <GrFormView />}
                    </div>) : null
            }
        </div>
    )

}
function FormSelectInput({ id, label, showError, errorMessage, children, ...otherProps }) {
    return (
        <div>
            <label className="block mb-1 font-light text-sm" htmlFor="country">{label}</label>
            <select
                className="border border-gray-400 w-full rounded p-2 focus:border-colorPrimary focus:ring-colorPrimary"
                id={id}
                {...otherProps}
            >
                {children}
            </select>

            {showError &&
                (<p className="text-colorRed text-sm text-right mt-1 md:mt-2 ">{errorMessage}</p>)
            }

        </div>
    )
}

export { FormInput, FormSelectInput }