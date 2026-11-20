export default function ContactPage() {
    return(
        <div className="px-[185px] py-[100px] ">
            <div className="flex flex-col gap-[12px]">
                <h1 className="text-[18px] text-indigo-500 mt-[12px]">CONTACT</h1>

                <h2 className="text-[57.5px] leading-[64px] text-black ">
                    Let's talk about your 
                    <br />
                    business website.
                </h2>

                <h3 className="text-[24px] text-gray-600">
                    Send a message and I'll reply within a day. Prefer chat? WhatsApp is the
                    <br />
                    fastest.
                </h3>
            </div>

            <div className="flex pt-[62.5px]">
                <div className="mr-[36px] flex flex-col gap-[24px] ">
                    <div className="px-[24px] border border-gray-300 rounded-[12px] py-[24px] bg-indigo-600 text-white w-[475px] ">
                        <h1 className="text-[18px] text-white ">WhatsApp (fastest)</h1>
                        <h3 className="text-[24px] text-white">+971 58 307 0144</h3>
                    </div>

                    <div className="px-[24px] border border-gray-300 rounded-[12px] py-[24px] hover:bg-indigo-600 hover:text-white w-[475px] ">
                        <h1 className="text-[18px] text-indigo-600 ">Phone</h1>
                        <h3 className="text-[24px] text-black">+91 99613 13991</h3>
                    </div>

                    <div className="px-[24px] border border-gray-300 rounded-[12px] py-[24px] hover:bg-indigo-600 hover:text-white w-[475px] ">
                        <h1 className="text-[18px] text-indigo-600 ">Email</h1>
                        <h3 className="text-[24px] text-black">webmav07@gmail.com</h3>
                    </div>

                    <div className="px-[24px] border border-gray-300 rounded-[12px] py-[24px] hover:bg-indigo-600 hover:text-white w-[475px] ">
                        <h1 className="text-[18px] text-indigo-600 ">Based in</h1>
                        <h3 className="text-[24px] text-black">Kerala, India</h3>
                    </div>
                </div>

                <div className="border border-gray-300 rounded-[12px] px-[40px] py-[40px] text-black">
                    <div>
                        <h2 className="px-[3px] text-[18px]">Your name</h2>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="border border-gray-300 rounded px-3 py-1 w-full"
                        />
                    </div>
                    <div>
                        <h2 className="px-[3px] text-[18px]">Email or phone</h2>
                        <input
                            type="email"
                            name="emailOrPhone"
                            placeholder="How can I reach you?"
                            className="border border-gray-300 rounded px-3 py-1 w-full"
                        />
                    </div>
                    <div>
                        <h2 className="px-[3px] text-[18px]">Tell me about your business</h2>
                        <textarea
                            type="email"
                            name="emailOrPhone"
                            placeholder="What do you sell, and what do you want the website to do?"
                            className="border border-gray-300 rounded px-3 py-1 w-full"
                        />
                    </div>
                    <button
                        className="rounded w-full"
                    >
                        Send message
                    </button>
                </div>
            </div>
        </div>
    )
}