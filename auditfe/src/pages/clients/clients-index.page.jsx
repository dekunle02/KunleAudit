import { useState, useEffect } from "react"
import { useApi } from "../../context/auth.context";
import { Link, useSearchParams } from "react-router-dom"

import { MdOutlineAddCircleOutline, MdSearch } from "react-icons/md"


function ClientsIndex() {
    const [clientArr, setClientArr] = useState([])
    const [searchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState("")
    const django = useApi()

    useEffect(() => {
        django.listClients().then(response => {
            if (response.status === django.SUCCESS) {
                setClientArr(response.data)
            }
        })
    }, [django])

    useEffect(() => {
        const searchedValue = searchParams.get("q")
        if (searchedValue) {
            setSearchQuery(searchedValue)
        }
    }, [searchParams])

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

        </div>
    )
}

export default ClientsIndex