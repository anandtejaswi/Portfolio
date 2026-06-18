import projectImage from '@/public/images/solar_swing_1.png';
import Card from '../../ui/card';
import Image from 'next/image';
import Anchor from '../../ui/anchor';
import { FaArrowRight } from 'react-icons/fa6';

export default function SolarSwing() {
    const projectName = 'Solar Swing';

    return (
        <Card className='group relative bg-[#2A4A2A]'>
            <Image
                src={projectImage}
                alt={projectName}
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className='object-cover opacity-60 mix-blend-overlay'
                priority
                draggable={false}
            />
            <div className='absolute bottom-3 left-3 z-10'>
                <Anchor
                    className='cancel-drag size-10 justify-end transition-all ease-in-out group-hover:w-full bg-[#111111] text-white'
                    href='/projects/solarswing_content'
                    aria-label={projectName}>
                    <span className='hidden whitespace-nowrap opacity-0 transition-all duration-300 ease-in group-hover:translate-x-0 group-hover:opacity-100 md:inline mr-2'>
                        {projectName}
                    </span>
                    <span>
                        <FaArrowRight className='-rotate-45 transition-transform duration-300 group-hover:rotate-0' />
                    </span>
                </Anchor>
            </div>
            <div className='absolute top-4 left-4 font-bold text-white z-10 text-xl tracking-wider'>Solar Swing</div>
        </Card>
    );
}
