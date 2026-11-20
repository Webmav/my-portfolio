export default function ServicesPage() {
    return(
        <div className="px-[185px] py-[100px] pb-[150px]">
            <div>
                <h1>SERVICES</h1>
                
                <h2>Everything your business needs to take orders online.</h2>

                <h3>From the first design to hosting, I handle it so you can focus on your customers.</h3>
            </div>

            <div className="flex flex-wrap gap-[12px] ">
                <div className="border border-gray-300 rounded-[12px]">
                    <h1>01</h1>

                    <h2>Website design</h2>

                    <p>A free homepage mockup within two weeks, so you see your site before you commit.</p>
                </div>

                <div className="border border-gray-300 rounded-[12px]">
                    <h1>02</h1>

                    <h2>Website development</h2>

                    <p>Fast, mobile-friendly sites built with React and Tailwind CSS.</p>
                </div>

                <div className="border border-gray-300 rounded-[12px]">
                    <h1>03</h1>

                    <h2>Online order taking</h2>

                    <p>Customers place orders straight from your website, no app needed.</p>
                </div>

                <div className="border border-gray-300 rounded-[12px]">
                    <h1>04</h1>

                    <h2>Staff order management</h2>

                    <p>A simple screen where your staff see and manage incoming orders.</p>
                </div>

                <div className="border border-gray-300 rounded-[12px]">
                    <h1>05</h1>

                    <h2>Contact setup</h2>

                    <p>WhatsApp, phone and email buttons so customers can reach you in one tap.</p>
                </div>

                <div className="border border-gray-300 rounded-[12px]">
                    <h1>06</h1>

                    <h2>Domain and hosting</h2>

                    <p>I set up your domain and keep your site online and running.</p>
                </div>
            </div>

            <h1>How we work together</h1>
            <div>
                <div>
                    <h1>1</h1>

                    <h2>Messege me</h2>

                    <p>Tell me about your business on WhatsApp.</p>
                </div>
                <div>
                    <h1>2</h1>

                    <h2>See your mockup</h2>

                    <p>Get a free homepage design within two weeks.</p>
                </div>
                <div>
                    <h1>3</h1>

                    <h2>Launch</h2>

                    <p>I build, connect your contact channels, and put it online.</p>
                </div>
            </div>

            <div>
                <h1>Start with a free homepage mockup</h1>

                <button>
                    Message me on WhatsApp
                </button>
            </div>
        </div>
    )
}