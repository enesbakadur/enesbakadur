'use client';
import {
    ComputerPhoneSyncIcon,
    Home01Icon,
    UserSquareIcon,
    Briefcase01Icon,
    Github01Icon,
    Mail02Icon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import Link from 'next/link';
import { useActiveSection } from '@/hooks/useActiveSection';

export default function Navbar() {
    const sectionIds = ['home', 'about-me', 'projects', 'experiences'];
    const activeSection = useActiveSection(sectionIds);

    return (
        <nav className='fixed bottom-6 md:bottom-8 lg:bottom-10 w-fit left-1/2 -translate-x-1/2 flex items-center gap-2 bg-background/20 backdrop-blur-sm border-1 border-muted-text/20 rounded-2xl z-[999] p-2'>
            <Link
                href='#home'
                className={`p-2 rounded-lg transition-all duration-150  ${
                    activeSection === 'home'
                        ? 'bg-muted-text/50'
                        : 'bg-transparent hover:bg-muted-text/20'
                }`}
            >
                <HugeiconsIcon
                    icon={Home01Icon}
                    strokeWidth={1.5}
                    className='text-foreground size-6'
                />
            </Link>
            <Link
                href='#projects'
                className={`p-2 rounded-lg transition-all duration-150  ${
                    activeSection === 'projects'
                        ? 'bg-muted-text/50'
                        : 'bg-transparent hover:bg-muted-text/20'
                }`}
            >
                <HugeiconsIcon
                    icon={ComputerPhoneSyncIcon}
                    strokeWidth={1.5}
                    className='text-foreground size-6'
                />
            </Link>
            <Link
                href='#experiences'
                className={`p-2 rounded-lg transition-all duration-150  ${
                    activeSection === 'experiences'
                        ? 'bg-muted-text/50'
                        : 'bg-transparent hover:bg-muted-text/20'
                }`}
            >
                <HugeiconsIcon
                    icon={Briefcase01Icon}
                    strokeWidth={1.5}
                    className='text-foreground size-6'
                />
            </Link>
            <Link
                href='#about-me'
                className={`p-2 rounded-lg transition-all duration-150  ${
                    activeSection === 'about-me'
                        ? 'bg-muted-text/50'
                        : 'bg-transparent hover:bg-muted-text/20'
                }`}
            >
                <HugeiconsIcon
                    icon={UserSquareIcon}
                    strokeWidth={1.5}
                    className='text-foreground size-6'
                />
            </Link>
            <div className='h-6 w-[2px] bg-muted-text/50 pointer-events-none rounded-full'></div>
            <a
                href='https://github.com/enesbakadur'
                target='_blank'
                className={`p-2 rounded-lg transition-all duration-150 bg-transparent hover:bg-muted-text/20`}
            >
                <HugeiconsIcon
                    icon={Github01Icon}
                    strokeWidth={1.5}
                    className='text-foreground size-6'
                />
            </a>
            <a
                href='mailto:enesbakadur@outlook.com'
                target='_blank'
                className={`p-2 rounded-lg transition-all duration-150 bg-transparent hover:bg-muted-text/20`}
            >
                <HugeiconsIcon
                    icon={Mail02Icon}
                    strokeWidth={1.5}
                    className='text-foreground size-6'
                />
            </a>
        </nav>
    );
}
