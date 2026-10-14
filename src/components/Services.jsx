import { NavLink } from 'react-router-dom';

export default function Services() {
    return(
        <div className="grid justify-items-center py-[25px] md:py-[50px] ">
            <h1 className="text-[13px] md:text-[25px] ">Services</h1>

            <p className="mbs-[10px] md:mbs-[24px] text-[10.5px] md:text-[21px] ">These are some of my projects</p>

            <div className='flex mt-[28px] md:mt-[62px] gap-[34px] md:gap-[56px] shrink-0'>
                <NavLink to='/' id='service-1' className='flex flex-col'>
                    <img src="" alt="" className='w-[167px] md:w-[250px] h-[200px] md:h-[300px]' />
                </NavLink>
                <NavLink to='/' id='service-2' className='flex flex-col'>
                    <img src="" alt="" className='w-[167px] md:w-[250px] h-[200px] md:h-[300px]' />
                </NavLink>
                <NavLink to='/' id='service-3' className='flex flex-col'>
                    <img src="" alt="" className='w-[167px] md:w-[250px] h-[200px] md:h-[300px]' />
                </NavLink>
            </div>
        </div>
    )
}