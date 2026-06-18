import githubIcon from '@/public/images/github-icon.png';
import Card from '../../ui/card';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa6';
import Anchor from '../../ui/anchor';

export default function Github({ locked }: { locked?: boolean }) {
    return (
        <Card className='group relative bg-gradient-to-br from-[#161b22] to-[#0d1117]'>
            {locked && (
                <a href="https://github.com/anandtejaswi" target="_blank" rel="noopener noreferrer" className="cancel-drag absolute inset-0 z-20"></a>
            )}
            <div className="relative flex items-center justify-center w-full h-full p-8">
                <Image
                    src={githubIcon}
                    alt="GitHub Profile"
                    width={80}
                    height={80}
                    className="opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
            </div>
            <div className='absolute bottom-3 left-3 z-10'>
                <Anchor
                    className='cancel-drag size-10 justify-end transition-all ease-in-out group-hover:w-full bg-[#222] text-white'
                    href='https://github.com/anandtejaswi'
                    target='_blank'
                    aria-label='GitHub'>
                    <span className='hidden whitespace-nowrap opacity-0 transition-all duration-300 ease-in group-hover:translate-x-0 group-hover:opacity-100 md:inline mr-2'>
                        GitHub
                    </span>
                    <span>
                        <FaArrowRight className='-rotate-45 transition-transform duration-300 group-hover:rotate-0' />
                    </span>
                </Anchor>
            </div>
            <div className="absolute top-4 left-4 font-bold text-xl text-white pointer-events-none tracking-wider">GitHub</div>
        </Card>
    );
}
