import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

import { toastConfig } from "../../configs/toast-config";
import { toast } from "react-toastify";
import Chart from 'react-apexcharts'

import { CgOpenCollective } from 'react-icons/cg'
import { MdOutlineDoneAll, MdOutlineAddCircleOutline } from 'react-icons/md'

import { groupBy } from "../../configs/utils";
import getDjango from "../../api/django"
import ProjectCard from "../../components/projects/project-card.component"
import { FormInput } from "../../components/form-input.component";


function ProjectsIndex() {
    const token = useSelector(state => state.user.token)
    const [projectArr, setProjectArr] = useState([])
    const [searchParams, setSearchParams] = useState("")

    useEffect(() => {
        const django = getDjango(token)
        django.listProjects().then(response => {
            if (response.status === django.SUCCESS) {
                setProjectArr(response.data)
            } else {
                console.log("Error=>", response.data)
                toast.error("Unable to get Project", toastConfig)
            }
        })
    }, [token])

    const makeTypeChartArrs = () => {
        // function converts object like {type1: [{obj},...],...},
        // to {types:[type1,type2,...], count:[int, int, int]}
        const projectsGroupedByType = groupBy("type", projectArr)
        const types = []
        const values = []
        Object.entries(projectsGroupedByType).forEach(item => {
            const [key, valueArr] = item
            types.push(key)
            values.push(valueArr.length)
        })
        return { types: types, count: values }
    }

    const inProgressProjectArr = projectArr.filter(project => project.in_progress)

    const chartConfig = {
        options: {
            chart: {
                id: `donut-${Math.random()}` // should be a different one every re-render
            },
            plotOptions: {
                pie: {
                    donut: {
                        labels: {
                            show: true,
                            name: {
                                show: true,
                                fontSize: '14px',
                                fontWeight: 600,
                            },
                            value: {
                                show: true,
                                fontSize: '22px',
                                fontWeight: 400,
                            },
                            total: {
                                show: true,
                                showAlways: false,
                                label: 'Total',
                                fontSize: '14px',
                                fontWeight: 600,
                                color: '#373d3f',
                            }
                        }
                    }
                }
            },
            dataLabels: {
                enabled: false
            },

            colors: ['#00204E', '#CDE6FF', '#F26419', '#C5D86D'],

            legend: {
                markers: {
                    width: 15,
                    height: 15,
                    strokeWidth: 0,
                    radius: 0,
                },
            },
            labels: makeTypeChartArrs().types
        },
        series: makeTypeChartArrs().count
    }


    const handleSearchQueryChange = event => {
        setSearchParams(event.target.value)
        console.log(event.target.value)
    }

    return (
        <div className="flex flex-col my-2 page-margins">
            <h1 className="text-colorPrimary/50 font-semibold text-xl mb-5">Summary</h1>

            <div className="flex flex-row flex-wrap gap-2">
                <div className="card p-4 w-40 bg-colorSecondaryVariant text-colorWhite">
                    <CgOpenCollective className="h-5 w-5" />
                    <br />
                    <br />
                    <h2 className="text-4xl font-bold">{inProgressProjectArr.length}</h2>
                    <br />
                    <h6>In progress</h6>
                    <h6>Projects</h6>
                </div>
                <div className="card p-4 w-40 bg-colorSecondary text-colorBlack">
                    <MdOutlineDoneAll className="h-5 w-5" />
                    <br />
                    <br />
                    <h2 className="text-4xl font-bold">{projectArr.length - inProgressProjectArr.length}</h2>
                    <br />
                    <h6>Completed</h6>
                    <h6>Projects</h6>
                </div>

                <div className="card p-4">
                    <Chart options={chartConfig.options} series={chartConfig.series} type="donut" />
                    <br />
                    <h6 className="text-colorPrimary font-semibold">Project categories</h6>
                </div>

            </div>

            <div className="flex flex-row justify-between items-center  my-5 flex-wrap  ">
                <h1 className="text-colorPrimary/50 font-semibold text-xl flex-grow">All Projects</h1>
                <div className="w-1/2 mx-2">
                    <FormInput
                        id="search-projects"
                        type="search"
                        value={searchParams}
                        onChange={handleSearchQueryChange}
                        placeholder="search projects.."
                    />
                </div>
                <Link to="new" className="button-primary flex flex-row items-center rounded-full p-2 px-3 gap-x-2">
                    <MdOutlineAddCircleOutline className="inline text-lg" />
                    <span>Create</span>
                </Link>
            </div>


            <div className="flex flex-col gap-y-2 max-h-[40rem] overflow-auto px-2">
                {projectArr.map(project => <ProjectCard key={project.id} project={project} />)}
            </div>

        </div>
    )

}

export default ProjectsIndex