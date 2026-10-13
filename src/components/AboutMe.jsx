export default function AboutMe() {
    return(
        <div className="grid justify-items-center py-[25px] md:py-[50px] ">
            <h1>About me</h1>

            <p className="mbs-[20px] md:mbs-[40px] ">These are some of my skills and expertise</p>

            <img className="max-w-[150px] max-h-[150px] md:hidden mbs-[20px] " src="src/assets/img/about-photo.png" alt="" />

            <img className="max-w-[213px] max-h-[114px] md:hidden mbs-[36px] " src="src/assets/img/graph-thing.png" alt="" />
        </div>
    )
}