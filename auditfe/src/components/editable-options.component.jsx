import { useState } from "react"
import { MdEdit, MdCancel } from "react-icons/md"


function EditableOptions({ defaultOption, children }) {

    return (
        <select
            className="border w-full rounded p-2 focus:border-colorPrimary focus:ring-colorPrimary focus:ring-2">
            {children}
        </select>
    )

}

export default EditableOptions