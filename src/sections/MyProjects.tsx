import { HugeiconsIcon } from '@hugeicons/react';
import {
    CurvyLeftDirectionIcon,
    CodeFolderIcon,
    BrowserIcon,
} from '@hugeicons/core-free-icons';
import { Gloria_Hallelujah, JetBrains_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import Image from 'next/image';
import ProjectList from '@/components/ProjectList';

const gloriaHallelujah = Gloria_Hallelujah({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-gloria-hallelujah',
});
export const jetBrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
    display: 'swap',
    variable: '--font-jetbrains-mono', // İsteğe bağlı (className da gelecek zaten)
});

const myFont = localFont({
    src: '../fonts/BluuNext-Bold.otf',
});

export default function MyProjects() {
    const projectList = ProjectList;

    return (
        <section
            className='flex flex-col px-4 gap-8 md:gap-10 lg:gap-12 relative'
            id='projects'
        >
            <div className='w-[98%] md:w-[85%] lg:w-[70%] flex flex-col gap-2 mx-auto max-md:items-center pt-28'>
                <p
                    className={`${gloriaHallelujah.className} text-xs text-muted-text text-left w-fit`}
                >
                    Projelerimi inceleyelim
                </p>
                <HugeiconsIcon
                    icon={CurvyLeftDirectionIcon}
                    strokeWidth={0.7}
                    className='size-8 text-muted-text -rotate-135 ml-24'
                />
            </div>

            <div className='relative flex flex-col w-[98%] md:w-[85%] lg:w-[70%] mx-auto border-y-1 border-muted-text/20'>
                {/* Content */}
                <div className='w-full'>
                    {/* Section Title */}
                    <div className='flex flex-col gap-8 border-b-1 border-muted-text/20 p-4 pb-10 z-10 relative'>
                        <div className='size-10 md:size-11 lg:size-12 rounded-full bg-muted-text/20 flex items-center justify-center p-2 md:p-3'>
                            <HugeiconsIcon
                                icon={CodeFolderIcon}
                                strokeWidth={1.5}
                                className='size-full'
                            />
                        </div>

                        <h2
                            className={`${myFont.className} text-3xl md:text-4xl lg:text-5xl w-full md:w-1/3 font-medium md:pr-2`}
                        >
                            Projeler. <br />
                            <span className='text-muted-text'>
                                Kod, tasarım ve ürünlerden seçmeler.
                            </span>
                        </h2>
                    </div>
                    {/* Projects */}
                    <div className='w-full flex flex-col z-10 relative'>
                        {projectList.map((project, index) => (
                            <div
                                key={index}
                                className='w-full flex max-md:flex-col md:items-center p-4 max-md:gap-8 border-b-1 last:border-b-0 border-muted-text/20'
                            >
                                {/* Project Info */}
                                <div className='flex flex-col gap-4 md:gap-6 lg:gap-8 md:w-1/3'>
                                    {/* Project Info */}
                                    <div className='flex flex-col gap-2'>
                                        <a
                                            href={project.link}
                                            target='_blank'
                                            className='flex items-center gap-2 bg-muted-background hover:bg-muted-text/50 transition-all duration-300 rounded-md p-2 w-fit'
                                        >
                                            <HugeiconsIcon
                                                icon={BrowserIcon}
                                                strokeWidth={1.5}
                                                className='size-4'
                                            />
                                            <p
                                                className={`${jetBrainsMono.className} text-xs`}
                                            >
                                                {project.linkText}
                                            </p>
                                        </a>
                                        <h3
                                            className={`${myFont.className} text-xl md:text-2xl lg:text-3xl font-medium`}
                                        >
                                            {project.name}
                                        </h3>
                                        <p className='text-muted-text text-base'>
                                            {project.description}
                                        </p>
                                    </div>
                                    {/* Project Tags */}
                                    <div className='flex flex-wrap gap-2'>
                                        {project.tags.map((tag, index) => (
                                            <div
                                                key={index}
                                                className='bg-muted-text/20 rounded-md py-1 px-2'
                                            >
                                                <p
                                                    className={`${jetBrainsMono.className} text-xs uppercase`}
                                                >
                                                    {tag}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* Project Image */}
                                <div className='w-full md:w-2/3 flex flex-col bg-muted-background rounded-xl p-2 md:ml-2 group border-1 border-muted-text/30'>
                                    <div className='flex items-center gap-2 pb-2'>
                                        <div className='size-2 md:size-3 aspect-square rounded-full bg-red-600'></div>
                                        <div className='size-2 md:size-3 aspect-square rounded-full bg-amber-600'></div>
                                        <div className='size-2 md:size-3 aspect-square rounded-full bg-green-600'></div>
                                    </div>
                                    <div className='relative w-full aspect-[9/16] md:aspect-[4/3] lg:aspect-video overflow-hidden rounded-lg'>
                                        <Image
                                            src={project.images[0]}
                                            alt='Project 1'
                                            fill
                                            sizes='100%'
                                            className='object-cover object-top group-hover:object-bottom transition-all duration-[5000ms] hidden lg:block'
                                        />
                                        <Image
                                            src={project.images[1]}
                                            alt='Project 1'
                                            fill
                                            sizes='100%'
                                            className='object-cover object-top group-hover:object-bottom transition-all duration-[5000ms] hidden md:block lg:hidden'
                                        />
                                        <Image
                                            src={project.images[2]}
                                            alt='Project 1'
                                            fill
                                            sizes='100%'
                                            className='object-cover object-top group-hover:object-bottom transition-all duration-[5000ms] md:hidden'
                                        />
                                    </div>
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
                        <p
                            className={`${jetBrainsMono.className} text-muted-text text-[0.625rem] md:text-xs uppercase antialiased whitespace-nowrap hidden md:block text-center`}
                        >
                            Daha Fazlası Yakında Eklenecek.
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
}
