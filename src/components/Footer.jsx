import { NavLink } from 'react-router-dom';

import FooterCopyright from "./FooterCopyright";

export default function Footer() {
    const LinkClass = ({ isActive }) => {
        isActive
        ? ""
        : "";
    }

    return(
        <footer>
            <h1>Munawar Ali</h1>

            <ul className="flex gap-5">
                <NavLink 
                    className={LinkClass}
                    to="/">
                    <li>Home</li>
                </NavLink>

                <NavLink 
                    className={LinkClass}
                    to="/about">
                    <li>About</li>
                </NavLink>

                <NavLink 
                    className={LinkClass}
                    to="/services">
                    <li>Services</li>
                </NavLink>

                <NavLink 
                    className={LinkClass}
                    to="/projects">
                    <li>Projects</li>
                </NavLink>

                <NavLink 
                    className={LinkClass}
                    to="/contact">
                    <li>Contact</li>
                </NavLink>
            </ul>

            <img src="/#" alt="" />
            <img src="/#" alt="" />
            <img src="/#" alt="" />
            <img src="/#" alt="" />

            <FooterCopyright />
        </footer>
    )
}