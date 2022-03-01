import { Outlet } from 'react-router-dom'
import { AuthProvider } from '../context/auth/auth.context'

function MainLayout() {
    return (
        <AuthProvider>
            <div className='relative scroll-smooth'>
                <Outlet />
            </div>
        </AuthProvider>
    )
}

export default MainLayout