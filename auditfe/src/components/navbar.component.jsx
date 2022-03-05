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
        <nav className="sticky top-0 z-20 shadow-md bg-colorWhite px-2">
            <div className="page-margins">
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
                        <Link to="/signout"
                            className="bg-colorRed text-colorWhite/80 hover:text-colorWhite rounded hover:drop-shadow-md  text-base font-normal px-2">Sign Out</Link>
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
                        <div>
                            <Link to="/signout"
                                className="bg-colorRed text-colorWhite/80 py-1 px-3 rounded hover:text-colorWhite  hover:drop-shadow-md text-base font-normal">
                                Sign Out
                            </Link>
                        </div>
                    </div>
                )}
            </div>

        </nav>
    )
}

export default Navbar