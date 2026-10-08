import { cn } from '@/utils/lib';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: React.ReactNode;
    locked?: boolean;
}

export default function Card({ className, children, locked, ...props }: Readonly<CardProps>) {
    return (
        <div className='size-full rounded-3xl shadow-xs transition-shadow duration-300 hover:shadow-lg'>
            <div
                {...props}
                className={cn(
                    'size-full overflow-hidden rounded-3xl',
                    'bg-white dark:bg-dark-900',
                    locked
                        ? 'select-text cursor-default'
                        : 'select-none md:cursor-grab md:active:cursor-grabbing',
                    'dark:ring-1 dark:ring-dark-800',
                    className
                )}>
                {children}
            </div>
        </div>
    );
}
