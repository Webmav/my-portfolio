import { NavLink } from 'react-router-dom'

import Carousel from './Carousel';
import { projects } from '../json/project.json';

export default function ProjectCard2({ isBaseWidth, isAspectRatio, isGap, isRadius, isAutoplayDelay, pOneImg = `${projects[0].imgSrc}`, pTwoImg = `${projects[1].imgSrc}`, pThreeImg = `${projects[2].imgSrc}` }) {
    const items = [
        {title: `${projects[0].title}`, description: `${projects[0].description}`, image: pOneImg},
        {title: `${projects[1].title}`, description: `${projects[1].description}`, image: pTwoImg},
        {title: `${projects[2].title}`, description: `${projects[2].description}`, image: pThreeImg},
    ]

    return(
        <div className=' relative'>
                <Carousel
                    items={items}
                    baseWidth={isBaseWidth}
                    aspectRatio={isAspectRatio}
                    effect="tilt"
                    indicator="dots"
                    frame={true}
                    loop
                    autoplay
                    autoplayDelay={isAutoplayDelay}
                    pauseOnHover={true}
                    theme="light"
                    peek={0}
                    gap={isGap}
                    radius={isRadius}
                    draggable
                    round={false}
                />
        </div>
    )
}