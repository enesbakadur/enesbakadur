import { HugeiconsIcon } from '@hugeicons/react';
import { Timer02Icon, BrowserIcon } from '@hugeicons/core-free-icons';
import { JetBrains_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import ExperiencesList from '@/components/ExperiencesList';

export const jetBrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
    display: 'swap',
    variable: '--font-jetbrains-mono', // İsteğe bağlı (className da gelecek zaten)
});

const myFont = localFont({
    src: '../fonts/BluuNext-Bold.otf',
});

export default function Experiences() {
    const experiencesList = ExperiencesList;

    return (
        <section
            className='flex flex-col px-4 gap-8 md:gap-10 lg:gap-12 relative pt-20 md:pt-24 lg:pt-28'
            id='experiences'
        >
            <div className='relative flex flex-col w-[98%] md:w-[85%] lg:w-[70%] mx-auto border-y-1 border-muted-text/20'>
                {/* Content */}
                <div className='w-full'>
                    {/* Section Title */}
                    <div className='flex flex-col gap-8 border-b-1 border-muted-text/20 p-4 pb-10 z-10 relative'>
                        <div className='size-10 md:size-11 lg:size-12 rounded-full bg-muted-text/20 flex items-center justify-center p-2 md:p-3'>
                            <HugeiconsIcon
                                icon={Timer02Icon}
                                strokeWidth={1.5}
                                className='size-full'
                            />
                        </div>

                        <h2
                            className={`${myFont.className} text-3xl md:text-4xl lg:text-5xl w-full md:w-1/3 font-medium md:pr-2`}
                        >
                            Deneyimler. <br />
                            <span className='text-muted-text'>
                                Bugüne kadar neler yaptım?
                            </span>
                        </h2>
                    </div>
                    {/* Projects */}
                    <div className='w-full flex flex-col md:items-end z-10 relative'>
                        {experiencesList.map((experience, index) => (
                            <div
                                key={index}
                                className='w-full md:w-2/3 flex flex-col p-4 gap-8 border-b-1 last:border-b-0 border-muted-text/20'
                            >
                                {/* Project Info */}
                                <div className='flex flex-col gap-2'>
                                    <p
                                        className={`${jetBrainsMono.className} text-xs flex items-center gap-2 bg-muted-background rounded-md p-2 w-fit`}
                                    >
                                        {experience.title}
                                    </p>
                                    <h3
                                        className={`${myFont.className} text-xl md:text-2xl lg:text-3xl font-medium`}
                                    >
                                        {experience.company}
                                    </h3>
                                    <div className='flex flex-col'>
                                        <p className='text-muted-text text-base'>
                                            {experience.jobLocation}
                                        </p>
                                        <p className='text-muted-text text-base'>
                                            {experience.jobType}
                                        </p>
                                        <p className='text-muted-text text-base'>
                                            {experience.workingMethods}
                                        </p>
                                    </div>
                                </div>
                                {/* Project Tags */}
                                <div className='flex flex-col gap-2'>
                                    <div className='flex items-center justify-between'>
                                        <p
                                            className={`${jetBrainsMono.className} text-xs p-2 w-fit`}
                                        >
                                            {experience.startYear}
                                        </p>
                                        <p
                                            className={`${jetBrainsMono.className} text-xs p-2 w-fit`}
                                        >
                                            {experience.endYear}
                                        </p>
                                    </div>
                                    <div className='w-full h-1 border-t-1 border-muted-text border-dashed'></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Lines */}
                <div className='absolute inset-0 items-center justify-center flex flex-col pointer-events-none'>
                    <div className='w-full h-full flex'>
                        <div className='w-1/2 md:w-1/3 h-full border-x-1 border-muted-text/20'></div>
                        <div className='w-1/2 md:w-1/3 h-full border-r-1 border-muted-text/20 hidden md:block'></div>
                        <div className='w-1/2 md:w-1/3 h-full border-r-1 border-muted-text/20'></div>
                    </div>
                </div>
                <div className='w-full border-t-1 border-muted-text/20 flex justify-center'>
                    <div className='w-full flex items-center justify-center p-2 md:p-3 lg:p-4 relative'>
                        {/* <p
                            className={`${jetBrainsMono.className} text-muted-text text-[0.625rem] md:text-xs uppercase antialiased whitespace-nowrap text-center`}
                        >
                            YENİ BİR İŞ ARAYIŞIM VAR.
                        </p> */}

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
}
