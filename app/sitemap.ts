import { siteConfig } from '@/config/site';
import { getAllProjects } from '@/utils/mdx';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = [''].map((route) => ({
        url: `${siteConfig.url}${route}`,
        lastModified: new Date(),
    }));



    const projects = getAllProjects().map((projects) => ({
        url: `${siteConfig.url}/projects/${projects.slug}`,
        lastModified: new Date(),
    }));

    return [...routes, ...projects];
}
