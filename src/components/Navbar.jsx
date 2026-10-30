import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const LinkClass = ({ isActive }) => {
        isActive
        ? ""
        : "";
    }

    function menuButton() {
        const menuList = document.getElementById('menu-list');
        const burgerIcon = document.getElementById('burger-icon');
        const closeIcon = document.getElementById('close-icon');

        menuList.classList.toggle('open')
        burgerIcon.classList.toggle('hidden')
        closeIcon.classList.toggle('hidden')
    }

    return(
        <nav className='flex pl-[22px] pr-[30px] md:px-[65px] pbs-[28px] pbe-[14px] md:py-[30px] justify-between w-full'>
            <NavLink 
                className={LinkClass}
                to="/"> 
                <svg className="icon | w-[95px] md:w-[207px] h-[15px] md:h-[30px] mbs-[1px] mbe-[-11px] md:py-[5px] ">
                    <use 
                        xlinkHref="/img/logo.svg#logo"
                        className='w-[95px] md:w-[207px] h-[15px] md:h-[30px]'></use>
                </svg>
            </NavLink>

            <ul id='menu-list' className="flex mr-[73px] ">
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
                <button className=" border border-black rounded-[100vw] px-[40px] py-[10.25px] bg-accent-800 hover:bg-accent-900 hover:text-primary-50">Button</button>
            </NavLink>

            <div className='md:hidden'>
                <svg onClick={menuButton} className="icon | hidden w-[21px] h-[22px] " id='close-icon'>
                    <use xlinkHref="/img/menu-icons.svg#close-icon"></use>
                </svg>
                <svg onClick={menuButton} className="icon | w-[21px] h-[22px] " id='burger-icon'>
                    <use xlinkHref="/img/menu-icons.svg#burger-icon"></use>
                </svg>
            </div>
        </nav>
    )
}

