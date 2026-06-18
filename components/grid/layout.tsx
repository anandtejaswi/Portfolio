'use client';

import { breakpoints, cols, rowHeights } from '@/utils/consts';
import { useMounted } from '@/utils/hooks';
import { useState } from 'react';
import { cn } from '@/utils/lib';
import { Responsive, ResponsiveProps, WidthProvider } from 'react-grid-layout';

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function GridLayout({ layouts, className, children, locked }: Readonly<ResponsiveProps & { locked?: boolean }>) {
    const [breakpoint, setBreakpoint] = useState<string>('lg');
    const isMounted = useMounted();
    const [dynamicRowHeight, setDynamicRowHeight] = useState(200);

    const handleWidthChange = (containerWidth: number, margin: [number, number], currentCols: number) => {
        const gap = margin[0];
        const colWidth = (containerWidth - (currentCols - 1) * gap) / currentCols;
        // Maintain a strict 1.5 aspect ratio for base cards (1 unit wide = 1.5 units height)
        setDynamicRowHeight(colWidth / 1.5);
    };

    return (
        <section
            className={cn(
                'w-full px-4 md:px-8 mx-auto max-w-[1440px]',
                locked && 'grid-locked',
                isMounted ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0',
                'transition-[opacity,_transform] duration-700',
                className
            )}>
            <ResponsiveGridLayout
                layouts={layouts}
                breakpoints={breakpoints}
                cols={cols}
                isBounded
                isResizable={false}
                rowHeight={dynamicRowHeight}
                useCSSTransforms={false}
                measureBeforeMount
                draggableCancel='.cancel-drag'
                onBreakpointChange={setBreakpoint}
                onWidthChange={handleWidthChange}
                isDraggable={!locked && ['lg', 'md'].includes(breakpoint)}
                margin={[16, 16]}>
                {children}
            </ResponsiveGridLayout>
        </section>
    );
}
