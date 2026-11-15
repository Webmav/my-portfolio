export default function ContactPage() {
    return(
        <div className="px-[75px] py-[100px] ">
            <div>
                <h1>Contact</h1>

                <h2>Let's talk about your business website.</h2>

                <h3>Send a message and I'll reply within a day. Prefer chat? WhatsApp is the fastest.</h3>
            </div>

            <div>
                <div>
                    <h1>WhatsApp (fastest)</h1>
                    <h3>+971 58 307 0144</h3>
                </div>

                <div>
                    <h1>Phone</h1>
                    <h3>+91 99613 13991</h3>
                </div>

                <div>
                    <h1>Email</h1>
                    <h3>webmav07@gmail.com</h3>
                </div>

                <div>
                    <h1>Based in</h1>
                    <h3>+971 58 307 0144</h3>
                </div>
            </div>

            <div>
                <div>
                    <h2>Your Name</h2>

                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="border border-gray-300 rounded px-3 py-1 w-full"
                    />
                </div>

                <div>
                    <h2>Email or phone</h2>

                    <input
                        type="email"
                        name="emailOrPhone"
                        placeholder="How can I reach you?"
                        className="border border-gray-300 rounded px-3 py-1 w-full"
                    />
                </div>

                <div>
                    <h2>Tell me about your business</h2>

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
    )
}