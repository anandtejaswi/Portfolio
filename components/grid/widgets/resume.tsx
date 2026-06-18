import resumeIcon from '@/public/images/resume-icon.png';
import Card from '../../ui/card';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa6';
import Anchor from '../../ui/anchor';

export default function Resume({ locked }: { locked?: boolean }) {
    return (
        <Card className='group relative bg-[#f7f0e6] dark:bg-[#2c2216]'>
            {locked && (
                <a href="/images/resume.pdf" aria-label="View Resume PDF" target="_blank" rel="noopener noreferrer" className="cancel-drag absolute inset-0 z-20"></a>
            )}
            <div className="relative flex items-center justify-center w-full h-full p-8">
                <Image
                    src={resumeIcon}
                    alt="Resume"
                    fill
                    className="object-contain p-8 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
            </div>
            <div className='absolute bottom-3 left-3 z-10'>
                <Anchor
                    className='cancel-drag size-10 justify-end transition-all ease-in-out group-hover:w-full bg-[#e6dccb] dark:bg-[#3d3122] text-black dark:text-white'
                    href='/images/resume.pdf'
                    target='_blank'
                    aria-label='Resume'>
                    <span className='hidden whitespace-nowrap opacity-0 transition-all duration-300 ease-in group-hover:translate-x-0 group-hover:opacity-100 md:inline mr-2'>
                        Resume
                    </span>
                    <span>
                        <FaArrowRight className='-rotate-45 transition-transform duration-300 group-hover:rotate-0' />
                    </span>
                </Anchor>
            </div>
            <div className="absolute top-4 left-4 font-bold text-xl text-black dark:text-white pointer-events-none">Resume</div>
        </Card>
    );
}
