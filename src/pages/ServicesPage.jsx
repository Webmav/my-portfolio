export default function ServicesPage() {
    return(
        <div className="px-[184px] py-[100px] pb-[150px]">
            <div className="flex flex-col gap-[12px] pt-[12.5px] ">
                <h1 className="text-[20px] text-indigo-500">SERVICES</h1>
                
                <h2 className="text-[57.5px] leading-[64px] text-black">Everything your business needs <br /> to take orders online.</h2>

                <h3 className="text-[20px] text-gray-600">From the first design to hosting, I handle it so you can focus on your customers.</h3>
            </div>

            <div className="grid grid-cols-3 gap-[32px] mt-[90px] ">
                <div className="flex flex-col gap-[8px] border border-gray-300 rounded-[12px] w-[390px] h-[225px] px-[32px] py-[32px] ">
                    <h1 className="text-indigo-500">01</h1>

                    <h2 className="font-bold text-[24px] text-black">Website design</h2>

                    <p className="text-[20px] text-gray-500">A free homepage mockup within two weeks, so you see your site before you commit.</p>
                </div>

                <div className="flex flex-col gap-[8px] border border-gray-300 rounded-[12px] w-[390px] h-[225px] px-[32px] py-[32px] ">
                    <h1 className="text-indigo-500">02</h1>

                    <h2 className="font-bold text-[24px] text-black">Website development</h2>

                    <p className="text-[20px] text-gray-500">Fast, mobile-friendly sites built with React and Tailwind CSS.</p>
                </div>

                <div className="flex flex-col gap-[8px] border border-gray-300 rounded-[12px] w-[390px] h-[225px] px-[32px] py-[32px] ">
                    <h1 className="text-indigo-500">03</h1>

                    <h2 className="font-bold text-[24px] text-black">Online order taking</h2>

                    <p className="text-[20px] text-gray-500">Customers place orders straight from your website, no app needed.</p>
                </div>

                <div className="flex flex-col gap-[8px] border border-gray-300 rounded-[12px] w-[390px] h-[225px] px-[32px] py-[32px] ">
                    <h1 className="text-indigo-500">04</h1>

                    <h2 className="font-bold text-[24px] text-black">Staff order management</h2>

                    <p className="text-[20px] text-gray-500">A simple screen where your staff see and manage incoming orders.</p>
                </div>

                <div className="flex flex-col gap-[8px] border border-gray-300 rounded-[12px] w-[390px] h-[225px] px-[32px] py-[32px] ">
                    <h1 className="text-indigo-500">05</h1>

                    <h2 className="font-bold text-[24px] text-black">Contact setup</h2>

                    <p className="text-[20px] text-gray-500">WhatsApp, phone and email buttons so customers can reach you in one tap.</p>
                </div>

                <div className="flex flex-col gap-[8px] border border-gray-300 rounded-[12px] w-[390px] h-[225px] px-[32px] py-[32px] ">
                    <h1 className="text-indigo-500">06</h1>

                    <h2 className="font-bold text-[24px] text-black">Domain and hosting</h2>

                    <p className="text-[20px] text-gray-500">I set up your domain and keep your site online and running.</p>
                </div>
            </div>

            <h1 className="mt-[82.5px] text-[38px] text-black">How we work together</h1>
            <div className="flex mt-[32px] gap-[34px]">
                <div>
                    <div className="flex justify-center items-center bg-indigo-100 rounded-[100vw] text-indigo-700 w-[50px] h-[50px]">
                        <h1 className="text-[20px] font-bold">1</h1>
                    </div>

                    <h2 className="font-bold text-[24px] pt-[5px] text-black">Messege me</h2>

                    <p className="pt-[5px] text-gray-500 text-[19px]">Tell me about your business on WhatsApp.</p>
                </div>
                <div>
                    <div className="flex justify-center items-center bg-indigo-100 rounded-[100vw] text-indigo-700 w-[50px] h-[50px]">
                        <h1 className="text-[20px] font-bold">2</h1>
                    </div>

                    <h2 className="font-bold text-[24px] pt-[5px] text-black">See your mockup</h2>

                    <p className="pt-[5px] text-gray-500 text-[19px]">Get a free homepage design within two weeks.</p>
                </div>
                <div>
                    <div className="flex justify-center items-center bg-indigo-100 rounded-[100vw] text-indigo-700 w-[50px] h-[50px]">
                        <h1 className="text-[20px] font-bold">3</h1>
                    </div>

                    <h2 className="font-bold text-[24px] pt-[5px] text-black">Launch</h2>

                    <p className="pt-[5px] text-gray-500 text-[19px]">I build, connect your contact channels, <br /> and put it online.</p>
                </div>
            </div>

            <div className="flex flex-col items-center gap-[24px] bg-indigo-600 mt-[85px] rounded-[24px] py-[65px] mb-[80px]">
                <h1 className="text-[40px] text-white">Start with a free homepage mockup</h1>

                <h2 className="text-[24px] text-indigo-700 active:text-indigo-900 bg-white active:bg-gray-100 rounded-[12px] px-[36px] py-[12px]">
                    <a href="https://wa.me//971583070144?text=Hi, I'd like a free mockup">
                        Message me on WhatsApp
                    </a>
                </h2>
            </div>
        </div>
    )
}