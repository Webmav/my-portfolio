import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const LinkClass = ({ isActive }) => {
        isActive
        ? ""
        : "";
    }

    return(
        <nav className='flex px-[22px] md:px-[65px] py-[28px] md:py-[30px] justify-between'>
            <NavLink 
                className={LinkClass}
                to="/"> 
                <svg className="icon | w-[95px] md:w-[207px] h-[15px] md:h-[30px] mbs-[1px] mbe-[-11px] md:py-[5px] ">
                    <use 
                        xlinkHref="./src/assets/img/logo.svg#logo"
                        className='w-[95px] md:w-[207px] h-[15px] md:h-[30px]'></use>
                </svg>
            </NavLink>

            <ul className="flex">
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

            <NavLink
                to="/">
                <button className="mr-[73px] border border-black rounded-[100vw] px-[40px] py-[10.25px] bg-accent-800 hover:bg-accent-900 hover:text-primary-50">Button</button>
            </NavLink>
        </nav>
    )
}