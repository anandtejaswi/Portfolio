'use client';

import { useMemo, useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import GridLayout from '@/components/grid/layout';
import GridItem from '@/components/grid/item';
import { gridItems, layouts as initialLayouts } from '@/config/grid';
import { FaLock, FaLockOpen } from 'react-icons/fa6';
import { FiSun, FiMoon } from 'react-icons/fi';
import { FaArrowRight } from 'react-icons/fa6';

export default function FilterableGrid() {
    const [filter, setFilter] = useState<'all' | 'about' | 'projects'>('all');
    const [locked, setLocked] = useState(false);
    const [introExpanded, setIntroExpanded] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();

    // Toggle a class on <body> so our CSS cursor override always wins
    useEffect(() => {
        if (locked) {
            document.body.classList.add('layout-locked');
        } else {
            document.body.classList.remove('layout-locked');
        }
        return () => document.body.classList.remove('layout-locked');
    }, [locked]);

    const filteredItems = gridItems.filter(
        (item) => filter === 'all' || item.category === filter
    );

    const currentLayouts = useMemo(() => {
        const result: any = { lg: [], md: [], sm: [], xs: [], xxs: [] };
        ['lg', 'md', 'sm', 'xs', 'xxs'].forEach((breakpoint) => {
            const bp = breakpoint as keyof typeof initialLayouts;
            result[bp] = initialLayouts[bp]
                .filter(l => filteredItems.some(item => item.i === l.i))
                .map(l => {
                    if (l.i === 'intro' && introExpanded) {
                        // expand to full width (4 cols on lg/md, 2 on sm) and 3 rows tall
                        const fullW = (breakpoint === 'sm' || breakpoint === 'xs' || breakpoint === 'xxs') ? 2 : 4;
                        return { ...l, x: 0, w: fullW, h: 3 };
                    }
                    return l;
                });
        });
        return result;
    }, [filteredItems, introExpanded]);

    const pillBase = 'px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm font-medium transition-all duration-200';
    const pillActive = 'bg-black text-white dark:bg-white dark:text-black';
    const pillInactive = 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white';

    return (
        <div className='flex flex-col gap-4'>

            {/* ── Navigation bar ── */}
            <nav className='sticky top-3 z-50 mx-auto flex max-w-[95vw] sm:max-w-none items-center justify-center gap-0.5 md:gap-1 rounded-full border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-[#111]/80 backdrop-blur-md px-1.5 py-1.5 md:px-2 md:py-1.5 shadow-sm'>

                {/* Filter pills */}
                <div className='flex items-center gap-0.5'>
                    {(['all', 'about', 'projects'] as const).map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`${pillBase} ${filter === f ? pillActive : pillInactive}`}
                        >
                            {f.charAt(0).toUpperCase() + f.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Divider */}
                <span className='w-px h-4 md:h-5 bg-gray-200 dark:bg-gray-700 mx-0.5 md:mx-1' />

                {/* Lock Layout toggle */}
                <button
                    onClick={() => setLocked((l) => !l)}
                    className={`flex items-center justify-center gap-1.5 px-2 md:px-4 py-1.5 rounded-full text-xs md:text-sm font-medium border transition-all duration-200 ${
                        locked
                            ? 'border-black dark:border-white text-black dark:text-white bg-transparent'
                            : 'border-transparent md:border-gray-300 dark:md:border-gray-600 text-gray-500 dark:text-gray-400 hover:border-gray-500 dark:hover:border-gray-400'
                    }`}
                    aria-label={locked ? 'Unlock layout' : 'Lock layout'}
                >
                    {locked ? <FaLock className='w-3 h-3' /> : <FaLockOpen className='w-3 h-3' />}
                    <span className="hidden sm:inline">{locked ? 'Locked' : 'Layout'}</span>
                </button>

                {/* Divider */}
                <span className='w-px h-4 md:h-5 bg-gray-200 dark:bg-gray-700 mx-0.5 md:mx-1' />

                {/* Dark / Light mode toggle */}
                <button
                    onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                    className='flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors'
                    aria-label='Toggle theme'
                >
                    {resolvedTheme === 'dark'
                        ? <FiSun className='w-3.5 h-3.5 md:w-4 md:h-4 text-yellow-400' />
                        : <FiMoon className='w-3.5 h-3.5 md:w-4 md:h-4 text-gray-600' />
                    }
                </button>

                {/* Divider */}
                <span className='w-px h-4 md:h-5 bg-gray-200 dark:bg-gray-700 mx-0.5 md:mx-1' />

                {/* Contact link */}
                <a
                    href='mailto:anand.tejaswi05@gmail.com'
                    className='group flex items-center gap-1 px-2 md:px-3 py-1.5 text-xs md:text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors rounded-full'
                >
                    <span className="hidden xs:inline">Contact</span>
                    <FaArrowRight className='w-3 h-3 -rotate-45 transition-transform duration-300 group-hover:rotate-0' />
                </a>
            </nav>

            {/* ── Grid ── */}
            <GridLayout layouts={currentLayouts} locked={locked}>
                {filteredItems.map((item) => (
                    <div key={item.i}>
                        <GridItem
                            id={item.i}
                            component={item.component}
                            isExpanded={item.i === 'intro' ? introExpanded : false}
                            isExpandable={false}
                            onToggle={item.i === 'intro' ? () => setIntroExpanded(v => !v) : undefined}
                            locked={locked}
                            className='size-full'
                        />
                    </div>
                ))}
            </GridLayout>
        </div>
    );
}
