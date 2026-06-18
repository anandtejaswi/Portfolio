import Card from '../../ui/card';
import Anchor from '../../ui/anchor';
import { FaArrowRight } from 'react-icons/fa6';

export default function TryHackMe({ locked }: { locked?: boolean }) {
    return (
        <Card className='group relative w-full h-full flex justify-center items-center overflow-hidden bg-gradient-to-br from-[#1b1d24] to-[#111317]'>
            {locked && (
                <a href="https://tryhackme.com/p/anandtejaswi" target="_blank" rel="noopener noreferrer" className="cancel-drag absolute inset-0 z-20"></a>
            )}
            <iframe 
                src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=6594237" 
                title="TryHackMe Badge"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-none pointer-events-none scale-[0.9] md:scale-[1.3]"
                style={{ width: '340px', height: '100px' }}
                scrolling="no"
            ></iframe>
            <div className='absolute bottom-3 left-3 z-10'>
                <Anchor
                    className='cancel-drag size-10 justify-end transition-all ease-in-out group-hover:w-full bg-[#f1f1f1] text-black'
                    href='https://tryhackme.com/p/anandtejaswi'
                    target='_blank'
                    aria-label='TryHackMe'>
                    <span className='hidden whitespace-nowrap opacity-0 transition-all duration-300 ease-in group-hover:translate-x-0 group-hover:opacity-100 md:inline mr-2'>
                        TryHackMe
                    </span>
                    <span>
                        <FaArrowRight className='-rotate-45 transition-transform duration-300 group-hover:rotate-0' />
                    </span>
                </Anchor>
            </div>
        </Card>
    );
}
