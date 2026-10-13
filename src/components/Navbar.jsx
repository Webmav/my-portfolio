import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const LinkClass = ({ isActive }) => {
        isActive
        ? ""
        : "";
    }

    return(
        <nav className='flex justify-between mx-auto pl-[65px] py-[35px] bg-indigo-100'>
            <NavLink 
                className={LinkClass}
                to="/">
                <svg className="icon" height={'30px'} width={'210px'}>
                    <use xlinkHref="./src/assets/img/logo.svg#logo"></use>
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
                <button className='mbs-[-5px] mr-[138px] border border-black rounded-[100vw] hover:px-[20px] px-[40px] py-[10.25px] bg-accent-800 hover:bg-accent-400'>Button</button>
            </NavLink>
        </nav>
    )
}