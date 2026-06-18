'use client';
import { FaExpandAlt } from 'react-icons/fa';

export default function GridItem({
    component: Component,
    isExpanded,
    onClose,
    isExpandable,
    onExpand,
    onToggle,
    locked,
    className,
    ...props
}: Readonly<{ component: React.ComponentType<any>; isExpanded?: boolean; isExpandable?: boolean; onExpand?: () => void; onClose?: () => void; onToggle?: () => void; locked?: boolean } & React.HTMLAttributes<HTMLDivElement>>) {
    return (
        <div className={`size-full relative group ${className || ''}`} {...props}>
            {isExpandable && !isExpanded && (
                <button 
                    onClick={(e) => {
                        e.stopPropagation();
                        onExpand?.();
                    }}
                    className="absolute top-4 right-4 z-50 p-2 bg-black/40 hover:bg-black/80 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 cancel-drag"
                    title="Expand"
                >
                    <FaExpandAlt className="w-4 h-4" />
                </button>
            )}
            <Component isExpanded={isExpanded} onClose={onClose} onToggle={onToggle} locked={locked} />
        </div>
    );
}
