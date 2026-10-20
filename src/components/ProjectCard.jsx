import { NavLink } from 'react-router-dom'
import { projects } from '../json/project.json'

const ProjectCard = ( {projectNumber} ) => {

    return(
            <div>
                <h1 className='justify-self-center text-[22.5px] my-[10px] '> { projects[projectNumber].title } </h1>
                <NavLink
                    to={`${projects[projectNumber].liveLink}`}
                    className="grid"
                >
                    <img src={ projects[projectNumber].imgSrc } alt="" className='w-[150px] md:w-[250px] h-[175px] md:h-[300px] '/>
                </NavLink>
                <h3 className='text-[5px] md:text-[10px] my-[10px] md:mt-[10px] ml-[15px] md:ml-[10px] '>{ projects[projectNumber].category }</h3>
                <p className="self-center text-[6px] text-center md:text-[13px] max-w-[110px] md:max-w-[230px]">{ projects[projectNumber].description }</p>
                <div className='flex text-[10px] justify-self-center gap-[15px] text-yellow-500 my-[15px] '>
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