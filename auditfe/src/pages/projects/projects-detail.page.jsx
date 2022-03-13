import { useState, useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"

import { VscIssueReopened } from "react-icons/vsc"
import { MdPrint, MdOutlineAddCircleOutline } from "react-icons/md"
import { IoMdDoneAll } from "react-icons/io"
import { useApi } from "../../context/auth.context"
import EditableInput from "../../components/editable-input.component"
import LoadingPage from "../loading.page"
import AddPainting from "../../components/modals/add-painting.modal"
import { toast } from "react-toastify"
import { toastConfig } from "../../configs/toast-config"
import { useModal } from "../../context/modal.context"

function ProjectDetailPage() {
    const django = useApi()

    const navigate = useNavigate()
    const { projectId } = useParams();
    const [project, setProject] = useState(null)
    const [changeData, setChangeData] = useState({})
    const [currencyArr, setCurrencyArr] = useState([])
    const modal = useModal()

    useEffect(() => {
        django.getProjectById(projectId).then(response => {
            if (response.status === django.SUCCESS) {
                setProject(response.data)
            } else {
                navigate("/not-found", { replace: false })
            }
        })

    }, [projectId, navigate])

    useEffect(() => {
        django.listCurrencies().then(response => {
            if (response.status === django.SUCCESS) {

            } else {

            }
        })
    }, [])

    const handleEditComplete = (value, property) => {
        const formdata = {}
        formdata[`${property}`] = value
        django.updateProject(projectId, formdata).then(response => {
            if (response.status === django.SUCCESS) {
                toast(`${property} updated`, toastConfig)
            } else {
                toast(`${property} NOT updated`, toastConfig)
            }
        })
    }

    const handlePaintingEditComplete = (id, value, property) => {
        const formdata = {}
        formdata[`${property}`] = value
        django.updatePainting(id, formdata).then(response => {
            if (response.status === django.SUCCESS) {
                toast(`${property} updated`, toastConfig)
            } else {
                toast(`${property} NOT updated`, toastConfig)
            }
        })
    }

    const handleAddPainting = () => {
        modal.show(<AddPainting />)
    }

    const handleMarkComplete = () => {
        django.updateProject(projectId, { in_progress: true }).then(response => {
            if (response.status === django.SUCCESS) {
                toast("Project Completed!", toastConfig)
            } else {
                toast("Project not completed!", toastConfig)
            }
        })
    }

    const handleReopen = () => {
        django.updateProject(projectId, { in_progress: false }).then(response => {
            if (response.status === django.SUCCESS) {
                toast("Project Reopened!", toastConfig)
            } else {
                toast("Project not reopened!", toastConfig)
            }
        })
    }

    const handleInvoiceDownload = () => {
        django.downloadInvoice(projectId).then(response => {
            if (response.status === django.FAILURE) {
                toast("Error occured while trying to download invoice!", toastConfig)
            }
        })
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
                        {/* <EditableOptions>
                            {currencyArr.map(currency => (
                                <option key={currency}>{currency}</option>
                            ))}
                        </EditableOptions> */}
                        <span className="font-bold text-2xl">{project.fee_currency} </span>
                        <EditableInput
                            className="font-bold text-2xl"
                            defaultText={project.fee}
                            type="number"
                            onEditComplete={(value) => handleEditComplete(value, "fee")} />
                        <p className="text-sm text-right text-colorBlack">deadline: {project.start_date}</p>
                    </div>

                    {/* BUTTONS */}
                    <div className="flex flex-row gap-2 justify-end flex-wrap">
                        {project.in_progress ? (
                            <button className="bg-colorGreen text-white button-icon" onClick={handleMarkComplete}>
                                <IoMdDoneAll />
                                Mark Complete
                            </button>
                        ) : (
                            <button className="bg-colorGreen text-white button-icon" onClick={handleReopen}>
                                <VscIssueReopened />
                                Reopen
                            </button>
                        )}

                        <button className="bg-colorSecondaryVariant text-white button-icon" onClick={handleInvoiceDownload}>
                            <MdPrint />
                            Generate invoice
                        </button>
                    </div>


                    {/* PAINTINGS */}
                    <div>
                        <h2 className="font-semibold text-lg text-colorPrimary/50">Paintings</h2>
                        <div>
                            {project.paintings.map(painting => (
                                <div key={painting.id} className="flex flex-row justify-between">
                                    <EditableInput
                                        defaultText={painting.name}
                                        type="text"
                                        onEditComplete={(value) => handlePaintingEditComplete(painting.id, value, "name")} />

                                    <EditableInput
                                        defaultText={Number.parseInt(painting.price)}
                                        type="number"
                                        onEditComplete={(value) => handlePaintingEditComplete(painting.id, value, "price")} />
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={handleAddPainting}
                            className="button-icon rounded-full my-5 justify-center bg-colorPrimaryVariant text-colorPrimary">

                            <MdOutlineAddCircleOutline />
                            <span>Add Painting</span>
                        </button>
                    </div>

                </div>
                : <LoadingPage />
            }
        </div>
    )

}

export default ProjectDetailPage