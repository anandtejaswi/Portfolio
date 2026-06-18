'use client';
import { useState, useEffect } from 'react';

import profile from '@/public/images/tejaswianand.jpg';
import Image from 'next/image';
import Card from '../../ui/card';
import { siteConfig } from '@/config/site';

const DESCRIPTION = "I am a Computer Science engineering undergrad focused on cybersecurity and software development. I lead teams to build practical tools, including a web application that automates exam applications and a security system that analyzed over 220 GB of network data to detect and block threats. Currently I am conducting research at Delhi University on new methods to securely transmit digital images.";

const TAGS = ['C Language', 'Python', 'Cybersecurity', 'AI/ML', 'UI/UX Design'];
const ROLES = ['Developer', 'Cybersecurity Engineer', 'Designer'];

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
            {ROLES.map((role, i) => (
                <span
                    key={role}
                    className={`col-start-1 row-start-1 transition-all duration-500 ease-in-out ${
                        i === index
                            ? 'opacity-100 translate-y-0'
                            : i === (index - 1 + ROLES.length) % ROLES.length
                            ? 'opacity-0 translate-y-full'
                            : 'opacity-0 -translate-y-full'
                    }`}
                >
                    {role}
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
                        alt={siteConfig.title}
                        fill
                        sizes='96px'
                        priority
                        className='object-cover transition-transform duration-500 ease-in-out group-hover:scale-110'
                    />
                </div>

                {/* Name + role */}
                <div>
                    <p className='font-bold text-[22px] leading-tight'>Tejaswi Anand</p>
                    <p className='text-[15px] text-gray-500 dark:text-gray-400 mt-0.5'>
                        Computer Engineering Student
                    </p>
                </div>
            </div>

            {/* Description */}
            <div className='flex flex-col gap-2 flex-1 overflow-y-auto no-scrollbar'>
                <div className="font-semibold text-[17px] text-gray-800 dark:text-gray-200 flex items-center gap-1.5 shrink-0">
                    <span>I am a</span>
                    <span className="text-blue-600 dark:text-blue-400"><RoleRotator /></span>
                </div>
                <p className='text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 text-justify'>
                    {DESCRIPTION}
                </p>
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
