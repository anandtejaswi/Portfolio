import { Intro, Eligify, Anomalyze, SolarSwing, Certs, TryHackMe, Contact, Github, Resume, Skills } from '@/components/grid/widgets';
import { Layout } from 'react-grid-layout';

interface GridItem {
    i: string;
    component: React.ComponentType;
    category: 'about' | 'projects';
}

export const gridItems: GridItem[] = [
    { i: 'intro', component: Intro, category: 'about' },
    { i: 'eligify', component: Eligify, category: 'projects' },
    { i: 'anomalyze', component: Anomalyze, category: 'projects' },
    { i: 'solarswing', component: SolarSwing, category: 'projects' },
    { i: 'certs', component: Certs, category: 'about' },
    { i: 'tryhackme', component: TryHackMe, category: 'about' },
    { i: 'contact', component: Contact, category: 'about' },
    { i: 'github', component: Github, category: 'about' },
    { i: 'resume', component: Resume, category: 'about' },
    { i: 'skills', component: Skills, category: 'about' },
];

type Layouts = 'lg' | 'md' | 'sm' | 'xs' | 'xxs';

export const layouts: { [key in Layouts]: Layout[] } = {
    lg: [
        { i: 'intro', x: 0, y: 0, w: 2, h: 2 },
        { i: 'resume', x: 2, y: 0, w: 1, h: 2 },
        { i: 'certs', x: 3, y: 0, w: 1, h: 1 },
        { i: 'contact', x: 3, y: 1, w: 1, h: 1 },
        { i: 'tryhackme', x: 0, y: 2, w: 2, h: 1 },
        { i: 'skills', x: 2, y: 2, w: 2, h: 2 },
        { i: 'github', x: 0, y: 3, w: 1, h: 1 },
        { i: 'eligify', x: 1, y: 3, w: 1, h: 3 },
        { i: 'anomalyze', x: 0, y: 4, w: 1, h: 3 },
        { i: 'solarswing', x: 2, y: 4, w: 1, h: 3 },
    ],
    md: [
        { i: 'intro', x: 0, y: 0, w: 2, h: 2 },
        { i: 'resume', x: 2, y: 0, w: 1, h: 2 },
        { i: 'certs', x: 3, y: 0, w: 1, h: 1 },
        { i: 'contact', x: 3, y: 1, w: 1, h: 1 },
        { i: 'tryhackme', x: 0, y: 2, w: 2, h: 1 },
        { i: 'skills', x: 2, y: 2, w: 2, h: 2 },
        { i: 'github', x: 0, y: 3, w: 1, h: 1 },
        { i: 'eligify', x: 1, y: 3, w: 1, h: 3 },
        { i: 'anomalyze', x: 0, y: 4, w: 1, h: 3 },
        { i: 'solarswing', x: 2, y: 4, w: 1, h: 3 },
    ],
    sm: [
        { i: 'intro', x: 0, y: 0, w: 2, h: 4 },
        { i: 'resume', x: 0, y: 4, w: 1, h: 2 },
        { i: 'certs', x: 1, y: 4, w: 1, h: 1 },
        { i: 'contact', x: 1, y: 5, w: 1, h: 1 },
        { i: 'tryhackme', x: 0, y: 6, w: 2, h: 1 },
        { i: 'skills', x: 0, y: 7, w: 2, h: 4 },
        { i: 'github', x: 0, y: 11, w: 1, h: 2 },
        { i: 'eligify', x: 1, y: 11, w: 1, h: 4 },
        { i: 'anomalyze', x: 0, y: 13, w: 1, h: 4 },
        { i: 'solarswing', x: 1, y: 15, w: 1, h: 4 },
    ],
    xs: [
        { i: 'intro', x: 0, y: 0, w: 2, h: 4 },
        { i: 'resume', x: 0, y: 4, w: 1, h: 2 },
        { i: 'certs', x: 1, y: 4, w: 1, h: 1 },
        { i: 'contact', x: 1, y: 5, w: 1, h: 1 },
        { i: 'tryhackme', x: 0, y: 6, w: 2, h: 1 },
        { i: 'skills', x: 0, y: 7, w: 2, h: 4 },
        { i: 'github', x: 0, y: 11, w: 1, h: 2 },
        { i: 'eligify', x: 1, y: 11, w: 1, h: 4 },
        { i: 'anomalyze', x: 0, y: 13, w: 1, h: 4 },
        { i: 'solarswing', x: 1, y: 15, w: 1, h: 4 },
    ],
    xxs: [
        { i: 'intro', x: 0, y: 0, w: 2, h: 4 },
        { i: 'resume', x: 0, y: 4, w: 1, h: 2 },
        { i: 'certs', x: 1, y: 4, w: 1, h: 1 },
        { i: 'contact', x: 1, y: 5, w: 1, h: 1 },
        { i: 'tryhackme', x: 0, y: 6, w: 2, h: 1 },
        { i: 'skills', x: 0, y: 7, w: 2, h: 4 },
        { i: 'github', x: 0, y: 11, w: 1, h: 2 },
        { i: 'eligify', x: 1, y: 11, w: 1, h: 4 },
        { i: 'anomalyze', x: 0, y: 13, w: 1, h: 4 },
        { i: 'solarswing', x: 1, y: 15, w: 1, h: 4 },
    ],
};

export const projectLayouts: { [key in Layouts]: Layout[] } = {
    lg: [
        { i: '1', x: 0, y: 0, w: 2, h: 2 },
        { i: '2', x: 2, y: 0, w: 2, h: 2 },
        { i: '3', x: 0, y: 2, w: 4, h: 2 },
    ],
    md: [
        { i: '1', x: 0, y: 0, w: 4, h: 2 },
        { i: '2', x: 0, y: 2, w: 4, h: 2 },
        { i: '3', x: 0, y: 4, w: 4, h: 2 },
    ],
    sm: [
        { i: '1', x: 0, y: 0, w: 2, h: 2 },
        { i: '2', x: 0, y: 2, w: 2, h: 2 },
        { i: '3', x: 0, y: 4, w: 2, h: 2 },
    ],
    xs: [
        { i: '1', x: 0, y: 0, w: 2, h: 2 },
        { i: '2', x: 0, y: 2, w: 2, h: 2 },
        { i: '3', x: 0, y: 4, w: 2, h: 2 },
    ],
    xxs: [
        { i: '1', x: 0, y: 0, w: 2, h: 2 },
        { i: '2', x: 0, y: 2, w: 2, h: 2 },
        { i: '3', x: 0, y: 4, w: 2, h: 2 },
    ],
};
