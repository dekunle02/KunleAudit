import { Outlet } from 'react-router-dom'
import { AuthProvider } from '../context/auth/auth.context'
import Navbar from '../components/navbar.component'


function MainLayout() {
    return (
        <AuthProvider>
            <Navbar />
            <div className='relative scroll-smooth'>
                <Outlet />
            </div>
        </AuthProvider>
    )
}

export default MainLayout