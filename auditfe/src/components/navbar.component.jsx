import { useState } from 'react'

import { Link, NavLink } from "react-router-dom";

import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";

import { ReactComponent as Logo } from '../assets/logo.svg';
import navItems from '../configs/navbar-items'


function Navbar() {
    const [isCollapsed, setCollapse] = useState(true)
    const toggleCollapse = () => setCollapse(!isCollapsed)


    return (
        <nav className="sticky top-0 z-20 shadow-lg px-5 bg-colorWhite">
            <div className="h-16 flex flex-row justify-between items-center">
                <Link to="/" >
                    <Logo className="h-8" />
                </Link>

                <div className="hidden md:flex flex-row gap-x-5 text-xl font-thin" >
                    {navItems.map(item => (
                        <NavLink
                            key={item.id}
                            to={item.link}
                            className={({ isActive }) => isActive ? "font-semibold" : "hover:font-semibold"}
                        >
                            {item.text}
                        </NavLink>
                    ))}
                </div>
                
                <div className="md:hidden">
                    {
                        isCollapsed ?
                            <HiMenuAlt3 className="w-6 h-6 text-colorPrimary" onClick={toggleCollapse} /> :
                            <MdClose className="w-6 h-6 text-colorPrimary" onClick={toggleCollapse} />
                    }
                </div>

                

            </div>
            {isCollapsed === false && (
                <div className="h-[calc(100vh_-_64px)] flex flex-col gap-5 text-xl font-thin" >
                    {navItems.map(item => (
                        <NavLink
                            key={item.id}
                            to={item.link}
                            className={({ isActive }) => isActive ? "font-semibold" : "hover:font-semibold"}
                            onClick={toggleCollapse}
                        >
                            {item.text}
                        </NavLink>
                    ))}
                </div>
            )}
        </nav>
    )
}

export default Navbar