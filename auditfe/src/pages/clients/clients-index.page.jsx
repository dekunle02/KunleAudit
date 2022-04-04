import { useState, useEffect } from "react"
import { useApi } from "../../context/auth.context";
import { Link, useSearchParams } from "react-router-dom"
import ClientCard from "../../components/projects/client-card.component";
import { MdOutlineAddCircleOutline, MdSearch } from "react-icons/md"


function ClientsIndex() {
    const [fullClientArr, setFullClientArr] = useState([])
    const [clientArr, setClientArr] = useState([])
    const [searchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState("")
    const django = useApi()

    useEffect(() => {
        django.listClients().then(response => {
            if (response.status === django.SUCCESS) {
                setFullClientArr(response.data)
            }
        })
    }, [django])

    useEffect(() => {
        const searchedValue = searchParams.get("q")
        if (searchedValue && searchedValue !== "") {
            setSearchQuery(searchedValue)
            const filteredClients = fullClientArr.filter(client => client.name.toLowerCase().includes(searchedValue.toLowerCase()))
            setClientArr(filteredClients)
        } else {
            setClientArr(fullClientArr)
        }

    }, [fullClientArr, searchParams])

    const handleSearchChange = event => {
        setSearchQuery(event.target.value)
    }

    return (
        <div>
            <div className="flex flex-row flex-wrap gap-4 my-2">
                <form className="relative flex-grow">
                    <label htmlFor="client-search" className="absolute top-1/2 -translate-y-1/2 left-2">
                        <MdSearch className="text-2xl" />
                    </label>
                    <input
                        id="client-search"
                        type="text"
                        name="q"
                        placeholder="Search by client name"
                        className="focus:border-colorPrimary focus:ring-colorPrimary focus:ring-2 pl-8 w-full"
                        value={searchQuery}
                        onChange={handleSearchChange} />
                </form>
                <Link to="new" className="button-icon rounded-full bg-colorSecondary text-colorPrimary">
                    <MdOutlineAddCircleOutline className="inline text-lg" />
                    <span>Add New Client</span>
                </Link>
            </div>
            {fullClientArr.length < 1 && (
                <h3 className="text-center text-xl text-colorPrimary/30 font-semibold">.....</h3>
            )}
            {fullClientArr.length > 1 && clientArr.length < 1 && (
                <h3 className="text-center text-xl text-colorPrimary/30 font-semibold">No Client matches query..</h3>
            )}

            {clientArr.map(client => (
                <div key={client.id}>
                    <ClientCard client={client} />
                </div>
            ))}

        </div>
    )
}

export default ClientsIndex