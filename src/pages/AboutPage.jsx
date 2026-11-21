export default function AboutPage() {
    return(
        <div className="flex justify-center items-center mx-[25px] md:mx-[100px] my-[35px] md:my-[65px]">
            <div className="">
                <div className="flex max-md:flex-col max-md:items-center max-md:mx-auto md:gap-[50px] md:items-center">
                    <img 
                        className="max-w-[100%] max-h-[100%] w-[225px] md:w-[300px] rounded-[25px] shadow-[0rem_1rem_3.5rem_-1rem_gray]"
                        src="/img/munawar-ali-cropped.jpg" 
                        alt="none" 
                    />

                    <div className="max-md:flex max-md:flex-col max-md:items-center max-md:my-[32px] max-md:gap-[12px]">
                        <h1 className="font-bold text-[16px] md:text-[24px] text-indigo-700">ABOUT ME</h1>

                        <h2 className="font-bold text-[24px] md:text-[56px] text-black leading-[25px] md:leading-[64px] max-md:text-center">I build websites that bring businesses 
                            more
                            customers.
                        </h2>

                        <h3 className="text-[12px] md:text-[18px] text-gray-500 font-normal max-md:text-center">Munawar Ali, web designer and developer in Kerala.</h3>
                    </div>
                </div>

                <div className="flex flex-col max-md:items-center md:my-[65px] gap-[18px] md:gap-[25px]">
                    <h3 className="text-[14px] md:text-[20px] max-md:text-center">
                        I'm a student at Farook College, Calicut, and I've been building websites since a school competition first got me hooked. 
                        I taught myself <b className="text-[15px] md:text-[21px] ">CSS</b> and <b className="text-[15px] md:text-[21px] ">JavaScript</b>, and I noticed that many businesses in Kerala still don't have a proper website, so they
                        lose customers online.
                    </h3>

                    <h3 className="text-[14px] md:text-[20px] max-md:text-center">
                        Kerala is my home, and I want to help its shops and restaurants grow. My sites let customers order without calling, and your staff can 
                        manage those orders easily. I work mostly over <b className="text-[15px] md:text-[21px] ">WhatsApp</b> and start with a <b className="text-[15px] md:text-[21px] ">free mockup</b>, then handle your domain, hosting and a simple one-time 
                        build at a fair price.
                    </h3>
                </div>

                <div className="flex max-md:flex-col gap-[16px] md:gap-[25px] my-[25px] md:my-[65px] ">
                    <div className="flex flex-col gap-[2.5px] md:gap-[7.5px] border border-gray rounded-[18px] px-[20px] md:px-[40px] py-[17.5px] md:py-[35px]">
                        <h1 className="text-indigo-500">01</h1>

                        <h2 className="md:text-[30px] text-black font-bold">Design</h2>

                        <h3 className="md:text-[27.5px] font-normal ">Clean, mobile-first layouts that match your brand.</h3>
                    </div>
                    <div className="flex flex-col gap-[2.5px] md:gap-[7.5px] border border-gray rounded-[18px] px-[20px] md:px-[40px] py-[17.5px] md:py-[35px]">
                        <h1 className="text-indigo-500">02</h1>

                        <h2 className="md:text-[30px] text-black font-bold">Development</h2>

                        <h3 className="md:text-[27.5px] font-normal ">Fast sites with online ordering and staff order management.</h3>
                    </div>
                    <div className="flex flex-col gap-[2.5px] md:gap-[7.5px] border border-gray rounded-[18px] px-[20px] md:px-[40px] py-[17.5px] md:py-[35px]">
                        <h1 className="text-indigo-500">03</h1>

                        <h2 className="md:text-[30px] text-black font-bold">Launch and hosting</h2>

                        <h3 className="md:text-[27.5px] font-normal ">Domain, hosting, and WhatsApp, phone and email contact set up for you.</h3>
                    </div>
                </div>

                <div className="flex max-md:justify-center gap-[8px] md:gap-[12.5px] my-[25px] max-md:text-[12px] md:my-[65px]">
                    <h2 className="rounded-[15px] bg-gray-100 px-2 md:px-4 py-1 text-gray-500">React</h2>
                    <h2 className="rounded-[15px] bg-gray-100 px-2 md:px-4 py-1 text-gray-500">Vite</h2>
                    <h2 className="rounded-[15px] bg-gray-100 px-2 md:px-4 py-1 text-gray-500">Tailwind CSS</h2>
                    <h2 className="rounded-[15px] bg-gray-100 px-2 md:px-4 py-1 text-gray-500">JavaScript</h2>
                </div>

                <div className="flex flex-col gap-[15px] md:gap-[20px] rounded-[1.5rem] bg-indigo-600 justify-center items-center py-[25px] md:py-[65px] ">
                    <h1 className="text-[16px] md:text-[40px] text-white ">Get a free homepage mockup in 2 weeks</h1>
                    
                    <h3 className="text-[14px] md:text-[20px] bg-white hover:bg-gray-100 px-[12px] md:px-[32px] py-[8px] md:py-[12px] rounded-[.75rem] md:rounded-[.6rem] text-indigo-800 hover:text-indigo-500 hover:border ">
                        <a href="https://wa.me//971583070144?text=Hi, I'd like a free mockup">
                            Message me on WhatsApp
                        </a>
                    </h3>
                </div>
            </div>
        </div>
    )
}