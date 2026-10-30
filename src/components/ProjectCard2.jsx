import { NavLink } from 'react-router-dom'

import Carousel from './Carousel';
import { projects } from '../json/project.json';

export default function ProjectCard2({ isBaseWidth = 250, isAspectRatio = 1.1, isGap = 12, isRadius = 15, isAutoplayDelay = 4000 }) {
    const items = [
        {title: `${projects[0].title}`, description: `${projects[0].description}`, image: `${projects[0].imgSrc}`, link: `${projects[0]}.liveLink`},
        {title: `${projects[1].title}`, description: `${projects[1].description}`, image: `${projects[1].imgSrc}`, link: `${projects[1]}.liveLink`},
        {title: `${projects[2].title}`, description: `${projects[2].description}`, image: `${projects[2].imgSrc}`, link: `${projects[2]}.liveLink`},
    ]

    return(
        <div className=' relative'>
            <NavLink
                to='/projects'
            >
                <Carousel
                    items={items}
                    baseWidth={isBaseWidth}
                    aspectRatio={isAspectRatio}
                    effect="tilt"
                    indicator="dots"
                    frame={false}
                    loop
                    autoplay
                    autoplayDelay={isAutoplayDelay}
                    pauseOnHover={false}
                    theme="light"
                    peek={0}
                    gap={isGap}
                    radius={isRadius}
                    draggable
                    round={false}
                />
            </NavLink>
        </div>
    )
}