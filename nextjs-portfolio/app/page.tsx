import Container from '@/components/ui/container';
import FilterableGrid from '@/components/grid/FilterableGrid';
import { siteConfig } from '@/config/site';

export default function Home() {
    return (
        <>
            <Container as='header' className='flex items-center justify-between py-0'>
                <h1 className='hidden'>{siteConfig.title}</h1>
            </Container>
            <main className='py-8'>
                <FilterableGrid />
            </main>
        </>
    );
}
