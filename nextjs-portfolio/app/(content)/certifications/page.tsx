import Container from '@/components/ui/container';
import Anchor from '@/components/ui/anchor';
import { FaX } from 'react-icons/fa6';
import { siteConfig } from '@/config/site';
import CertCard from './CertCard';

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
                        <CertCard 
                            imageSrc='/images/fd_program.png'
                            title='FD Program on Quantum Computing and Post Quantum Cryptography'
                            description='Organized by University of Delhi, CDAC and NIT Patna'
                        />

                        {/* Cert 2 */}
                        <CertCard 
                            imageSrc='/images/anhad.png'
                            title="GenAI Hackathon (Anhad'25) - Team Member"
                            description='Organized by IIT Jammu'
                        />

                        {/* Cert 3 */}
                        <CertCard 
                            imageSrc='/images/ai-war.png'
                            title='AI-War (3rd Position)'
                            description='Organized by IEEE Student Branch, Faculty of Technology, UoD'
                        />
                    </div>
                </Container>
            </main>
        </>
    );
}
