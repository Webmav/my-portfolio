export default function AboutMe() {
    return(
        <div className="grid justify-items-center py-[25px] md:py-[50px] ">
            <h1 className="text-[16.67px] md:text-[25px]">About me</h1>

            <p className="mbs-[20px] md:mbs-[40px] text-[14px] md:text-[21px] mbs-[20px] md:mbs-[40px] ">These are some of my skills and expertise</p>

            <img className="max-w-[150px] max-h-[150px] mbs-[20px] md:hidden" src="src/assets/img/about-photo.png" alt="" />

            <img className="max-w-[213px] max-h-[114px] mbs-[36px] md:hidden" src="src/assets/img/graph-thing.png" alt="" />

            <div className="grid md:grid-cols-2 max-md:hidden mbs-[80px] gap-[250px] ">
                <img className="max-w-[300px] max-h-[300px] mbs-[20px] " src="src/assets/img/md-about-photo.png" alt="" />
                <img className="max-w-[400px] max-h-[238px] mbs-[36px] " src="src/assets/img/md-graph-thing.png" alt="" />
            </div>
        </div>
    )
}