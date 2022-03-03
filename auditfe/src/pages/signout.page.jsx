import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { signOut } from "../redux/user.slice"
import LoadingPage from "./loading.page"
import { useEffect } from "react";

function SignOut() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(signOut())
        navigate("/signin", { replace: true })
    }, [dispatch, navigate])

    return (
        <LoadingPage />
    )

}

export default SignOut