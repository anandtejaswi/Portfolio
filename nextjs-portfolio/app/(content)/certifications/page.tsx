import Container from '@/components/ui/container';
import Anchor from '@/components/ui/anchor';
import { FaX } from 'react-icons/fa6';
import Image from 'next/image';
import { siteConfig } from '@/config/site';

export const metadata = {
    title: `Certifications & Achievements — ${siteConfig.author}`,
    description: 'A collection of my certifications and achievements.',
};

export default function CertificationsPage() {
    return (
        <>
            <header className='flex items-center justify-center pt-10'>
                <Anchor className='inline-flex hover:mb-6 hover:scale-125 transition-all' href='/'>
                    <FaX />
                    <div className='sr-only'>Close</div>
                </Anchor>
            </header>

            <main>
                <Container as='article' className='py-10 max-w-5xl'>
                    <h1 className='font-bold text-4xl md:text-5xl tracking-tight mb-12 leading-tight text-center md:text-left'>
                        Certifications & Achievements
                    </h1>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {/* Cert 1 */}
                        <div className='flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-gray-50 dark:bg-[#111] p-6 rounded-2xl border border-gray-200 dark:border-gray-800 transition-all hover:shadow-lg'>
                            <div className='shrink-0'>
                                <Image 
                                    src='/images/fd_program.png' 
                                    alt='FD Program' 
                                    width={140} 
                                    height={100} 
                                    className='rounded-xl object-cover shadow-sm' 
                                />
                            </div>
                            <div className='flex flex-col gap-2 text-center sm:text-left'>
                                <h3 className='font-bold text-xl leading-snug'>
                                    FD Program on Quantum Computing and Post Quantum Cryptography
                                </h3>
                                <p className='text-gray-600 dark:text-gray-400 text-sm'>
                                    Organized by University of Delhi, CDAC and NIT Patna
                                </p>
                            </div>
                        </div>

                        {/* Cert 2 */}
                        <div className='flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-gray-50 dark:bg-[#111] p-6 rounded-2xl border border-gray-200 dark:border-gray-800 transition-all hover:shadow-lg'>
                            <div className='shrink-0'>
                                <Image 
                                    src='/images/anhad.png' 
                                    alt='GenAI Hackathon' 
                                    width={140} 
                                    height={100} 
                                    className='rounded-xl object-cover shadow-sm' 
                                />
                            </div>
                            <div className='flex flex-col gap-2 text-center sm:text-left'>
                                <h3 className='font-bold text-xl leading-snug'>
                                    GenAI Hackathon (Anhad&apos;25) - Team Member
                                </h3>
                                <p className='text-gray-600 dark:text-gray-400 text-sm'>
                                    Organized by IIT Jammu
                                </p>
                            </div>
                        </div>

                        {/* Cert 3 */}
                        <div className='flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-gray-50 dark:bg-[#111] p-6 rounded-2xl border border-gray-200 dark:border-gray-800 transition-all hover:shadow-lg'>
                            <div className='shrink-0'>
                                <Image 
                                    src='/images/ai-war.png' 
                                    alt='AI-War' 
                                    width={140} 
                                    height={100} 
                                    className='rounded-xl object-cover shadow-sm' 
                                />
                            </div>
                            <div className='flex flex-col gap-2 text-center sm:text-left'>
                                <h3 className='font-bold text-xl leading-snug'>
                                    AI-War (3rd Position)
                                </h3>
                                <p className='text-gray-600 dark:text-gray-400 text-sm'>
                                    Organized by IEEE Student Branch, Faculty of Technology, UoD
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </main>
        </>
    );
}
