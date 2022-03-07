import { Link } from 'react-router-dom'

function ProjectCard({ project }) {
    return (
        <div className="card drop-shadow-md h-28">
            <div className={`${project.in_progress ? "bg-colorSecondaryVariant" : "bg-colorSecondary"} rounded w-3 h-3 m-2`}></div>
            <div className="grid grid-cols-2 grid-rows-2 w-full mr-2">
                <Link to={`/projects/${project.id}`} className="font-light hover:font-medium" >{project.title}</Link>
                <h5 className="text-sm text-right">{project.type}</h5>
                <Link to={`/clients/${project.client.id}`} className="text-sm font-semibold hover:underline text-colorBlack/50">{project.client.name}</Link>
                <h6 className="text-sm text-colorBlack/50 text-right">{project.start_date}</h6>
            </div>
        </div>
    )
}
export default ProjectCard