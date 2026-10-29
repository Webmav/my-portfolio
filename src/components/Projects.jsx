import { NavLink } from 'react-router-dom';
import ProjectCard from './ProjectCard';

export default function Projects() {

    function ProjectArrows() {
        const project1 = document.getElementById("project-1");
        const project4 = document.getElementById("project-4");
        const arrowBack = document.getElementById("arrow-back");
        const arrowNext = document.getElementById("arrow-next");

        project1.classList.toggle('max-md:hidden');
        project4.classList.toggle('max-md:hidden');

        arrowBack.classList.toggle('max-md:hidden')
        arrowNext.classList.toggle('max-md:hidden')
    }

    return(
        <div className="grid justify-items-center py-[25px] md:py-[50px] ">
            <h1 className="text-[13px] md:text-[25px] ">My Projects</h1>

            <p className="mbs-[10px] md:mbs-[25px] text-[10px] md:text-[21px] ">These are some of my projects</p>

            {/* <div className="flex mbs-[10px] md:mbs-[25px] gap-[10.5px] md:gap-[10px] ">
                <button className="border border-white rounded-[100vw] bg-accent-800 py-[3.42px] md:py-[5.35px] md:px-[13.5px] px-[8.5px] text-[6.67px] md:text-[10px] hover:bg-accent-900 hover:text-primary-50 ">All</button>
                <button className="border border-white rounded-[100vw] bg-accent-800 py-[3.42px] md:py-[5.35px] md:px-[13.5px] px-[8.5px] text-[6.67px] md:text-[10px] hover:bg-accent-900 hover:text-primary-50 ">UI/UX</button>
                <button className="border border-white rounded-[100vw] bg-accent-800 py-[3.42px] md:py-[5.35px] md:px-[13.5px] px-[8.5px] text-[6.67px] md:text-[10px] hover:bg-accent-900 hover:text-primary-50 ">Web Design</button>
                <button className="border border-white rounded-[100vw] bg-accent-800 py-[3.42px] md:py-[5.35px] md:px-[13.5px] px-[8.5px] text-[6.67px] md:text-[10px] hover:bg-accent-900 hover:text-primary-50 ">App Design</button>
            </div> */}

            <div className='flex mt-[22.67px] md:mt-[33px] mx-[5px] gap-[33px] shrink-0' id='project-wrapper'>
                <ProjectCard projectNumber={'0'} />
                <ProjectCard projectNumber={'1'} />
                <ProjectCard projectNumber={'2'} />

                {/* <button 
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
                </button> */}
            </div>
        </div>
    )
}