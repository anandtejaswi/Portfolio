import Container from '@/components/ui/container';
import Anchor from '@/components/ui/anchor';
import { CustomMDX } from '@/components/ui/mdx';
import { siteConfig } from '@/config/site';
import { getAllProjects } from '@/utils/mdx';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { FaArrowRight, FaX, FaGithub } from 'react-icons/fa6';
import SnapshotGallery from '@/components/ui/SnapshotGallery';

type Params = Promise<{ slug: string }>;

export const generateStaticParams = async () => getAllProjects().map((project) => ({ slug: project.slug }));

export const generateMetadata = async ({ params }: { params: Params }) => {
    const { slug } = await params;
    const project = getAllProjects().find((project) => project.slug === slug);
    if (!project) return;
    const { title, description } = project.metadata;
    return {
        title: `${title} — Projects`,
        description,
        openGraph: {
            title, description, type: 'article',
            url: `${siteConfig.url}/projects/${project.slug}`,
            authors: siteConfig.author, images: siteConfig.ogImage,
        },
        twitter: { title, description, images: siteConfig.ogImage },
        alternates: { canonical: `${siteConfig.url}/projects/${project.slug}` },
    };
};

const ProjectPage = async ({ params }: { params: Params }) => {
    const { slug } = await params;
    const project = getAllProjects().find((project) => project.slug === slug);
    if (!project) notFound();

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: project.metadata.title,
        description: project.metadata.description,
        author: [{ '@type': 'Person', name: siteConfig.author, url: siteConfig.url }],
    };

    const links: { name: string; url: string }[] = project.metadata.links
        ? JSON.parse(project.metadata.links) : [];

    const images: { i: string; url: string }[] = project.metadata.images
        ? JSON.parse(project.metadata.images) : [];

    const stack: string[] = (project.metadata as any).stack
        ? JSON.parse((project.metadata as any).stack) : [];

    return (
        <>
            <Script id='json-ld' type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* Close button */}
            <header className='flex items-center justify-center pt-10'>
                <Anchor className='inline-flex hover:mb-6 hover:scale-125' href='/'>
                    <FaX />
                    <div className='sr-only'>Close</div>
                </Anchor>
            </header>

            <main>
                <Container as='article' className='py-10 max-w-5xl'>

                    {/* ── Full-width title ── */}
                    <h1 className='font-bold text-4xl md:text-5xl tracking-tight mb-8 leading-tight'>
                        {project.metadata.title}
                    </h1>

                    {/* ── Meta row: description left, links+stack right ── */}
                    <div className='grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 mb-12 pb-12 border-b border-gray-200 dark:border-gray-800'>
                        <p className='text-lg md:text-xl font-medium leading-relaxed text-gray-700 dark:text-gray-300 max-w-2xl'>
                            {project.metadata.description}
                        </p>
                        <div className='flex flex-col gap-4 items-start md:items-end'>
                            {/* Stack tags */}
                            {stack.length > 0 && (
                                <div className='flex flex-wrap gap-2 justify-start md:justify-end'>
                                    {stack.map((tag) => (
                                        <span key={tag} className='px-3 py-1 text-xs border border-gray-300 dark:border-gray-600 rounded-full text-gray-600 dark:text-gray-400'>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                            {/* Links */}
                            <div className='flex flex-wrap gap-2'>
                                {links.map((link) => (
                                    <Anchor
                                        key={link.url}
                                        href={link.url}
                                        target='_blank'
                                        rel='noreferrer nofollow noopener'
                                        className='inline-flex items-center gap-2 px-5 py-2.5 text-sm'>
                                        {link.name === 'Repository' ? <FaGithub /> : null}
                                        {link.name}
                                        <FaArrowRight className='-rotate-45 transition-transform duration-300 group-hover:rotate-0' />
                                    </Anchor>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ── Full-width case study prose ── */}
                    <div className='prose prose-gray dark:prose-invert max-w-none mb-16
                                    prose-headings:font-bold prose-headings:tracking-tight
                                    prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                                    prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed
                                    prose-li:text-gray-700 dark:prose-li:text-gray-300'>
                        <CustomMDX source={project.content} />
                    </div>

                    {/* ── Snapshot gallery with lightbox ── */}
                    {images.length > 0 && (
                        <SnapshotGallery images={images} title={project.metadata.title} />
                    )}

                </Container>
            </main>
        </>
    );
};

export default ProjectPage;
