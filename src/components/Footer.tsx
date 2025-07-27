import {
    InstagramIcon,
    LinkedinIcon,
    NewTwitterIcon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { JetBrains_Mono } from 'next/font/google';

export const jetBrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
    display: 'swap',
    variable: '--font-jetbrains-mono', // İsteğe bağlı (className da gelecek zaten)
});

export default function Footer() {
    return (
        <footer className='relative pt-12 md:pt-16 lg:pt-20 pb-28 px-4'>
            <div className=' w-[98%] md:w-[85%] lg:w-[70%] mx-auto border-y-1 border-muted-text/20 flex justify-center relative h-fit'>
                <div className='absolute inset-0 items-center justify-center flex flex-col pointer-events-none'>
                    <div className='w-full h-full flex'>
                        <div className='w-1/2 md:w-1/3 h-full border-x-1 border-muted-text/20'></div>
                        <div className='w-1/2 md:w-1/3 h-full border-r-1 border-muted-text/20 hidden md:block'></div>
                        <div className='w-1/2 md:w-1/3 h-full border-r-1 border-muted-text/20'></div>
                    </div>
                </div>
                <div className='w-full flex max-md:flex-col max-md:items-start max-md:justify-start max-md:gap-4 items-center justify-between p-2 md:p-3 lg:p-4'>
                    <p
                        className={`${jetBrainsMono.className} text-xs whitespace-nowrap text-left w-full md:w-1/3`}
                    >
                        Tüm hakları saklıdır © Enes Bakadur 2025
                    </p>
                    <div className='flex items-center md:justify-end gap-2'>
                        <a
                            href='https://www.linkedin.com/in/enesbakadur/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='border-1 border-muted-text/20 hover:border-muted-text/50 transition-all duration-300 rounded-md p-1'
                        >
                            <HugeiconsIcon
                                icon={LinkedinIcon}
                                strokeWidth={1.5}
                                className='size-5'
                            />
                        </a>
                        <a
                            href='https://www.instagram.com/enesbakadur/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='border-1 border-muted-text/20 hover:border-muted-text/50 transition-all duration-300 rounded-md p-1'
                        >
                            <HugeiconsIcon
                                icon={InstagramIcon}
                                strokeWidth={1.5}
                                className='size-5'
                            />
                        </a>
                        <a
                            href='https://x.com/mrbakadur'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='border-1 border-muted-text/20 hover:border-muted-text/50 transition-all duration-300 rounded-md p-1'
                        >
                            <HugeiconsIcon
                                icon={NewTwitterIcon}
                                strokeWidth={1.5}
                                className='size-5'
                            />
                        </a>
                    </div>

                    {/* Dots */}
                    <div className='absolute -bottom-[2px] md:-bottom-[4px] -left-[2px] md:-left-[4px] size-1 md:size-2 rounded-full bg-muted-text ring-2 ring-main-background'></div>
                    <div className='absolute -bottom-[2px] md:-bottom-[4px] -right-[2px] md:-right-[4px] size-1 md:size-2 rounded-full bg-muted-text ring-2 ring-main-background'></div>
                    <div className='absolute -top-[2px] md:-top-[4px] -left-[2px] md:-left-[4px] size-1 md:size-2 rounded-full bg-muted-text ring-2 ring-main-background'></div>
                    <div className='absolute -top-[2px] md:-top-[4px] -right-[2px] md:-right-[4px] size-1 md:size-2 rounded-full bg-muted-text ring-2 ring-main-background'></div>
                </div>
            </div>
        </footer>
    );
}
