import { siteConfig } from '@/config/site';
import { pixelifySans, poppins } from '@/utils/fonts';
import { cn } from '@/utils/lib';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { ThemeProvider } from './providers';
import Script from 'next/script';

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import './globals.css';

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: siteConfig.title,
        template: '%s | Tejaswi Anand',
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.author, url: siteConfig.url }],
    creator: siteConfig.author,
    publisher: siteConfig.author,
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        title: siteConfig.title,
        description: siteConfig.description,
        url: siteConfig.url,
        siteName: 'Tejaswi Anand Portfolio',
        locale: 'en_US',
        type: 'profile',
        firstName: 'Tejaswi',
        lastName: 'Anand',
        username: 'anandtejaswi',
        gender: 'male',
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: 'Tejaswi Anand — Cybersecurity Engineer & Developer Portfolio',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: siteConfig.title,
        description: siteConfig.description,
        creator: siteConfig.twitterHandle,
        images: [
            {
                url: siteConfig.ogImage,
                alt: 'Tejaswi Anand — Cybersecurity Engineer & Developer Portfolio',
            },
        ],
    },
    alternates: {
        canonical: siteConfig.url,
    },
    category: 'technology',
};

const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Tejaswi Anand',
    url: siteConfig.url,
    image: `${siteConfig.url}/images/tejaswianand.jpg`,
    jobTitle: 'Cybersecurity Engineer & B.Tech Student',
    description: siteConfig.description,
    alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'Faculty of Technology, University of Delhi',
        url: 'https://www.du.ac.in',
    },
    knowsAbout: ['Cybersecurity', 'Python', 'C Language', 'AI/ML', 'Full-Stack Development', 'Network Security', 'UI/UX Design'],
    sameAs: [
        'https://github.com/anandtejaswi',
        'https://linkedin.com/in/anandtejaswi',
        'https://tryhackme.com/p/anand.tejaswi05',
    ],
    email: 'anand.tejaswi05@gmail.com',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang='en' suppressHydrationWarning>
            <head>
                <link rel="preconnect" href="https://tryhackme.com" crossOrigin="anonymous" />
            </head>
            <body className={cn(poppins.className, pixelifySans.variable, 'dark:bg-dark-950 bg-gray-100 antialiased')}>
                <Script
                    id='person-jsonld'
                    type='application/ld+json'
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
                    strategy='beforeInteractive'
                />
                <ThemeProvider attribute='class' enableSystem={false}>
                    {children}
                </ThemeProvider>
                <Analytics />
            </body>
        </html>
    );
}
