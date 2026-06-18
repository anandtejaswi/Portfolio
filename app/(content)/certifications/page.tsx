import Container from '@/components/ui/container';
import Anchor from '@/components/ui/anchor';
import { FaX } from 'react-icons/fa6';
import { siteConfig } from '@/config/site';
import CertCard from './CertCard';

export const metadata = {
    title: 'Certifications & Achievements',
    description: 'Certifications and achievements of Tejaswi Anand — including Quantum Computing, GenAI Hackathon at IIT Jammu, and AI-War competition (3rd Position) at IEEE Delhi University.',
    keywords: ['Tejaswi Anand certifications', 'Quantum Computing certificate', 'GenAI Hackathon IIT Jammu', 'AI-War IEEE Delhi', 'cybersecurity achievements'],
    authors: [{ name: siteConfig.author, url: siteConfig.url }],
    openGraph: {
        title: 'Certifications & Achievements — Tejaswi Anand',
        description: 'Certifications and achievements of Tejaswi Anand including Quantum Computing, GenAI Hackathon at IIT Jammu, and AI-War competition.',
        url: `${siteConfig.url}/certifications`,
        images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: 'Tejaswi Anand Certifications' }],
    },
    twitter: {
        card: 'summary_large_image' as const,
        title: 'Certifications & Achievements — Tejaswi Anand',
        description: 'View the certifications and achievements of Tejaswi Anand.',
        creator: siteConfig.twitterHandle,
    },
    alternates: { canonical: `${siteConfig.url}/certifications` },
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
                            imageSrc='/images/fd_program.jpg'
                            title='FD Program on Quantum Computing and Post Quantum Cryptography'
                            description='Organized by University of Delhi, CDAC and NIT Patna'
                        />

                        {/* Cert 2 */}
                        <CertCard 
                            imageSrc='/images/anhad.jpg'
                            title="GenAI Hackathon (Anhad'25) - Team Member"
                            description='Organized by IIT Jammu'
                        />

                        {/* Cert 3 */}
                        <CertCard 
                            imageSrc='/images/ai-war.jpg'
                            title='AI-War (3rd Position)'
                            description='Organized by IEEE Student Branch, Faculty of Technology, UoD'
                        />
                    </div>
                </Container>
            </main>
        </>
    );
}
