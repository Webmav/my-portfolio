export default function AboutPage() {
    return(
        <div className="flex justify-center items-center my-[25px]">
            <div>
                <div className="flex md:gap-[50px]">
                    <img src="/img/md-hero-photo.png" alt="none" />

                    <div>
                        <h1 className="bold">ABOUT ME</h1>

                        <h2>I build websites that bring businesses more customers.</h2>

                        <h3>Munawar Ali, web designer and developer in Kerala.</h3>
                    </div>
                </div>

                <div>
                    <h3>[YOUR STORY: why you started building websites for local businesses]</h3>
                    <h3>[YOUR STORY: why Kerala, and how you work with shop owners]</h3>
                </div>

                <div className="flex md:gap-[25px]">
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