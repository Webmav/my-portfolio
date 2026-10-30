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
                    <NavLink to="https://wa.me//971583070144?text=Hi, I'd like to work with you!">
                        <svg className="icon | h-[13.33px] md:h-[30px] w-[13.33px] md:w-[30px] hover:bg-blue-800 rounded">
                            <use xlinkHref="/img/social-icon-s.svg#whatsapp-svgrepo-com"></use>
                        </svg>
                    </NavLink>
                    
                    <NavLink to="https://github.com/Webmav">
                        <svg className="icon | h-[13.33px] md:h-[30px] w-[13.33px] md:w-[30px] hover:bg-blue-800 rounded">
                            <use xlinkHref="/img/social-icon-s.svg#github-svgrepo-com"></use>
                        </svg>
                    </NavLink>
                    
                    <NavLink to="https://www.linkedin.com/in/munawaraliv">
                        <svg className="icon | h-[13.33px] md:h-[30px] w-[13.33px] md:w-[30px] hover:bg-blue-800 rounded">
                            <use xlinkHref="/img/social-icon-s.svg#linkedin-svgrepo-com"></use>
                        </svg>
                    </NavLink>

                    <NavLink to="https://mail.google.com/mail/u/0/#inbox">
                        <svg className="icon | h-[13.33px] md:h-[30px] w-[13.33px] md:w-[30px] hover:bg-blue-800 rounded">
                            <use xlinkHref="/img/social-icon-s.svg#gmail-svgrepo-com"></use>
                        </svg>
                    </NavLink>


            </div>
        </div>
    )
}