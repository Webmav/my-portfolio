import { useState, useEffect } from 'react';

export default function ContactPage() {
    const [name, setName] = useState("");
    const [contact, setContact] = useState("")
    const [description, setDescription] = useState("")

    useEffect( () => {
        setName("")
        setContact("")
        setDescription("")
    }, [])

    const message = `https://wa.me//971583070144?text=Hi, I am ${name} and you can contact me at ${contact}. My business is : ${description}`

    return(
        <div className="px-[25px] md:px-[185px] py-[25px] md:py-[100px] md:pb-[150px] ">
            <div className="flex flex-col max-md:items-center gap-[12px]">
                <h1 className="text-[16px] md:text-[20px] text-indigo-700">CONTACT</h1>

                <h2 className="font-bold text-[24px] md:text-[56px] text-black leading-[25px] md:leading-[64px] max-md:text-center"> Let's talk about your business website. </h2>

                <h3 className="text-[12px] md:text-[18px] text-gray-500 font-normal max-md:text-center"> Send a message and I'll reply within a day. Prefer chat? WhatsApp is the fastest. </h3>
            </div>

            <div className="flex max-md:flex-col pt-[24px] md:pt-[62.5px]">
                <div className="md:mr-[36px] flex flex-col  gap-[12px] md:gap-[24px] ">
                    <div className="border border-gray-300 rounded-[12px] px-[12px] md:px-[24px] py-[14px] md:py-[24px] bg-indigo-600 text-white w-full md:w-[475px] ">
                        <h1 className="text-[16px] md:text-[18px] text-white ">WhatsApp (fastest)</h1>
                        <h3 className="text-[16px] md:text-[24px] text-white">+971 58 307 0144</h3>
                    </div>

                    <div className="border border-gray-300 rounded-[12px] px-[12px] md:px-[24px] py-[14px] md:py-[24px] w-full md:w-[475px] ">
                        <h1 className="text-[16px] md:text-[18px] text-indigo-600 ">Phone</h1>
                        <h3 className="text-[16px] md:text-[24px] text-black">+91 99613 13991</h3>
                    </div>

                    <div className="border border-gray-300 rounded-[12px] px-[12px] md:px-[24px] py-[14px] md:py-[24px] w-full md:w-[475px] ">
                        <h1 className="text-[16px] md:text-[18px] text-indigo-600 ">Email</h1>
                        <h3 className="text-[16px] md:text-[24px] text-black">webmav07@gmail.com</h3>
                    </div>

                    <div className="border border-gray-300 rounded-[12px] px-[12px] md:px-[24px] py-[14px] md:py-[24px] w-full md:w-[475px] ">
                        <h1 className="text-[16px] md:text-[18px] text-indigo-600 ">Based in</h1>
                        <h3 className="text-[16px] md:text-[24px] text-black">Kerala, India</h3>
                    </div>
                </div>

                <div className="flex flex-col max-md:mt-[24px] gap-[12px] md:gap-[24px] border border-gray-300 rounded-[12px] px-[20px] md:px-[40px] py-[20px] md:py-[40px] text-black w-full">
                    <div>
                        <h2 className="px-[3px] text-[16px] md:text-[20px] mb-[2px] ">Your name</h2>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            onChange={ (e) => {setName(e.target.value)} }
                            className="border border-gray-300 md:h-[58px] rounded px-[8px] md:px-3 py-[8px] md:py-1 w-full text-[16px] md:text-[20px]"
                        />
                    </div>
                    <div>
                        <h2 className="px-[3px] text-[16px] md:text-[20px] mb-[2px] ">Email or phone</h2>
                        <input
                            type="email"
                            name="emailOrPhone"
                            placeholder="How can I reach you?"
                            onChange={ (e) => {setContact(e.target.value)} }
                            className="border border-gray-300 md:h-[58px] rounded px-[8px] md:px-3 py-[8px] md:py-1 w-full text-[16px] md:text-[20px]"
                        />
                    </div>
                    <div>
                        <h2 className="px-[3px] text-[16px] md:text-[20px] mb-[2px] ">Tell me about your business</h2>
                        <textarea
                            type="email"
                            name="emailOrPhone"
                            placeholder="What do you sell, and what do you want the website to do?"
                            onChange={ (e) => {setDescription(e.target.value)} }
                            className="border border-gray-300 h-[100px] md:h-[150px] rounded px-[8px] md:px-3 py-[8px] md:py-1 w-full text-[16px] md:text-[20px]"
                        />
                    </div>

                    <a
                        className="flex justify-center items-center rounded-[12px] w-full h-[36px] md:h-[60px] bg-indigo-600 text-white text-[16px] md:text-[20px] active:bg-indigo-700"
                        href={message}
                    >
                        Send message
                    </a>
                </div>
            </div>
        </div>
    )
}