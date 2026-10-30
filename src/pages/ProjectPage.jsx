import ProjectCard from "../components/ProjectCard"

export default function ProjectPage() {
    return(
        <div className='flex flex-wrap justify-center mt-[15px] md:mt-[33px] mx-[5px] sm:gap-[33px] shrink-0' id='project-wrapper'>
                        
            <ProjectCard projectNumber={'0'} />
            <ProjectCard projectNumber={'1'} />
            <ProjectCard projectNumber={'2'} /> 
        

            {/* 
                <button 
                    id='arrow-back'
                    className='absolute left-[2.5px] mt-[35px] text-[75px] hover:text-[var(--clr-primary-500)] max-md:hidden md:hidden'
                    onClick={ProjectArrows}            
                >
                    &#8592;
                </button>
                <button 
                    id='arrow-next'
                    className='absolute right-[2.5px] mt-[35px] text-[75px] hover:text-[var(--clr-primary-500)] md:hidden'
                    onClick={ProjectArrows}                    
                >
                    &#8594;
                </button> 
            */}
        </div>
    )
}