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
                        <use xlinkHref="/img/logo.svg#logo"></use>
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
                    <NavLink to="https://github.com/Webmav">
                        <svg className="icon | h-[13.33px] md:h-[30px] w-[13.33px] md:w-[30px] hover:bg-blue-800 rounded">
                        <use xlinkHref="/img/social-icon-s.svg#github-svgrepo-com"></use>
                        </svg>
                    </NavLink>

                    <NavLink to="https://mail.google.com/mail/u/0/#inbox">
                        <svg className="icon | h-[13.33px] md:h-[30px] w-[13.33px] md:w-[30px] hover:bg-blue-800 rounded">
                        <use xlinkHref="/img/social-icon-s.svg#gmail-svgrepo-com"></use>
                        </svg>
                    </NavLink>

                    <NavLink to="https://wa.me//971583070144?text=Hi, I'd like to work with you!">
                        <svg className="icon | h-[13.33px] md:h-[30px] w-[13.33px] md:w-[30px] hover:bg-blue-800 rounded">
                        <use xlinkHref="/img/social-icon-s.svg#whatsapp-svgrepo-com"></use>
                        </svg>
                    </NavLink>

                    <NavLink to="https://www.linkedin.com/in/munawaraliv">
                        <svg className="icon | h-[13.33px] md:h-[30px] w-[13.33px] md:w-[30px] hover:bg-blue-800 rounded">
                            <use xlinkHref="/img/social-icon-s.svg#linkedin-svgrepo-com"></use>
                        </svg>
                    </NavLink>
                </div>

            </footer>
            <FooterCopyright />
        </>
    )
}