import { NavLink } from 'react-router-dom'
import { projects } from '../json/project.json'

const ProjectCard = ( {projectNumber} ) => {

    return(
            <div>
                <h1 className='justify-self-center text-[17.5px] md:text-[22.5px] my-[7.5px] md:my-[10px] '> { projects[projectNumber].title } </h1>

                <NavLink
                    to={`${projects[projectNumber].liveLink}`}
                    className="grid object-contain"
                >
                    <img 
                        src={ projects[projectNumber].imgSrc } 
                        alt="" 
                        className='justify-self-center self-center w-[190px] md:w-[300px] h-[240px] md:h-[350px]'
                    />
                </NavLink>

                {/* <h3 className='text-[5px] md:text-[10px] my-[10px] md:mt-[10px] ml-[15px] md:ml-[10px] '>{ projects[projectNumber].category }</h3> */}

                <p className="my-[10px] md:my-[15px] justify-self-center self-center text-center text-[12.5px] md:text-[15px] max-w-[300px] md:max-w-[230px]">
                    { projects[projectNumber].description }
                </p>
                
                <div className='flex text-[10px] md:text-[10px] justify-self-center gap-[15px] text-yellow-500 md:my-[15px] '>
                    <NavLink
                        to={`${projects[projectNumber].liveLink}`}
                        className="grid"
                    >
                        <p className='hover:text-yellow-700'>View Site</p>
                    </NavLink>
                    <NavLink
                        to={`${projects[projectNumber].githubLink}`}
                        className="grid"
                    >
                        <p className='hover:text-yellow-700'>View Github</p>
                    </NavLink>
                </div>
            </div>
    )
}

export default ProjectCard;