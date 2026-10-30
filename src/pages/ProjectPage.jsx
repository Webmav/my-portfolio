import ProjectCard from "../components/ProjectCard"

export default function ProjectPage() {
    return(
        <div className="min-mx-[5px] my-[25px] md:my-[50px]">
            <h1 className="my-[12.5px] md:my-[25px] justify-self-center font-bold text-[25px] md:text-[50px] ">Projects</h1>

            <div className='flex flex-wrap justify-center sm:gap-[33px] shrink-0' id='project-wrapper'>
                <ProjectCard projectNumber={'0'} />

                <ProjectCard projectNumber={'1'} />

                <ProjectCard projectNumber={'2'} />
            </div>
        </div>
    )
}