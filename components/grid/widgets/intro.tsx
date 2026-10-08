'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';

import profile from '@/public/images/tejaswianand.jpg';
import Image from 'next/image';
import Card from '../../ui/card';
import { siteConfig } from '@/config/site';

const DESCRIPTION = "Hi, I am Tejaswi. My work centers on building dependable software systems: from AI agents and hybrid-search retrieval pipelines to secure network protocols and full-stack web platforms. I have engineered production deployed AI agents using Langchain, LangGraph and Langsmith, researched lightweight cryptography for IoT networks at RV University, and organized developer events like CityJS New Delhi.";

const TAGS = ['Python', 'LangChain', 'Full-Stack', 'Cybersecurity', 'Research'];
const ROLES = [
    { article: 'a', role: 'Software Engineer' },
    { article: 'an', role: 'AI Engineer' },
    { article: 'a', role: 'Cybersecurity Engineer' },
];

function RoleRotator() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % ROLES.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <span className="inline-grid overflow-hidden align-bottom">
            {ROLES.map((item, i) => (
                <span
                    key={item.role}
                    className={`col-start-1 row-start-1 flex items-baseline gap-1.5 transition-all duration-500 ease-in-out ${
                        i === index
                            ? 'opacity-100 translate-y-0'
                            : i === (index - 1 + ROLES.length) % ROLES.length
                            ? 'opacity-0 translate-y-full'
                            : 'opacity-0 -translate-y-full'
                    }`}
                >
                    <span className="text-gray-800 dark:text-gray-200">{item.article}</span>
                    <span className="text-blue-600 dark:text-blue-400">{item.role}</span>
                </span>
            ))}
        </span>
    );
}

export default function Intro() {
    return (
        <Card className='relative flex flex-col gap-5 p-7 bg-sky-100 dark:bg-[#112a46] text-gray-900 dark:text-white h-full'>
            <div className='flex flex-row items-center gap-4 shrink-0'>
                {/* Circular avatar */}
                <div className='cancel-drag group relative size-24 shrink-0 overflow-hidden rounded-full ring-2 ring-gray-200 dark:ring-white/10'>
                    <Image
                        src={profile}
                        alt='Tejaswi Anand — Cybersecurity Engineer and B.Tech Computer Engineering student at Delhi University'
                        fill
                        sizes='96px'
                        priority
                        quality={60}
                        className='object-cover transition-transform duration-500 ease-in-out group-hover:scale-110'
                    />
                </div>

                {/* Name + role */}
                <div>
                    <p className='font-bold text-[22px] leading-tight'>Tejaswi Anand</p>
                    <p className='text-[15px] text-gray-500 dark:text-gray-400 mt-0.5'>
                        Software Engineer
                    </p>
                </div>
            </div>

            {/* Description */}
            <div className='flex flex-col gap-2 flex-1 overflow-y-auto no-scrollbar'>
                <div className="font-semibold text-[17px] text-gray-800 dark:text-gray-200 flex items-center gap-1.5 shrink-0">
                    <span>I am</span>
                    <RoleRotator />
                </div>
                <p className='text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 text-justify'>
                    {DESCRIPTION}
                </p>
                <div className='mt-1'>
                    <Link href="/about" aria-label="Read more about Tejaswi Anand" title="Read more about Tejaswi Anand" className="cancel-drag inline-flex items-center gap-1.5 text-[14px] font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group">
                        Read more about me <FaArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>

            {/* Tags */}
            <div className='flex flex-wrap gap-2 mt-auto shrink-0'>
                {TAGS.map((tag) => (
                    <span
                        key={tag}
                        className='px-3 py-1 rounded-full text-[13px] font-medium bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-white/10'
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </Card>
    );
}
