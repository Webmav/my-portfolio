export default function Projects() {
    return(
        <div className="grid justify-items-center py-[25px] md:py-[50px] ">
            <h1 className="text-[13px] md:text-[25px] ">My Projects</h1>

            <p className="mbs-[10px] md:mbs-[25px] text-[10px] md:text-[21px] ">These are some of my projects</p>

            <div className="flex mbs-[10px] md:mbs-[25px] gap-[10.5px] md:gap-[10px] ">
                <button className="border border-white rounded-[100vw] bg-accent-800 py-[3.42px] md:py-[5.35px] md:px-[13.5px] px-[8.5px] text-[6.67px] md:text-[10px] ">All</button>
                <button className="border border-white rounded-[100vw] bg-accent-800 py-[3.42px] md:py-[5.35px] md:px-[13.5px] px-[8.5px] text-[6.67px] md:text-[10px] ">UI/UX</button>
                <button className="border border-white rounded-[100vw] bg-accent-800 py-[3.42px] md:py-[5.35px] md:px-[13.5px] px-[8.5px] text-[6.67px] md:text-[10px] ">Web Design</button>
                <button className="border border-white rounded-[100vw] bg-accent-800 py-[3.42px] md:py-[5.35px] md:px-[13.5px] px-[8.5px] text-[6.67px] md:text-[10px] ">App Design</button>
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