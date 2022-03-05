import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams, useNavigate, Link } from "react-router-dom"

import { VscIssueReopened } from "react-icons/vsc"
import { MdPrint, MdOutlineAddCircleOutline } from "react-icons/md"
import { FiMoreVertical } from "react-icons/fi"
import { IoMdDoneAll } from "react-icons/io"

import EditableInput from "../../components/editable-input.component"
import EditableOptions from "../../components/editable-options.component"
import LoadingPage from "../loading.page"
import getDjango from "../../api/django"


function ProjectDetailPage() {
    const token = useSelector(state => state.user.token)
    const navigate = useNavigate()
    const { projectId } = useParams();
    const [project, setProject] = useState(null)
    const [changeData, setChangeData] = useState({})
    const [currencyArr, setCurrencyArr] = useState([])


    useEffect(() => {
        const django = getDjango(token)
        django.getProjectById(projectId).then(response => {
            if (response.status === django.SUCCESS) {
                setProject(response.data)
            } else {
                navigate("/not-found", { replace: false })
            }
        })

    }, [projectId, token, navigate])

    useEffect(() => {
        const django = getDjango(token)
        django.listCurrencies().then(response => {
            if (response.status === django.SUCCESS) {

            } else {

            }
        })
    }, [])

    const handleEditComplete = (value, property) => {
        console.log("value", value)
        console.log("property", property)
    }



    return (
        <div className="page-margins my-2">
            {project ?
                <div className="flex flex-col gap-y-3">
                    {/* PROJECT INFO */}
                    <div className="bg-colorPrimary text-colorWhite p-5 rounded">
                        <EditableInput
                            className="font-bold text-xl"
                            defaultText={project.title}
                            type="text"
                            onEditComplete={(value) => handleEditComplete(value, "title")} />
                        <Link to={`/clients/${project.client.id}`} className="text-colorWhite/80 hover:text-colorWhite"> <h2>Client: {project.client.name}</h2></Link>
                        <br />
                        <br />
                        <p className="text-sm font-light text-right text-colorPrimaryVariant">start: {project.start_date}</p>
                    </div>

                    {/* FEE INFO */}
                    <div className="bg-colorSecondary p-5 text-colorPrimary rounded">
                        <h3>Fee</h3>
                        <EditableOptions>
                            {currencyArr.map(currency => (
                                <option key={currency}>{currency}</option>
                            ))}
                        </EditableOptions>
                        <span className="font-bold text-2xl">{project.fee_currency} </span>
                        <EditableInput
                            className="font-bold text-2xl"
                            defaultText={project.fee}
                            type="text"
                            onEditComplete={(value) => handleEditComplete(value, "title")} />
                        <p className="text-sm text-right text-colorBlack">deadline: {project.start_date}</p>
                    </div>

                    {/* BUTTONS */}
                    <div className="flex flex-row gap-2 justify-end flex-wrap">
                        {project.in_progress ? (
                            <button className="bg-colorGreen text-white button-icon">
                                <IoMdDoneAll />
                                Complete project
                            </button>
                        ) : (
                            <button className="bg-colorGreen text-white button-icon ">
                                <VscIssueReopened />
                                Reopen
                            </button>
                        )}

                        <button className="bg-colorSecondaryVariant text-white button-icon">
                            <MdPrint />
                            Generate invoice
                        </button>
                    </div>


                    {/* PAINTINGS */}
                    <h2 className="font-semibold text-lg text-colorPrimary/50">Paintings</h2>
                    <div>
                        {project.paintings.map(painting => (
                            <div key={painting.id} className="flex flex-row items-center">
                                <FiMoreVertical />
                                <span className="flex-grow">{painting.name}</span>
                                <span>{painting.price}</span>
                            </div>

                        ))}
                    </div>
                    <button className="button-icon rounded-full justify-center bg-colorSecondary text-colorPrimary w-1/2">
                        <MdOutlineAddCircleOutline />
                        Add Painting
                    </button>

                </div>
                : <LoadingPage />
            }
        </div>
    )

}

export default ProjectDetailPage