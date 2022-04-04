import { Link } from 'react-router-dom'

function ClientCard({ client }) {

    return (
        <Link to={`/clients/${client.id}`} className="card h-22 w-full px-5 hover:bg-colorPrimaryVariant/50">
            <div className="grid grid-cols-2 grid-rows-2 w-full mr-2">
                <h3>{client.name}</h3>
                <h5 className="text-sm text-right">{client.is_company}</h5>
                <h5 className="text-sm font-semibold text-colorBlack/50">Rep: {client.representative}</h5>
                <h6 className="text-sm text-colorBlack/50 text-right">Vendor number:{client.vendor_number}</h6>
            </div>
        </Link>
    )
}

export default ClientCard
