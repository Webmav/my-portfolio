import { NavLink } from 'react-router-dom';

export default function Hero() {
    return(
        <div 
            className="grid max-md:justify-items-center justify-contents-center px-auto md:px-[150px] pt-[25px] md:py-[50px] mx-auto justify-self-center"  
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
                className="text-[16px] md:text-[24px] max-md:text-center md:text-start max-md:mbs-[26.5px] text-gray-600"
            >
                Hi, I am <b className="text-[17px] md:text-[25px] text-black">Munawar Ali</b>
            </h1>

            <p 
                id='hero-para' 
                className="md:text-[24px] max-md:text-center md:text-start max-md:mbs-[15px] text-gray-600"
            >
                A web designer, developer, and student at Farook College, Calicut.
            </p>

            <p 
                id='hero-para-2' 
                className="text-[15px] md:text-[24px] w-[360px] md:w-[657px] max-md:text-center md:text-start max-md:mbs-[12px] text-gray-600"
            >
                With hands-on experience in <b className="text-black">CSS</b>, <b className="text-black">JavaScript</b>, and <b className="text-black">modern web technologies</b>. 
                I build fast, mobile-ready websites and offer ongoing web support to help businesses look sharp 
                and convert more visitors.
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