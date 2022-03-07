import { Outlet } from 'react-router-dom'
import { AuthProvider } from '../context/auth.context'
import { PeriodProvider } from '../context/period.context'
import Navbar from '../components/navbar.component'


function MainLayout() {
    return (
        <AuthProvider>
            <Navbar />
            <div className="relative">
                <PeriodProvider>
                    <div className='relative scroll-smooth px-5 pt-2 pb-10'>
                        <Outlet />
                    </div>
                </PeriodProvider>
            </div>

        </AuthProvider>
    )
}

export default MainLayout