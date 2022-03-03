import { Outlet } from 'react-router-dom'
import { AuthProvider } from '../context/auth/auth.context'
import Navbar from '../components/navbar.component'


function MainLayout() {
    return (
        <AuthProvider>
            <Navbar />
            <div className='relative scroll-smooth px-5 pt-2 pb-10'>
                <Outlet />
            </div>
        </AuthProvider>
    )
}

export default MainLayout