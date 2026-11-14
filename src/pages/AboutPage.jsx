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
                    <div className="border border-gray rounded">
                        <h1>1</h1>

                        <h2>Design</h2>

                        <h3>Clean, mobile-first layouts that match your brand.</h3>
                    </div>
                    <div className="border border-gray rounded">
                        <h1>2</h1>

                        <h2>Development</h2>

                        <h3>Fast sites with online ordering and staff order management.</h3>
                    </div>
                    <div className="border border-gray rounded">
                        <h1>3</h1>

                        <h2>Launch and hosting</h2>

                        <h3>Domain, hosting, and WhatsApp, phone and email contact set up for you.</h3>
                    </div>
                </div>

                <div className="flex md:gap-[12.5px]">
                    <h2 className="rounded bg-gray-100">React</h2>
                    <h2 className="rounded bg-gray-100">Vite</h2>
                    <h2 className="rounded bg-gray-100">Tailwind CSS</h2>
                    <h2 className="rounded bg-gray-100">JavaScript</h2>
                </div>

                <div className="flex flex-col rounded bg-accent-300 justify-center items-center">
                    <h1>Get a free homepage mockup in 2 weeks</h1>
                    
                    <button>Message me on WhatsApp</button>
                </div>
            </div>
        </div>
    )
}