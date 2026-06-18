import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa6';

export const metadata: Metadata = {
    title: 'About | Tejaswi Anand',
    description: 'Learn more about Tejaswi Anand, a Computer Engineering undergrad focused on cybersecurity and software development.',
};

export default function AboutPage() {
    return (
        <div className="min-h-screen py-16 px-6 sm:px-12 max-w-4xl mx-auto">
            <Link 
                href="/" 
                className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:hover:text-white mb-10 transition-colors"
            >
                <FaArrowLeft className="w-4 h-4" /> Back to Portfolio
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-black dark:text-white">
                About Me
            </h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none text-justify">
                <p>
                    I am a Computer Science engineering undergrad focused on cybersecurity and software development. 
                    I lead teams to build practical tools, including a web application that automates exam applications 
                    and a security system that analyzed over 220 GB of network data to detect and block threats. 
                </p>
                <p>
                    Currently I am conducting research at Delhi University on new methods to securely transmit digital images.
                </p>
                
                {/* Expand upon this section later as requested by the user or as they add more content */}
                <h2 className="text-2xl font-semibold mt-10 mb-4">My Approach</h2>
                <p>
                    I believe in bridging the gap between elegant software design and robust, secure architectures. Whether it's 
                    developing a full-stack application or architecting a threat-detection system, my goal is to create solutions 
                    that are not only highly functional but also secure by design.
                </p>
            </div>
        </div>
    );
}
