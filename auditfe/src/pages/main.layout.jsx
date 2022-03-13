import { Outlet } from 'react-router-dom'
import { AuthProvider } from '../context/auth.context'
import { PeriodProvider } from '../context/period.context'
import { ModalProvider } from '../context/modal.context'
import Navbar from '../components/navbar.component'


function MainLayout() {
    return (
        <AuthProvider>
            <ModalProvider>
                <Navbar />
                <div className="relative">
                    <PeriodProvider>
                        <div className='relative scroll-smooth px-5 pt-2 pb-10'>
                            <Outlet />
                        </div>
                    </PeriodProvider>
                </div>
            </ModalProvider>
        </AuthProvider>
    )
}

export default MainLayout