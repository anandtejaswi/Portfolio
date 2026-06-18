'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { createPortal } from 'react-dom';
import { FaX } from 'react-icons/fa6';

interface CertCardProps {
    imageSrc: string;
    title: string;
    description: string;
}

export default function CertCard({ imageSrc, title, description }: CertCardProps) {
    const [isOpen, setIsOpen] = useState(false);

    // Lock body scroll while open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            return () => { document.body.style.overflow = ''; };
        }
    }, [isOpen]);

    // Close on Escape key
    useEffect(() => {
        if (!isOpen) return;
        const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsOpen(false); };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [isOpen]);

    return (
        <>
            <div 
                className='flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-gray-50 dark:bg-[#111] p-6 rounded-2xl border border-gray-200 dark:border-gray-800 transition-all hover:shadow-lg cursor-pointer hover:border-gray-300 dark:hover:border-gray-700'
                onClick={() => setIsOpen(true)}
            >
                <div className='shrink-0 group relative'>
                    <Image 
                        src={imageSrc} 
                        alt={title} 
                        width={140} 
                        height={100} 
                        className='rounded-xl object-cover shadow-sm transition-transform duration-300 group-hover:scale-105' 
                    />
                </div>
                <div className='flex flex-col gap-2 text-center sm:text-left'>
                    <h3 className='font-bold text-xl leading-snug'>
                        {title}
                    </h3>
                    <p className='text-gray-600 dark:text-gray-400 text-sm'>
                        {description}
                    </p>
                </div>
            </div>

            {isOpen && createPortal(
                <div
                    className='fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-[3px] p-4 sm:p-10'
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className='relative bg-white dark:bg-[#111] rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center'
                        style={{ maxWidth: '100%', maxHeight: '100%' }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className='absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors'
                            onClick={() => setIsOpen(false)}
                            aria-label='Close certificate'
                        >
                            <FaX className='w-4 h-4' />
                        </button>
                        <img
                            src={imageSrc}
                            alt={`${title} — enlarged`}
                            style={{ maxWidth: '100%', maxHeight: '85vh', objectFit: 'contain', display: 'block' }}
                        />
                    </div>
                </div>,
                document.body
            )}
        </>
    );
}
