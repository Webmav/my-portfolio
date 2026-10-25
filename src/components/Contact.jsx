import emailjs from '@emailjs/browser'
import { useState } from 'react'

export default function Contact() {
    const [userEmail, setUserEmail] = useState("")
    const [message, setMessage] = useState("Hi, I am interested in getting a free homepage mockup designed for my business.")
    const [sending, setSending] = useState(false)
    const [status, setStatus] = useState("")

    async function send() {
        if(sending == true) {
            return;
        }

        if(!userEmail.trim()) {
            alert("Please enter your email address.");
            return;
        }

        const emailInput = document.querySelector(userEmail)
        if(!emailInput.checkValidity()) {
            alert("Please enter a valid email address.");
            return;
        }

        setSending(true)

        const templateParams = {
            user_email: userEmail,
            message: message,
        };
         
        try{
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            alert("Message send successfully.")
        } catch (error) {
            console.error(error)
        } finally {
            setSending(false)
        }
    }

    return(
        <div className="grid justify-items-center py-[25px] md:py-[50px] ">
            <h1 className="text-[12.5] md:text-[25px] ">Let's Design together </h1>

            <p className="text-[10.5px] md:text-[21px] mbs-[20px] md:mbs-[34px] ">I'll design a free homepage mockup for your business within two weeks.</p>
            <p className="text-[10.5px] md:text-[21px]">Type your email and click send, and I'll get in touch within 24 hours.</p>

            <div className="flex justify-center items-center max-md:flex-col mbs-[25px] md:mbs-[34px] md:gap-[25px] ">
                <input 
                    className="border border-black rounded-[100vw] min-w-[205px] h-[36px] py-[10px] px-[7.5px] bg-accent-400 hover:bg-accent-900" 
                    type="email" 
                    name="email" 
                    placeholder="email" 
                    onChange={ (e) => { setUserEmail(e.target.value) } }
                />
                <button 
                    onClick={send}
                    className="border border-black rounded-[100vw] w-[51px] md:w-[75px] h-[20px] md:h-[30px] max-md:mbs-[10px] bg-[var(--clr-button)] hover:bg-accent-900 hover:text-primary-50"
                >
                    <p className="flex justify-center items-center px-[15px] md:px-[23px] py-[3.5px] md:py-[5.5px] fs-225 md:fs-350">Send</p>
                </button>
            </div>

            <p className="text-[10.5px] md:text-[21px] mbs-[20px] md:mbs-[34px] ">
                Prefer WhatsApp?{" "}
                <a
                    className="underline hover:text-yellow-300"
                    href="https://wa.me//971583070144?text=Hi, I'd like a free mockup"
                >
                    Message me for your free mockup.
                </a>
            </p>
        </div>
    )
}