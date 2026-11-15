export default function ContactPage() {
    return(
        <div className="px-[150px] py-[75px] ">
            <div className="flex flex-col gap-[12px]">
                <h1 className="text-[24px] text-indigo-500">Contact</h1>

                <h2 className="text-[57.5px] leading-[64px] text-black ">
                    Let's talk about your 
                    <br />
                    business website.
                </h2>

                <h3 className="text-[22.5px] text-gray-600">
                    Send a message and I'll reply within a day. Prefer chat? WhatsApp is the
                    <br />
                    fastest.
                </h3>
            </div>

            <div className="flex pt-[65px]">
                <div>
                    <div className="px-[24px] border border-gray-200 ">
                        <h1 className="text-[24px] ">WhatsApp (fastest)</h1>
                        <h3 className="">+971 58 307 0144</h3>
                    </div>

                    <div className="px-[24px] border border-gray-200 ">
                        <h1 className="text-[24px] ">Phone</h1>
                        <h3 className="">+91 99613 13991</h3>
                    </div>

                    <div className="px-[24px] border border-gray-200 ">
                        <h1 className="text-[24px] ">Email</h1>
                        <h3 className="">webmav07@gmail.com</h3>
                    </div>

                    <div className="px-[24px] border border-gray-200 ">
                        <h1 className="text-[24px] ">Based in</h1>
                        <h3 className="">Kerala, India</h3>
                    </div>
                </div>

                <div>
                    <div>
                        <h2 className="">Your Name</h2>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="border border-gray-300 rounded px-3 py-1 w-full"
                        />
                    </div>
                    <div>
                        <h2 className="">Email or phone</h2>
                        <input
                            type="email"
                            name="emailOrPhone"
                            placeholder="How can I reach you?"
                            className="border border-gray-300 rounded px-3 py-1 w-full"
                        />
                    </div>
                    <div>
                        <h2 className="">Tell me about your business</h2>
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