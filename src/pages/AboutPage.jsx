export default function AboutPage() {
    return(
        <div className="flex justify-center items-center md:mx-[100px] my-[65px]">
            <div className="">
                <div className="flex md:gap-[50px] items-center">
                    <img 
                        className="max-w-[100%] max-h-[100%] w-[300px] rounded-[25px] shadow-[0rem_1rem_3.5rem_-1rem_gray]"
                        src="/img/munawar-ali-cropped.jpg" 
                        alt="none" 
                    />

                    <div>
                        <h1 className="font-bold text-[24px]">ABOUT ME</h1>

                        <h2 className="font-bold text-[56px] text-black leading-[64px]">I build websites that bring businesses 
                            <br />
                            more customers.
                        </h2>

                        <h3 className="text-[18px] text-gray-500 font-regular">Munawar Ali, web designer and developer in Kerala.</h3>
                    </div>
                </div>

                <div className="flex flex-col my-[65px] gap-[25px]">
                    <h3 className="text-[20px] ">[YOUR STORY: why you started building websites for local businesses]</h3>
                    <h3 className="text-[20px] ">[YOUR STORY: why Kerala, and how you work with shop owners]</h3>
                </div>

                <div className="flex md:gap-[25px] my-[65px]">
                    <div className="flex flex-col gap-[7.5px] border border-gray rounded-[18px] px-[40px] py-[35px]">
                        <h1 className="text-indigo-500">01</h1>

                        <h2 className="text-[30px] text-black font-bold">Design</h2>

                        <h3 className="text-[27.5px] font-regular ">Clean, mobile-first layouts that match your brand.</h3>
                    </div>
                    <div className="flex flex-col gap-[7.5px] border border-gray rounded-[18px] px-[40px] py-[35px]">
                        <h1 className="text-indigo-500">02</h1>

                        <h2 className="text-[30px] text-black font-bold">Development</h2>

                        <h3 className="text-[27.5px] font-regular ">Fast sites with online ordering and staff order management.</h3>
                    </div>
                    <div className="flex flex-col gap-[7.5px] border border-gray rounded-[18px] px-[40px] py-[35px]">
                        <h1 className="text-indigo-500">03</h1>

                        <h2 className="text-[30px] text-black font-bold">Launch and hosting</h2>

                        <h3 className="text-[27.5px] font-regular ">Domain, hosting, and WhatsApp, phone and email contact set up for you.</h3>
                    </div>
                </div>

                <div className="flex md:gap-[12.5px] my-[65px]">
                    <h2 className="rounded-[15px] bg-gray-100 px-4 py-1 text-gray-500">React</h2>
                    <h2 className="rounded-[15px] bg-gray-100 px-4 py-1 text-gray-500">Vite</h2>
                    <h2 className="rounded-[15px] bg-gray-100 px-4 py-1 text-gray-500">Tailwind CSS</h2>
                    <h2 className="rounded-[15px] bg-gray-100 px-4 py-1 text-gray-500">JavaScript</h2>
                </div>

                <div className="flex flex-col gap-[20px] rounded-[1.5rem] bg-indigo-600 justify-center items-center my-[65px] py-[65px] ">
                    <h1 className="text-[40px] text-white ">Get a free homepage mockup in 2 weeks</h1>
                    
                    <h3 className="text-[20px] bg-white px-[32px] py-[12px] rounded-[.6rem] text-indigo-800 hover:text-indigo-500 hover:border ">
                        <a href="https://wa.me//971583070144?text=Hi, I'd like a free mockup">
                            Message me on WhatsApp
                        </a>
                    </h3>
                </div>
            </div>
        </div>
    )
}