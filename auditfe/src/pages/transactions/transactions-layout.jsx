import { Outlet } from 'react-router-dom'

function TransactionsLayout() {
    return (
        <>
            <h1 className="page-title pb-2"> 💸Transactions</h1>
            <hr/>
            <Outlet />
        </>
    )
}

export default TransactionsLayout