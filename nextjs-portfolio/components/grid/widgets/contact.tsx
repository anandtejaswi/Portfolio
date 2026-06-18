
import { FaArrowRight } from 'react-icons/fa6';
import Card from '../../ui/card';

export default function Contact() {
    return (
        <Card className='flex flex-col justify-center gap-4 p-8 bg-pink-100 text-pink-950 dark:bg-[#3d1a29] dark:text-pink-100 shadow-sm'>
            <h2 className='font-bold text-xl leading-snug tracking-tight'>Let's build something</h2>
            <div className='flex flex-col gap-2 mt-1'>
                <a
                    className='cancel-drag group flex items-center gap-2 text-base text-pink-800 hover:text-pink-600 dark:text-pink-300 dark:hover:text-pink-100 transition-colors'
                    href='mailto:anand.tejaswi05@gmail.com'>
                    Email me <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
                <a
                    className='cancel-drag group flex items-center gap-2 text-base text-pink-800 hover:text-pink-600 dark:text-pink-300 dark:hover:text-pink-100 transition-colors'
                    href='https://linkedin.com/in/anandtejaswi'
                    target='_blank'
                    rel='noreferrer'>
                    LinkedIn <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
            </div>
        </Card>
    );
}
