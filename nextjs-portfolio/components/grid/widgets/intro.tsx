'use client';

import profile from '@/public/images/tejaswianand.png';
import Image from 'next/image';
import Card from '../../ui/card';
import { siteConfig } from '@/config/site';
import { FaChevronDown, FaChevronUp, FaX } from 'react-icons/fa6';

const BIO = "I'm a B.Tech sophomore at the Faculty of Technology, University of Delhi, interested in Programming, Science, and Cyber Security. Currently diving deep into Computer Engineering. I'm also a passionate graphic designer blending creativity with purpose.";

const SHORT_BIO = "I'm a B.Tech sophomore at the Faculty of Technology, University of Delhi, interested in Programming, Science, and Cyber Security.";

const TAGS = ['C Language', 'Python', 'Cybersecurity', 'AI/ML', 'UI/UX Design'];

export default function Intro({
    isExpanded,
    onToggle,
}: {
    isExpanded?: boolean;
    onToggle?: () => void;
}) {
    // ── EXPANDED: full-width horizontal layout ──
    if (isExpanded) {
        return (
            <Card className='relative flex flex-row items-center gap-10 p-10 bg-sky-100 dark:bg-[#112a46] text-gray-900 dark:text-white overflow-hidden h-full'>

                {/* Large circular avatar on the left */}
                <div className='relative shrink-0 w-52 h-52 overflow-hidden rounded-full ring-2 ring-gray-200 dark:ring-white/10'>
                    <Image
                        src={profile}
                        alt={siteConfig.title}
                        fill
                        sizes='220px'
                        priority
                        className='object-cover grayscale'
                    />
                </div>

                {/* Right: name, role, full bio, tags */}
                <div className='flex flex-col gap-4 min-w-0'>
                    <div>
                        <h2 className='font-bold text-2xl leading-tight'>Tejaswi Anand</h2>
                        <p className='text-sm text-gray-500 dark:text-gray-400 mt-0.5'>
                            Computer Engineering Student &amp; Developer
                        </p>
                    </div>
                    <p className='text-sm leading-relaxed text-gray-700 dark:text-gray-300 max-w-lg'>
                        {BIO}
                    </p>
                    <div className='flex flex-wrap gap-2'>
                        {TAGS.map((tag) => (
                            <span
                                key={tag}
                                className='px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-white/10'
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Collapse chevron — top right */}
                <button
                    className='cancel-drag absolute top-4 right-4 p-2 rounded-full bg-gray-200/70 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/20 text-gray-500 dark:text-gray-300 transition-all cursor-pointer'
                    onClick={onToggle}
                    aria-label='Collapse'
                    style={{ cursor: 'pointer' }}
                >
                    <FaX className='w-3 h-3' />
                </button>
            </Card>
        );
    }

    // ── COLLAPSED: vertical stacked layout ──
    return (
        <Card className='relative flex flex-col gap-5 p-7 bg-sky-100 dark:bg-[#112a46] text-gray-900 dark:text-white overflow-hidden h-full'>

            {/* Small circular avatar */}
            <div className='relative size-16 shrink-0 overflow-hidden rounded-full ring-2 ring-gray-200 dark:ring-white/10'>
                <Image
                    src={profile}
                    alt={siteConfig.title}
                    fill
                    sizes='72px'
                    priority
                    className='object-cover grayscale'
                />
            </div>

            {/* Name + role */}
            <div>
                <p className='font-bold text-xl leading-tight'>Tejaswi Anand</p>
                <p className='text-sm text-gray-500 dark:text-gray-400 mt-0.5'>
                    Computer Engineering Student &amp; Developer
                </p>
            </div>

            {/* Short bio with "..." */}
            <p className='text-sm leading-relaxed text-gray-700 dark:text-gray-300'>
                {SHORT_BIO}
                <span className='text-gray-400 dark:text-gray-500'>&nbsp;...</span>
            </p>

            {/* Tags */}
            <div className='flex flex-wrap gap-2'>
                {TAGS.map((tag) => (
                    <span
                        key={tag}
                        className='px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-white/10'
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Expand chevron — bottom center */}
            <button
                className='cancel-drag absolute bottom-3 left-1/2 -translate-x-1/2 p-1.5 rounded-full bg-gray-200/60 dark:bg-white/10 hover:bg-gray-300/70 dark:hover:bg-white/20 text-gray-500 dark:text-gray-300 transition-all'
                onClick={onToggle}
                aria-label='Expand'
                style={{ cursor: 'pointer' }}
            >
                <FaChevronDown className='w-3.5 h-3.5' />
            </button>
        </Card>
    );
}
