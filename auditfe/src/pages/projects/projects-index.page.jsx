import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { Link, useSearchParams } from "react-router-dom";

import { toastConfig } from "../../configs/toast-config";
import { toast } from "react-toastify";
import Chart from 'react-apexcharts'

import { usePeriod } from "../../context/period.context"
import { CgOpenCollective } from 'react-icons/cg'
import { BsStars } from "react-icons/bs"
import { MdOutlineDoneAll, MdOutlineAddCircleOutline, MdSearch } from 'react-icons/md'
import { useApi } from "../../context/auth.context";

import { groupBy } from "../../configs/utils";
import ProjectCard from "../../components/projects/project-card.component"
import { FormInput } from "../../components/form-input.component";


function ProjectsIndex() {
    const period = usePeriod()
    const [projectArr, setProjectArr] = useState([])
    const [searchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState("")
    const [totalProjectCount, setTotalProjectCount] = useState(0)
    const django = useApi()

    useEffect(() => {
        django.listProjects(period).then(response => {
            if (response.status === django.SUCCESS) {
                setProjectArr(response.data)
            }
        })
    }, [django, period])

    useEffect(() => {
        django.getAllTimeProjectCount().then(response => {
            if (response.status === django.SUCCESS) {
                setTotalProjectCount(response.data)
            } else {
                toast.error("Unable to get Projects", toastConfig)
            }
        })
    })

    useEffect(() => {
        const searchedValue = searchParams.get("q")
        if (searchedValue) {
            setSearchQuery(searchedValue)
        }
    }, [searchParams])


    const makeTreeChartArr = () => {
        // converts object like {type1: [{obj},...]...} into 
        // [{x: type1, y: count}....]
        const projectsGroupedByType = groupBy("type", projectArr)
        const treeArr = []
        for (const [key, value] of Object.entries(projectsGroupedByType)) {
            treeArr.push({ x: key, y: value.length })
        }
        return treeArr
    }


    const inProgressProjectArr = projectArr.filter(project => project.in_progress)

    const chartConfig = {
        options: {
            chart: {
                id: `donut-${Math.random()}`, // should be a different one every re-render
                type: "treemap",
                height: 350,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                treemap: {
                    distributed: true
                }
            },
            dataLabels: {
                enabled: false
            },
        },
        series: [{ data: makeTreeChartArr() }]
    }

    const handleSearchChange = event => {
        setSearchQuery(event.target.value)
    }

    return (
        <div className="flex flex-col my-2 page-margins">

            <h1 className="text-colorPrimary/50 font-semibold text-xl mb-5">Summary</h1>

            <div className="flex flex-row flex-wrap gap-3">
                <div className="card p-4 w-40  h-72 bg-colorSecondaryVariant text-colorWhite flex flex-col">
                    <CgOpenCollective className="h-5 w-5" />
                    <h2 className="text-6xl font-bold flex-grow my-16">{inProgressProjectArr.length}</h2>
                    <h6>In progress</h6>
                </div>
                <div className="card p-4 w-40 h-72 bg-colorSecondary text-colorBlack flex flex-col">
                    <MdOutlineDoneAll className="h-5 w-5" />
                    <h2 className="text-6xl font-bold flex-grow my-16">{projectArr.length - inProgressProjectArr.length}</h2>
                    <h6>Completed Projects</h6>
                </div>

                <div className="card p-4 w-full md:w-40 h-72 bg-colorGreen text-colorWhite flex flex-col">
                    <BsStars className="h-5 w-5" />
                    <h2 className="text-7xl md:text-6xl  font-bold flex-grow my-16 mx-auto md:mx-0 ">{totalProjectCount}</h2>
                    <h6>All time Projects</h6>
                </div>

                <div className="card">
                    <h6 className="text-colorPrimary font-semibold">Project categories</h6>
                    <Chart options={chartConfig.options} series={chartConfig.series} type="treemap" height="220" width="320" />
                </div>

            </div>

            <div className="flex flex-row flex-wrap gap-4 mt-10">
                <h1 className="text-colorPrimary/50 font-semibold text-2xl">All Projects</h1>
                <form className="relative flex-grow">
                    <label htmlFor="client-search" className="absolute top-1/2 -translate-y-1/2 left-2">
                        <MdSearch className="text-2xl" />
                    </label>
                    <input
                        id="client-search"
                        type="text"
                        name="q"
                        placeholder="Search by Project name"
                        className="focus:border-colorPrimary focus:ring-colorPrimary focus:ring-2 pl-8 w-full"
                        value={searchQuery}
                        onChange={handleSearchChange} />
                </form>
                <Link to="new" className="button-icon rounded-full bg-colorSecondary text-colorPrimary">
                    <MdOutlineAddCircleOutline className="inline text-lg" />
                    <span>New Project</span>
                </Link>
            </div>


            <div className="flex flex-col gap-y-2 max-h-[40rem] overflow-auto p-2">
                {projectArr.map(project => <ProjectCard key={project.id} project={project} />)}
            </div>

        </div >
    )

}

export default ProjectsIndex