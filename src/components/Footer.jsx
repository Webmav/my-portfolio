import { NavLink } from 'react-router-dom';

import FooterCopyright from "./FooterCopyright";

export default function Footer() {
    const LinkClass = ({ isActive }) => {
        isActive
        ? ""
        : "";
    }

    return(
        <>
            <footer className='flex flex-col min-h-[313px] items-center justify-center gap-[25px]'>

                <NavLink
                    to='/'>
                    <svg className="icon">
                        <use xlinkHref="./src/assets/img/logo.svg#logo"></use>
                    </svg>
                </NavLink>

                <ul className="flex gap-5">
                    <NavLink 
                        to="/">
                        <li>Home</li>
                    </NavLink>

                    <NavLink 
                        to="/about">
                        <li>About</li>
                    </NavLink>

                    <NavLink 
                        to="/services">
                        <li>Services</li>
                    </NavLink>

                    <NavLink 
                        to="/projects">
                        <li>Projects</li>
                    </NavLink>

                    <NavLink 
                        to="/contact">
                        <li>Contact</li>
                    </NavLink>
                </ul>

                <img src="/#" alt="" />
                <img src="/#" alt="" />
                <img src="/#" alt="" />
                <img src="/#" alt="" />

            </footer>
            <FooterCopyright />
        </>
    )
}