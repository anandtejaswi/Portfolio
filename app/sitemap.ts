import { siteConfig } from '@/config/site';
import { getAllProjects } from '@/utils/mdx';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: siteConfig.url,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1.0,
        },
        {
            url: `${siteConfig.url}/certifications`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ];

    const projects: MetadataRoute.Sitemap = getAllProjects().map((project) => ({
        url: `${siteConfig.url}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9,
    }));

    return [...staticRoutes, ...projects];
}
