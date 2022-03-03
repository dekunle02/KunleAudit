import { Outlet } from 'react-router-dom'

function ClientsLayout() {
    return (
        <>
            <h1 className="page-title pb-2"> 👨🏾Clients </h1>
            <hr/>
            <Outlet />
        </>
    )
}

export default ClientsLayout