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
            <footer className='flex flex-col min-h-[313px] items-center justify-center gap-[25px] md:gap-[50px]'>

                <NavLink
                    to='/'>
                    <svg className="icon | w-[168px] h-[36px] md:w-[406px] md:h-[66px] ">
                        <use xlinkHref="src/assets/img/logo.svg#logo"></use>
                    </svg>
                </NavLink>

                <ul className="flex gap-[10px] md:gap-[55px] max-md:flex-col max-md:items-center justify-center">
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

                <div className='flex gap-[10px] md:gap-[15px]'>
                    <NavLink
                        to='/'>
                        <svg className="icon | h-[13.33px] md:h-[20px] w-[13.33px] md:w-[20px]">
                        <use xlinkHref="src/assets/img/social-icons.svg#Vector-1"></use>
                        </svg>
                    </NavLink>

                    <NavLink
                        to='/'>
                        <svg className="icon | h-[13.33px] md:h-[20px] w-[13.33px] md:w-[20px]">
                        <use xlinkHref="src/assets/img/social-icons.svg#Vector-2"></use>
                        </svg>
                    </NavLink>

                    <NavLink
                        to='/'>
                        <svg className="icon | h-[13.33px] md:h-[20px] w-[13.33px] md:w-[20px]">
                        <use xlinkHref="src/assets/img/social-icons.svg#Vector-3"></use>
                        </svg>
                    </NavLink>

                    <NavLink
                        to='/'>
                        <svg className="icon | h-[13.33px] md:h-[20px] w-[13.33px] md:w-[20px]">
                        <use xlinkHref="src/assets/img/social-icons.svg#Vector-4"></use>
                        </svg>
                    </NavLink>

                    <NavLink
                        to='/'>
                        <svg className="icon | h-[13.33px] md:h-[20px] w-[13.33px] md:w-[20px]">
                        <use xlinkHref="src/assets/img/social-icons.svg#Vector"></use>
                        </svg>
                    </NavLink>
                </div>

            </footer>
            <FooterCopyright />
        </>
    )
}