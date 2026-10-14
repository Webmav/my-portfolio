export default function Contact() {
    return(
        <div className="grid justify-items-center py-[25px] md:py-[50px] ">
            <h1>Let’s Design together </h1>

            <p className="mbs-[15px] md:mbs-[30px] ">Please type in your email address and click send </p>
            <p> I will get in touch within 24 hours</p>

            <div className="flex justify-center items-center max-md:flex-col mbs-[30px] md:mbs-[50px] md:gap-[25px] ">
                <input className="border border-black rounded-[100vw] min-w-[205px] h-[36px] py-[10px] px-[7.5px] bg-accent-400 hover:bg-accent-900" type="email" name="email" placeholder="email" />
                <button className="border border-black rounded-[100vw] w-[51px] md:w-[75px] h-[20px] md:h-[30px] max-md:mbs-[10px] bg-[var(--clr-button)] hover:bg-accent-900 hover:text-primary-50">
                    <p className="flex justify-center items-center px-[15px] md:px-[23px] py-[3.5px] md:py-[5.5px] fs-225 md:fs-350">Send</p>
                </button>
            </div>
        </div>
    )
}