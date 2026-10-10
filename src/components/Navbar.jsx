import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const LinkClass = ({ isActive }) => {
        isActive
        ? ""
        : "";
    }

    return(
        <nav className='flex justify-between mx-auto px-10 py-3 bg-indigo-100'>
            <NavLink 
                className={LinkClass}
                to="/">
                <h1> Logo </h1>
            </NavLink>

            <ul className="flex gap-5">
                <NavLink 
                    className={LinkClass}
                    to="/">
                    <li>Home</li>
                </NavLink>

                <NavLink 
                    className={LinkClass}
                    to="/projects">
                    <li>Projects</li>
                </NavLink>

                <NavLink 
                    className={LinkClass}
                    to="/about">
                    <li>About</li>
                </NavLink>

                <NavLink 
                    className={LinkClass}
                    to="/contact">
                    <li>Contact</li>
                </NavLink>
            </ul>

            <NavLink
                to="/">
                <button>Hi</button>
            </NavLink>
        </nav>
    )
}