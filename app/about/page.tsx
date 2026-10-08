import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa6';

export const metadata: Metadata = {
    title: 'About | Tejaswi Anand',
    description: 'Learn more about Tejaswi Anand, Computer Science undergraduate at Delhi University specializing in software engineering, AI systems, and cybersecurity.',
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
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
                About Me
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
                Software Engineer, AI Developer, and Cybersecurity Undergrad based in Delhi, India.
            </p>
            
            <div className="prose prose-lg dark:prose-invert max-w-none text-justify space-y-8">
                <section>
                    <h2 className="text-2xl font-semibold text-black dark:text-white mb-3">Overview</h2>
                    <p>
                        I am a Computer Science undergraduate at the Faculty of Technology, University of Delhi (Class of 2028), specializing in Blockchain, Cybersecurity, and Cryptography.
                    </p>
                    <p>
                        My work centers on building dependable, production-ready software. I focus on developing full-stack web applications, autonomous AI workflows, and practical security systems. I prefer writing clean, maintainable code with clear deterministic logic over adding unnecessary architectural complexity.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-black dark:text-white mb-3">AI & Software Engineering</h2>
                    <p>
                        In my current role as a Software Engineer Intern at Nowlez (AI Munshi), I work across AI systems and backend infrastructure:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>
                            <strong>Document Drafting Engines:</strong> Designed isolated, sandbox-based execution environments that allow AI models (Gemini) to safely generate, edit, and convert complex legal documents into Word and PDF formats.
                        </li>
                        <li>
                            <strong>Asynchronous Agent Architectures:</strong> Built background research subagents with isolated worker slots and webhook-based notification loops, keeping the user interface completely unblocked during long-running tasks.
                        </li>
                        <li>
                            <strong>Event-Driven Infrastructure:</strong> Deployed self-hosted LangGraph Agent Servers connected via webhooks to handle real-time chat turns, multi-message states, and human-in-the-loop confirmations.
                        </li>
                        <li>
                            <strong>Unified Authentication:</strong> Migrated fragmented authentication systems into a centralized Supabase Auth and PostgreSQL architecture with enforced dual email and phone verification.
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-black dark:text-white mb-3">Key Projects</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-xl font-semibold text-black dark:text-white">AKTU DAA RAG System</h3>
                            <p>
                                A hybrid Retrieval-Augmented Generation (RAG) platform built for algorithm analysis coursework. It incorporates a dual-engine query classifier, dynamic regex-guided chunking, and Reciprocal Rank Fusion (fusing dense vector search and sparse BM25) to accurately answer student queries without hallucinations. Included 9 deterministic Python solvers to ensure mathematical precision on complex dynamic programming questions.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-black dark:text-white">Project Eligify</h3>
                            <p>
                                An automated academic eligibility and marksheet verification platform. Built a multi-stage fallback parsing pipeline using PyPDF2, Tesseract OCR, and OpenCV image preprocessing to reliably extract scores and percentages from non-standard CBSE, state-board, and university marksheets.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-black dark:text-white">DeepFake Audio Detection</h3>
                            <p>
                                An event-driven pipeline that screens forwarded voice notes for synthetic speech using a 3-signal ensemble (AASIST graph-attention network, wav2vec2 embeddings, and audio metadata heuristics), running inference efficiently on CPU. Secured 3rd place among 50+ teams in the IEEE AI War competition.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-black dark:text-white mb-3">Systems & Security Research</h2>
                    <p>
                        During a summer research internship at SoCSE, RV University, I researched lightweight cryptography for Internet of Things (IoT) networks:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>
                            Designed <strong>SecureRPL</strong>, a lightweight security extension for the standard IETF RPL routing protocol (RFC 6550), integrating ChaCha20-Poly1305 authenticated encryption, replay protection, and trust-based routing into an embedded-friendly footprint.
                        </li>
                        <li>
                            Simulated multi-node mesh topologies in the NS-3 network simulator, benchmarking mitigations against sinkhole, replay, and node-capture attacks.
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-black dark:text-white mb-3">Community & Leadership</h2>
                    <p>
                        I led the organizing team for <strong>CityJS New Delhi</strong> at the Faculty of Technology, coordinating with 20+ speakers, sponsors, and partners while managing a 15-person volunteer team to deliver a 200-attendee tech conference.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-black dark:text-white mb-3">Engineering Philosophy</h2>
                    <p>
                        I value simplicity, deterministic correctness, and security by design. When building software, I focus on understanding the underlying constraints before choosing the tools—whether that means replacing probabilistic LLM outputs with precise algorithms or building resilient backends with solid fallback strategies.
                    </p>
                </section>
            </div>
        </div>
    );
}
