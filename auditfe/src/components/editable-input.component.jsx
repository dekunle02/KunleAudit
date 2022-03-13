import { useState } from "react"
import { MdEdit, MdCancel } from "react-icons/md"
import { IoIosSave } from "react-icons/io"


/**
 * 
 * @param {onEditComplete} callback takes an argument for the new value and the property of the field 
 * property is used to identify the input later on
 */
function EditableInput({ onEditComplete, defaultText, type, className }) {
    const Modes = {
        READ: "read",
        WRITE: "write"
    }
    const [value, setValue] = useState(defaultText)
    const [mode, setMode] = useState(Modes.READ)

    const handleChange = event => {
        const value = event.target.value
        if (value && value !== "") {
            setValue(event.target.value)
        } else {
            toggleMode()
        }
    }

    const toggleMode = () => {
        if (mode === Modes.READ) {
            setMode(Modes.WRITE)
        } else {
            setMode(Modes.READ)
        }
    }

    const handleSubmit = () => {
        onEditComplete(value)
        toggleMode()
    }

    const handleCancel = () => {
        setValue(defaultText)
        toggleMode()
    }

    return (
        <div className=" rounded  inline-block">
            {mode === Modes.READ && (
                <span className={`relative cursor-pointer group ${className}`} onClick={toggleMode}>
                    {value}
                    <div
                        className="absolute z-10 inline-block -right-9 top-1/2 -translate-y-1/2 text-sm scale-0 group-hover:scale-100 transition-all duration-200 
                        bg-colorPrimaryVariant/40 hover:cursor-pointer hover:bg-colorPrimaryVariant/70 p-2 rounded-full">
                        <MdEdit />
                    </div>
                </span>
            )}

            {mode === Modes.WRITE && (
                <div className="flex flex-row gap-x-2 items-center" >
                    <div className="relative ">
                        <input
                            className={`rounded px-2 py-0 ${className} bg-colorWhite text-colorBlack`}
                            onChange={handleChange}
                            value={value}
                            type={type}
                            autoFocus
                        />
                        <div onClick={handleSubmit}
                            className="absolute z-10 inline-block top-8 right-0 text-lg
                             bg-colorGreen/50 hover:cursor-pointer hover:bg-colorGreen/80 hover:scale-105 p-2 rounded-full">
                            <IoIosSave />
                        </div>
                        <div onClick={handleCancel}
                            className="absolute z-10 inline-block top-8 right-10 text-lg
                             bg-colorRed/50 hover:cursor-pointer hover:bg-colorRed/80 hover:scale-105 p-2 rounded-full">
                            <MdCancel className="p" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )

}

export default EditableInput