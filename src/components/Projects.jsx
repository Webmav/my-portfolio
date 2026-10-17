import { NavLink } from 'react-router-dom'
import { projects } from '../json/project.json';

export default function Projects() {
    const project1 = projects[0];
    const project2 = projects[1];
    const project3 = projects[2];
    const project4 = projects[3];

    function ProjectArrows() {
        const project1 = document.getElementById("project-1");
        const project4 = document.getElementById("project-4");
        const arrowBack = document.getElementById("arrow-back");
        const arrowNext = document.getElementById("arrow-next");

        project1.classList.toggle('max-md:hidden');
        project4.classList.toggle('max-md:hidden');

        arrowBack.classList.toggle('max-md:hidden')
        arrowNext.classList.toggle('max-md:hidden')
        console.log(projects[0].name);
    }

    return(
        <div className="grid justify-items-center py-[25px] md:py-[50px] ">
            <h1 className="text-[13px] md:text-[25px] ">My Projects</h1>

            <p className="mbs-[10px] md:mbs-[25px] text-[10px] md:text-[21px] ">These are some of my projects</p>

            <div className="flex mbs-[10px] md:mbs-[25px] gap-[10.5px] md:gap-[10px] ">
                <button className="border border-white rounded-[100vw] bg-accent-800 py-[3.42px] md:py-[5.35px] md:px-[13.5px] px-[8.5px] text-[6.67px] md:text-[10px] hover:bg-accent-900 hover:text-primary-50 ">All</button>
                <button className="border border-white rounded-[100vw] bg-accent-800 py-[3.42px] md:py-[5.35px] md:px-[13.5px] px-[8.5px] text-[6.67px] md:text-[10px] hover:bg-accent-900 hover:text-primary-50 ">UI/UX</button>
                <button className="border border-white rounded-[100vw] bg-accent-800 py-[3.42px] md:py-[5.35px] md:px-[13.5px] px-[8.5px] text-[6.67px] md:text-[10px] hover:bg-accent-900 hover:text-primary-50 ">Web Design</button>
                <button className="border border-white rounded-[100vw] bg-accent-800 py-[3.42px] md:py-[5.35px] md:px-[13.5px] px-[8.5px] text-[6.67px] md:text-[10px] hover:bg-accent-900 hover:text-primary-50 ">App Design</button>
            </div>

            <div className='flex mt-[22.67px] md:mt-[33px] gap-[33px] md:gap-[60px] shrink-0'>
                <NavLink to='/' id='project-1' className='flex flex-col'>
                        <img src={`${project1.imgSrc}`} alt="" className='w-[150px] md:w-[250px] h-[175px] md:h-[300px] '/>
                        <h3 className='text-[5px] md:text-[10px] mt-[5px] md:mt-[10px] ml-[15px] md:ml-[10px] '>{project1.category}</h3>
                        <p className="self-center text-[6px] md:text-[13px] max-w-[110px] md:max-w-[230px]">{project1.description}</p>
                </NavLink>
                <NavLink to='/' id='project-2' className='flex flex-col'>
                        <img src={`${project2.imgSrc}`} alt="" className='w-[150px] md:w-[250px] h-[175px] md:h-[300px] '/>
                        <h3 className='text-[5px] md:text-[10px] mt-[5px] md:mt-[10px] ml-[15px] md:ml-[10px] '>{project2.category}</h3>
                        <p className="self-center text-[6px] md:text-[13px] max-w-[110px] md:max-w-[230px]">{project2.description}</p>
                </NavLink>
                <NavLink to='/' id='project-3' className='flex flex-col'>
                        <img src={`${project3.imgSrc}`} alt="" className='w-[150px] md:w-[250px] h-[175px] md:h-[300px] '/>
                        <h3 className='text-[5px] md:text-[10px] mt-[5px] md:mt-[10px] ml-[15px] md:ml-[10px] '>{project3.category}</h3>
                        <p className="self-center text-[6px] md:text-[13px] max-w-[110px] md:max-w-[230px]">{project3.description}</p>
                </NavLink>
                <NavLink to='/' id='project-4' className='flex flex-col max-md:hidden'>
                        <img src={`${project4.imgSrc}`} alt="" className='w-[150px] md:w-[250px] h-[175px] md:h-[300px] '/>
                        <h3 className='text-[5px] md:text-[10px] mt-[5px] md:mt-[10px] ml-[15px] md:ml-[10px] '>{project4.category}</h3>
                        <p className="self-center text-[6px] md:text-[13px] max-w-[110px] md:max-w-[230px]">{project4.description}</p>
                </NavLink>

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
            </div>
        </div>
    )
}