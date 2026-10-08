import Link from 'next/link';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

import Card from '../../ui/card';

interface ExperienceEntry {
    role: string;
    org: string;
    period: string;
    points: React.ReactNode[];
    link?: string;
}

const EXPERIENCES: ExperienceEntry[] = [
    {
        role: 'Software Engineer Intern',
        org: 'Nowlez: AI Munshi',
        period: 'Jul 2026 — Present',
        points: [
            <>Re-designed and unified authentication by migrating fragmented Email/Phone + OTP/Password and Google OAuth flows to <strong>Supabase Auth</strong> and <strong>PostgreSQL</strong>, centralizing session management and enforcing <strong>dual verification</strong>.</>,
            <>Engineered a secure, ephemeral <strong>sandbox-based backend</strong> enabling the AI assistant to autonomously execute scripts to generate, edit, and convert legal documents using <strong>Gemini models</strong>.</>,
            <>Architected an <strong>asynchronous background research subagent</strong> that executes long-running tasks on isolated worker slots and triggers <strong>webhook wake-ups</strong> to the main orchestrator, ensuring <strong>zero UI blocking</strong>.</>,
            <>Built the core delivery infrastructure connecting a self-deployed <strong>LangGraph Agent Server</strong> to the client via webhooks, processing real-time chat events and <strong>Human-in-the-Loop (HITL)</strong> confirmations.</>,
            <>Configured a <strong>multi-IP request-routing architecture</strong> across 6 public IPs on a VPS to bypass strict per-IP rate constraints, increasing e-Courts API throughput by <strong>6&times;</strong>.</>,
            <>Integrated the <strong>assistant-ui</strong> React library for multi-turn chat state management, and optimized the landing page to a <strong>"97" Lighthouse score</strong> alongside <strong>GA4/Hotjar</strong> integration.</>
        ]
    },
    {
        role: 'Summer Research Intern',
        org: 'SoCSE, RV University, Bangalore',
        period: 'Jun 2026 — Jul 2026 · 2 mos',
        link: 'https://github.com/anandtejaswi/RVU-Internship-Secure-IOT',
        points: [
            <>Worked on the Problem Statement- <strong>"Secure Routing Protocol for IoT Networks using lightweight cryptography."</strong></>,
            <>Simulated multiple IoT nodes and topologies in the <strong>NS-3 simulator</strong>.</>,
            <>Simulated <strong>Replay, Eavesdropping, Sinkhole</strong>, and other attacks on a 100-node mesh topology.</>,
            <>Implemented mitigations including <strong>Hop-by-Hop Encryption</strong> and <strong>Trust-Based Parent Selection</strong>.</>
        ]
    }
];

export default function Experience() {
    return (
        <Card className='group flex flex-col bg-[#eaf9ee] dark:bg-[#0f2818] h-full border border-black/5 dark:border-white/5 p-0'>
            <div className='flex flex-col gap-6 px-8 py-5 my-[2.5%] flex-1 min-h-0 overflow-y-auto custom-scrollbar'>
                <div>
                    <p className='text-sm text-gray-400 dark:text-gray-500 mb-1'>My journey so far</p>
                    <h2 className='font-bold text-2xl text-black dark:text-white'>Experience</h2>
                </div>
                <ol className='relative flex flex-col gap-6 flex-1 border-l border-gray-200 dark:border-gray-700 pl-5'>
                    {EXPERIENCES.map((exp) => (
                        <li key={`${exp.org}-${exp.role}`} className='relative'>
                            <span className='absolute -left-[26px] top-1 size-3 rounded-full bg-[#f5f5f5] dark:bg-[#2b2b2b] border-2 border-gray-300 dark:border-gray-600' />
                            <div className='flex flex-col gap-1'>
                                <div className='flex flex-wrap items-baseline justify-between gap-x-2 gap-y-0.5'>
                                    <h3 className='text-sm font-semibold text-black dark:text-white'>{exp.role}</h3>
                                    <span className='text-xs text-gray-400 dark:text-gray-500 whitespace-nowrap'>{exp.period}</span>
                                </div>
                                <p className='flex flex-wrap items-center gap-x-1.5 text-sm font-medium text-gray-700 dark:text-gray-300'>
                                    {exp.org}
                                    {exp.link && (
                                        <Link
                                            href={exp.link}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            aria-label={`View the ${exp.role} project repository on GitHub`}
                                            title='View repository on GitHub'
                                            className='cancel-drag inline-flex items-center text-gray-400 hover:text-blue-600 dark:text-gray-500 dark:hover:text-blue-400 transition-colors'>
                                            <FaArrowUpRightFromSquare className='size-3' />
                                        </Link>
                                    )}
                                </p>
                                <ul className='mt-1 flex list-disc flex-col gap-1.5 pl-4 marker:text-gray-300 dark:marker:text-gray-600'>
                                    {exp.points.map((point, idx) => (
                                        <li key={idx} className='text-sm leading-relaxed text-[#4a4a4a] dark:text-gray-400'>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </Card>
    );
}
