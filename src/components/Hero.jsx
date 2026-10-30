import { NavLink } from 'react-router-dom';

export default function Hero() {
    return(
        <div 
            className="grid max-md:justify-items-center justify-items-center px-[21px] md:px-[150px] py-[25px] md:py-[50px]" 
            id='hero'
        >

            <h1
                id='hi'
                className='text-transparent'
            >
                hi
            </h1>

            <img 
                id='hero-photo' 
                className='md:hidden max-w-[150px] max-h-[150px] justify-content-center self-center' 
                src="/img/hero-photo.png" 
                alt="" 
            />

            <h1 
                id='hero-heading' 
                className="fs-hero md:text-[var(--fs-md-hero)] max-md:text-center md:text-start max-md:mbs-[26.5px]"
            >
                Hi, I am Munawar Ali
            </h1>

            <p 
                id='hero-para' 
                className="fs-hero md:text-[var(--fs-md-hero)] max-md:text-center md:text-start max-md:mbs-[15px]"
            >
                I am a student at Farook College, Calicut.
            </p>

            <p 
                id='hero-para-2' 
                className="fs-hero md:text-[var(--fs-md-hero)] w-[360px] md:w-[657px] max-md:text-center md:text-start max-md:mbs-[20px]"
            >
                I design websites, make websites, and give web related services.
                I have experiences in css, javascript, and some other related subjects.
            </p>

            <div 
                id='md-hero-photo' 
                className="justify-center mx-auto"
            >
                <img 
                    className='max-md:hidden max-w-[325px] max-h-[325px]' 
                    src="/img/md-hero-photo.png" 
                    alt="" 
                />
            </div>

            <div id='social-icons' className='flex gap-[10px] md:gap-[15px] mbs-[12.5px] md:mbs-[45px] justify-center'>
                <NavLink
                    to='/'>
                    <svg className="icon | h-[13.33px] md:h-[20px] w-[13.33px] md:w-[20px]">
                    <use xlinkHref="/img/social-icons.svg#Vector-1"></use>
                    </svg>
                </NavLink>

                <NavLink
                    to='/'>
                    <svg className="icon | h-[13.33px] md:h-[20px] w-[13.33px] md:w-[20px]">
                    <use xlinkHref="/img/social-icons.svg#Vector-2"></use>
                    </svg>
                </NavLink>

                <NavLink
                    to='/'>
                    <svg className="icon | h-[13.33px] md:h-[20px] w-[13.33px] md:w-[20px]">
                    <use xlinkHref="/img/social-icons.svg#Vector-3"></use>
                    </svg>
                </NavLink>

                <NavLink
                    to='/'>
                    <svg className="icon | h-[13.33px] md:h-[20px] w-[13.33px] md:w-[20px]">
                    <use xlinkHref="/img/social-icons.svg#Vector-4"></use>
                    </svg>
                </NavLink>

                <NavLink
                    to='/'>
                    <svg className="icon | h-[13.33px] md:h-[20px] w-[13.33px] md:w-[20px]">
                    <use xlinkHref="/img/social-icons.svg#Vector"></use>
                    </svg>
                </NavLink>
            </div>
        </div>
    )
}