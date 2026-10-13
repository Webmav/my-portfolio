import { NavLink } from 'react-router-dom';

export default function Hero() {
    return(
        <div className="flex max-md:flex-col max-md:justify-between grow-[0] py-[50px] px-[21px] md:px-[150px] items-center md:gap-[158px] ">
                <img className='md:hidden w-[150px] h-[150px] md:hidden' src="src/assets/img/hero-photo.png" alt="" />

                <div className='flex max-md:gap-[10px] md:gap-[15px] max-md:mbs-[12.5px] md:hidden'>
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

                <h1 className="fs-hero md:text-[var(--fs-md-hero)] max-md:text-center md:text-start max-md:mbs-[26.5px] md:hidden">Hi, I am Munawar Ali</h1>
 
                <p className="fs-hero md:text-[var(--fs-md-hero)] max-md:text-center md:text-start mbs-[15px] md:mbs-[43px] md:hidden">I am a student at Farook College, Calicut.</p>
  
                <p className="fs-hero md:text-[var(--fs-md-hero)] w-[360px] md:w-[657px] max-md:text-center md:text-start mbs-[20px] md:mbs-[69px] md:hidden">I design websites, make websites, and give web related services.
                    I have experiences in css, javascript, and some other related subjects.</p>


            <div className='max-md:hidden'>
                <img className='md:hidden w-[150px] h-[150px]' src="src/assets/img/hero-photo.png" alt="" />

                <div className='flex max-md:gap-[10px] md:gap-[15px] max-md:mbs-[12.5px] md:hidden'>
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

                <h1 className="fs-hero md:text-[var(--fs-md-hero)] max-md:text-center md:text-start max-md:mbs-[26.5px] ">Hi, I am Munawar Ali</h1>
 
                <p className="fs-hero md:text-[var(--fs-md-hero)] max-md:text-center md:text-start mbs-[15px] md:mbs-[43px]">I am a student at Farook College, Calicut.</p>
  
                <p className="fs-hero md:text-[var(--fs-md-hero)] w-[360px] md:w-[657px] max-md:text-center md:text-start mbs-[20px] md:mbs-[69px]">I design websites, make websites, and give web related services.
                    I have experiences in css, javascript, and some other related subjects.</p>
            </div>


            <div className='flex flex-col items-center gap-[45px] max-md:hidden'>
                <img className='max-md:hidden w-[325px] h-[325px]' src="src/assets/img/md-hero-photo.png" alt="" />

                <div className='flex gap-[10px] md:gap-[15px] max-md:mbs-[12.5px] max-md:hidden'>
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
            </div>

        </div>
    )
}