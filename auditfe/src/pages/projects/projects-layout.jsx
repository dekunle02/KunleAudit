import { Outlet } from 'react-router-dom'

function ProjectsLayout() {

    return (
        <>
            <h1 className="page-title page-margins mb-2"> 💼 Projects </h1>
            <hr/>
            <Outlet />
        </>
    )

}

export default ProjectsLayout