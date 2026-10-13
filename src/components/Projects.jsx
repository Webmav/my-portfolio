export default function Projects() {
    return(
        <div className="grid justify-items-center py-[25px] md:py-[50px] ">
            <h1>My Projects</h1>

            <p className="mbs-[10px] md:mbs-[25px]">These are some of my projects</p>

            <div className="flex mbs-[10px] md:mbs-[25px]">
                <button className="border border-white rounded-[100vw] bg-accent-800 py-[3.42px] md:py-[5.35px] px-[13.5px] md:px-[8.5px] ">All</button>
                <button className="border border-white rounded-[100vw] bg-accent-800 py-[3.42px] md:py-[5.35px] px-[13.5px] md:px-[8.5px] ">UI/UX</button>
                <button className="border border-white rounded-[100vw] bg-accent-800 py-[3.42px] md:py-[5.35px] px-[13.5px] md:px-[8.5px] ">Web Design</button>
                <button className="border border-white rounded-[100vw] bg-accent-800 py-[3.42px] md:py-[5.35px] px-[13.5px] md:px-[8.5px] ">App Design</button>
            </div>


            {/* Scroll... */}
            
            {/* <div>
                <img src="" alt="" />
                <h3>Category</h3>
                <p>Description of the project...</p>
            </div>
            <div>
                <img src="" alt="" />
                <h3>Category</h3>
                <p>Description of the project...</p>
            </div>
            <div>
                <img src="" alt="" />
                <h3>Category</h3>
                <p>Description of the project...</p>
            </div>
            <div>
                <img src="" alt="" />
                <h3>Category</h3>
                <p>Description of the project...</p>
            </div> */}
        </div>
    )
}