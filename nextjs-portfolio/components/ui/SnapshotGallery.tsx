'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FaX } from 'react-icons/fa6';

interface Snapshot {
    i: string;
    url: string;
}

function Lightbox({ selected, title, onClose }: { selected: Snapshot; title: string; onClose: () => void }) {
    // Lock body scroll while open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = ''; };
    }, []);

    // Close on Escape key
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [onClose]);

    return createPortal(
        <div
            className='fixed inset-0 z-[9999] flex items-center justify-center bg-black/55 backdrop-blur-[2px]'
            onClick={onClose}
        >
            <div
                className='relative bg-white dark:bg-[#111] rounded-2xl overflow-hidden shadow-2xl'
                style={{ maxWidth: '62vw', maxHeight: '72vh' }}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className='absolute top-3 right-3 z-10 p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white transition-colors'
                    onClick={onClose}
                    aria-label='Close snapshot'
                >
                    <FaX className='w-4 h-4' />
                </button>
                <img
                    src={selected.url}
                    alt={`${title} — enlarged`}
                    style={{ maxWidth: '100%', maxHeight: '72vh', objectFit: 'contain', display: 'block' }}
                />
            </div>
        </div>,
        document.body   // ← rendered outside any transformed parent
    );
}

export default function SnapshotGallery({ images, title }: { images: Snapshot[]; title: string }) {
    const [selected, setSelected] = useState<Snapshot | null>(null);

    return (
        <>
            <h2 className='font-bold text-2xl mb-6 tracking-tight'>Snapshots</h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                {images.map((image, idx) => (
                    <div
                        key={image.i}
                        className={`group relative bg-gray-100 dark:bg-[#1a1a1a] rounded-xl overflow-hidden cursor-pointer border border-gray-200 dark:border-gray-800 ${
                            idx === 0 ? 'sm:col-span-2' : ''
                        }`}
                        onClick={() => setSelected(image)}
                    >
                        <img
                            src={image.url}
                            alt={`${title} snapshot ${idx + 1}`}
                            draggable={false}
                            className='w-full h-auto block transition-transform duration-400 group-hover:scale-[1.02]'
                        />
                        <div className='absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300' />
                    </div>
                ))}
            </div>

            {selected && <Lightbox selected={selected} title={title} onClose={() => setSelected(null)} />}
        </>
    );
}
