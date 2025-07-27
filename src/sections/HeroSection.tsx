'use client';
import React from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { Location01Icon } from '@hugeicons/core-free-icons';
import localFont from 'next/font/local';
import Image from 'next/image';
import { JetBrains_Mono } from 'next/font/google';
import { useTheme } from '@/contexts/ThemeContext';

export const jetBrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
    display: 'swap',
    variable: '--font-jetbrains-mono', // İsteğe bağlı (className da gelecek zaten)
});

const myFont = localFont({
    src: '../fonts/BluuNext-Bold.otf',
});

const HeroSection = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <section
            className='flex flex-col items-center justify-center py-44 md:py-52 xl:py-60 2xl:py-64 px-4 gap-8 md:gap-10 lg:gap-12 relative'
            id='home'
        >
            {/* Profile Image */}
            <div className='size-24 md:size-32 p-1 rounded-full border-1 border-muted-text/40 bg-main-background z-10 group'>
                <div className='size-full rounded-full relative overflow-hidden'>
                    <Image
                        src='/enesbakadur.webp'
                        alt='hero-image'
                        fill
                        sizes='100%'
                        className='object-contain scale-110 group-hover:scale-120 transition-all duration-300 pointer-events-none'
                    />
                </div>
            </div>
            {/* Title and Description */}
            <div className='flex flex-col text-center gap-2 z-10'>
                <h1
                    className={`${myFont.className} text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl`}
                >
                    Selam, Ben Enes.
                </h1>
                <p className='text-muted-text text-lg md:w-4/5 lg:w-3/5 xl:w-2/5 mx-auto'>
                    Bursa'da yaşayan bir frontend developer ve UI/UX designer
                    olarak, arayüzleri hem tasarlıyor hem de kodluyorum.
                    Projeleriniz için tasarımdan son ürüne kadar olan süreçte
                    sizlere yardımcı olabilirim.
                </p>
            </div>
            {/* Lines */}
            <div className='absolute inset-0 items-center justify-center flex flex-col pointer-events-none'>
                <div className='w-full h-12 border-b-1 border-muted-text/20 flex justify-center relative'>
                    <div className='w-[98%] md:w-[85%] lg:w-[70%] h-full border-x-1 border-muted-text/20 relative'>
                        <div className='absolute -bottom-[2px] md:-bottom-[4px] -left-[2px] md:-left-[4px] size-1 md:size-2 rounded-full bg-muted-text ring-2 ring-main-background'></div>
                        <div className='absolute -bottom-[2px] md:-bottom-[4px] -right-[2px] md:-right-[4px] size-1 md:size-2 rounded-full bg-muted-text ring-2 ring-main-background'></div>
                    </div>
                    <button
                        onClick={toggleTheme}
                        className='absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 bg-main-background hover:bg-background text-muted-text px-2 py-1 rounded-full cursor-pointer text-xs flex items-center gap-2 z-[9999] group pointer-events-auto'
                    >
                        <div className='p-1 w-5 h-3 rounded-full border-1 border-muted-text relative'>
                            <div
                                className={`size-2 rounded-full bg-muted-text absolute top-1/2 -translate-y-1/2 transition-all duration-300 ${
                                    theme === 'light'
                                        ? 'left-[8px] group-hover:left-[6px]'
                                        : 'left-[2px] group-hover:left-[4px]'
                                }`}
                            ></div>
                        </div>
                        {theme === 'dark' ? 'Işıkları Aç' : 'Işıkları Kapat'}
                    </button>
                </div>
                <div className='w-[98%] md:w-[85%] lg:w-[70%] h-full  flex'>
                    <div className='w-1/2 md:w-1/3 h-full border-x-1 border-muted-text/20'></div>
                    <div className='w-1/2 md:w-1/3 h-full border-r-1 border-muted-text/20 hidden md:block'></div>
                    <div className='w-1/2 md:w-1/3 h-full border-r-1 border-muted-text/20'></div>
                </div>
                <div className='w-full border-y-1 border-muted-text/20 flex justify-center relative'>
                    <div className='w-[98%] md:w-[85%] lg:w-[70%] border-x-1 border-muted-text/20 flex items-center justify-between p-2 md:p-3 lg:p-4 relative'>
                        <div className='flex items-center gap-1 md:gap-2'>
                            <HugeiconsIcon
                                icon={Location01Icon}
                                className='size-3 md:size-4 text-muted-text'
                            />
                            <p
                                className={`${jetBrainsMono.className} text-muted-text text-[0.625rem] md:text-xs uppercase antialiased whitespace-nowrap hidden md:block`}
                            >
                                BURSA, TÜRKİYE
                            </p>
                            <p
                                className={`${jetBrainsMono.className} text-muted-text text-[0.625rem] md:text-xs uppercase antialiased whitespace-nowrap md:hidden`}
                            >
                                BURSA, TR
                            </p>
                        </div>
                        <p
                            className={`${jetBrainsMono.className} text-muted-text text-[0.625rem] md:text-xs uppercase antialiased whitespace-nowrap hidden md:block`}
                        >
                            Frontend Developer • UI/UX Designer
                        </p>
                        <p
                            className={`${jetBrainsMono.className} text-muted-text text-[0.625rem] md:text-xs uppercase antialiased whitespace-nowrap md:hidden`}
                        >
                            Frontend Dev. • UI/UX Des.
                        </p>
                        {/* Dots */}
                        <div className='absolute -bottom-[2px] md:-bottom-[4px] -left-[2px] md:-left-[4px] size-1 md:size-2 rounded-full bg-muted-text ring-2 ring-main-background'></div>
                        <div className='absolute -bottom-[2px] md:-bottom-[4px] -right-[2px] md:-right-[4px] size-1 md:size-2 rounded-full bg-muted-text ring-2 ring-main-background'></div>
                        <div className='absolute -top-[2px] md:-top-[4px] -left-[2px] md:-left-[4px] size-1 md:size-2 rounded-full bg-muted-text ring-2 ring-main-background'></div>
                        <div className='absolute -top-[2px] md:-top-[4px] -right-[2px] md:-right-[4px] size-1 md:size-2 rounded-full bg-muted-text ring-2 ring-main-background'></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
