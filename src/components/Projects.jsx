import { NavLink } from 'react-router-dom';

import { projects } from '../json/project.json'
import ProjectCard from './ProjectCard';
import ProjectCard2 from './ProjectCard2';

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
            <h1 className="text-[17.5px] md:text-[25px] ">My Projects</h1>

            <p className="mbs-[10px] md:mbs-[25px] text-[17.5px] md:text-[15px] ">These are some of my projects</p>

            {/* <div className="flex mbs-[10px] md:mbs-[25px] gap-[10.5px] md:gap-[10px] ">
                <button className="border border-white rounded-[100vw] bg-accent-800 py-[3.42px] md:py-[5.35px] md:px-[13.5px] px-[8.5px] text-[6.67px] md:text-[10px] hover:bg-accent-900 hover:text-primary-50 ">All</button>
                <button className="border border-white rounded-[100vw] bg-accent-800 py-[3.42px] md:py-[5.35px] md:px-[13.5px] px-[8.5px] text-[6.67px] md:text-[10px] hover:bg-accent-900 hover:text-primary-50 ">UI/UX</button>
                <button className="border border-white rounded-[100vw] bg-accent-800 py-[3.42px] md:py-[5.35px] md:px-[13.5px] px-[8.5px] text-[6.67px] md:text-[10px] hover:bg-accent-900 hover:text-primary-50 ">Web Design</button>
                <button className="border border-white rounded-[100vw] bg-accent-800 py-[3.42px] md:py-[5.35px] md:px-[13.5px] px-[8.5px] text-[6.67px] md:text-[10px] hover:bg-accent-900 hover:text-primary-50 ">App Design</button>
            </div> */}
        
        {/* For big screen sizes */}
            <div className='flex justify-center mt-[15px] md:mt-[33px] mx-[5px] sm:gap-[33px] shrink-0 max-md:hidden' id='project-wrapper'>
                <NavLink
                    to='/projects'
                    >
                    <ProjectCard2 isBaseWidth={1250} isAspectRatio={2.45} isGap={15} isAutoplayDelay={2250} pOneImg={`${projects[0].webImgSrc}`} pTwoImg={`${projects[1].webImgSrc}`} pThreeImg={`${projects[2].webImgSrc}`}/>
                </NavLink>
            </div>

        {/* For small screen sizes */}
            <div className='flex justify-center mt-[15px] md:mt-[33px] mx-[5px] sm:gap-[33px] shrink-0 md:hidden' id='project-wrapper'>
                <NavLink
                    to='/projects'
                >
                    <ProjectCard2 isBaseWidth={250} isAspectRatio={.75} isGap={12} isRadius={15} isAutoplayDelay={4000}/>
                </NavLink>
            </div>
        </div>
    )
}