export default function ServicesPage() {
    return(
        <div className="px-[25px] md:px-[184px] py-[25px] md:py-[100px] md:pb-[150px]">
            <div className="flex flex-col max-md:items-center gap-[12px] pt-[12.5px] ">
                <h1 className="text-[16px] md:text-[20px] text-indigo-700">SERVICES</h1>
                
                <h2 className="font-bold text-[24px] md:text-[56px] text-black leading-[25px] md:leading-[64px] max-md:text-center">Everything your business needs <br /> to take orders online.</h2>

                <h3 className="text-[12px] md:text-[18px] text-gray-500 font-normal max-md:text-center">From the first design to hosting, I handle it so you can focus on your customers.</h3>
            </div>

            <div className="flex max-md:flex-col max-md:items-center md:grid md:grid-cols-3 gap-[14px] md:gap-[32px] mt-[25px] md:mt-[90px] ">
                <div className="flex flex-col gap-[8px] border border-gray-300 rounded-[12px] w-[275px] md:w-[350px] h-[175px] md:h-[225px] px-[16px] md:px-[32px] py-[12px] md:py-[32px] ">
                    <h1 className="max-md:text-[14px] text-indigo-500">01</h1>

                    <h2 className="font-bold text-[18px] md:text-[24px] text-black">Website design</h2>

                    <p className="text-[16px] md:text-[20px] text-gray-500">A free homepage mockup within two weeks, so you see your site before you commit.</p>
                </div>

                <div className="flex flex-col gap-[8px] border border-gray-300 rounded-[12px] w-[275px] md:w-[350px] h-[175px] md:h-[225px] px-[16px] md:px-[32px] py-[12px] md:py-[32px] ">
                    <h1 className="max-md:text-[14px] text-indigo-500">02</h1>

                    <h2 className="font-bold text-[18px] md:text-[24px] text-black">Website development</h2>

                    <p className="text-[16px] md:text-[20px] text-gray-500">Fast, mobile-friendly sites built with React and Tailwind CSS.</p>
                </div>

                <div className="flex flex-col gap-[8px] border border-gray-300 rounded-[12px] w-[275px] md:w-[350px] h-[175px] md:h-[225px] px-[16px] md:px-[32px] py-[12px] md:py-[32px] ">
                    <h1 className="max-md:text-[14px] text-indigo-500">03</h1>

                    <h2 className="font-bold text-[18px] md:text-[24px] text-black">Online order taking</h2>

                    <p className="text-[16px] md:text-[20px] text-gray-500">Customers place orders straight from your website, no app needed.</p>
                </div>

                <div className="flex flex-col gap-[8px] border border-gray-300 rounded-[12px] w-[275px] md:w-[350px] h-[175px] md:h-[225px] px-[16px] md:px-[32px] py-[12px] md:py-[32px] ">
                    <h1 className="max-md:text-[14px] text-indigo-500">04</h1>

                    <h2 className="font-bold text-[18px] md:text-[24px] text-black">Staff order management</h2>

                    <p className="text-[16px] md:text-[20px] text-gray-500">A simple screen where your staff see and manage incoming orders.</p>
                </div>

                <div className="flex flex-col gap-[8px] border border-gray-300 rounded-[12px] w-[275px] md:w-[350px] h-[175px] md:h-[225px] px-[16px] md:px-[32px] py-[12px] md:py-[32px] ">
                    <h1 className="max-md:text-[14px] text-indigo-500">05</h1>

                    <h2 className="font-bold text-[18px] md:text-[24px] text-black">Contact setup</h2>

                    <p className="text-[16px] md:text-[20px] text-gray-500">WhatsApp, phone and email buttons so customers can reach you in one tap.</p>
                </div>

                <div className="flex flex-col gap-[8px] border border-gray-300 rounded-[12px] w-[275px] md:w-[350px] h-[175px] md:h-[225px] px-[16px] md:px-[32px] py-[12px] md:py-[32px] ">
                    <h1 className="max-md:text-[14px] text-indigo-500">06</h1>

                    <h2 className="font-bold text-[18px] md:text-[24px] text-black">Domain and hosting</h2>

                    <p className="text-[16px] md:text-[20px] text-gray-500">I set up your domain and keep your site online and running.</p>
                </div>
            </div>

            <h1 className="mt-[25px] md:mt-[82.5px] text-[24px] md:text-[38px] text-black">How we work together</h1>
            <div className="flex mt-[24px] md:mt-[32px] gap-[12px] md:gap-[34px]">
                <div>
                    <div className="flex justify-center items-center bg-indigo-100 rounded-[100vw] text-indigo-700 w-[25px] md:w-[50px] h-[25px] md:h-[50px]">
                        <h1 className="text-[12px] md:text-[20px] font-bold">1</h1>
                    </div>

                    <h2 className="font-bold text-[14px] md:text-[24px] pt-[5px] text-black">Messege me</h2>

                    <p className="pt-[5px] text-gray-500 text-[10px] md:text-[19px]">Tell me about your business on WhatsApp.</p>
                </div>
                <div>
                    <div className="flex justify-center items-center bg-indigo-100 rounded-[100vw] text-indigo-700 w-[25px] md:w-[50px] h-[25px] md:h-[50px]">
                        <h1 className="text-[12px] md:text-[20px] font-bold">2</h1>
                    </div>

                    <h2 className="font-bold text-[14px] md:text-[24px] pt-[5px] text-black">See your mockup</h2>

                    <p className="pt-[5px] text-gray-500 text-[10px] md:text-[19px]">Get a free homepage design within two weeks.</p>
                </div>
                <div>
                    <div className="flex justify-center items-center bg-indigo-100 rounded-[100vw] text-indigo-700 w-[25px] md:w-[50px] h-[25px] md:h-[50px]">
                        <h1 className="text-[12px] md:text-[20px] font-bold">3</h1>
                    </div>

                    <h2 className="font-bold text-[14px] md:text-[24px] pt-[5px] text-black">Launch</h2>

                    <p className="pt-[5px] text-gray-500 text-[10px] md:text-[19px]">I build, connect your contact channels, <br /> and put it online.</p>
                </div>
            </div>

            <div className="flex flex-col gap-[15px] md:gap-[20px] rounded-[1.5rem] bg-indigo-600 justify-center items-center max-md:mt-[25px] mt-[75px] py-[25px] md:py-[65px] ">
                <h1 className="text-[16px] md:text-[40px] text-white ">Start with a free homepage mockup</h1>

                <h3 className="text-[14px] md:text-[20px] bg-white hover:bg-gray-100 px-[12px] md:px-[32px] py-[8px] md:py-[12px] rounded-[.75rem] md:rounded-[.6rem] text-indigo-800 hover:text-indigo-500 hover:border ">
                    <a href="https://wa.me//971583070144?text=Hi, I'd like a free mockup">
                        Message me on WhatsApp
                    </a>
                </h3>
            </div>
        </div>
    )
}