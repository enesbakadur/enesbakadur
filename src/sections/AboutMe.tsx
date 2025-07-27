import { HugeiconsIcon } from '@hugeicons/react';
import { Download01Icon, EyeIcon } from '@hugeicons/core-free-icons';
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

export default function AboutMe() {
    const experiencesList = ExperiencesList;

    return (
        <section
            className='flex flex-col px-4 gap-8 md:gap-10 lg:gap-12 relative pt-20 md:pt-24 lg:pt-28'
            id='about-me'
        >
            <div className='relative flex flex-col w-[98%] md:w-[85%] lg:w-[70%] mx-auto border-y-1 border-muted-text/20'>
                {/* Content */}
                <div className='w-full'>
                    {/* Section Title */}
                    <div className='flex flex-col gap-8 border-b-1 border-muted-text/20 p-4 pb-10 z-10 relative'>
                        <div className='size-10 md:size-11 lg:size-12 rounded-full bg-muted-text/20 flex items-center justify-center p-2 md:p-3'>
                            <HugeiconsIcon
                                icon={EyeIcon}
                                strokeWidth={1.5}
                                className='size-full'
                            />
                        </div>

                        <h2
                            className={`${myFont.className} text-3xl md:text-4xl lg:text-5xl w-full md:w-1/3 font-medium md:pr-2`}
                        >
                            Ben. <br />
                            <span className='text-muted-text'>
                                Enes Bakadur hakkında daha fazlası.
                            </span>
                        </h2>
                    </div>
                    {/* Projects */}
                    <div className='w-full flex flex-col md:items-end z-10 relative p-4'>
                        <div className='w-full flex flex-col p-16 md:p-24 lg:p-32 gap-16 md:gap-24 xl:gap-32 bg-stroke-background border-1 border-stroke rounded-2xl relative group'>
                            {/* Project Info */}
                            <h3
                                className={`${myFont.className} text-5xl md:text-6xl lg:text-5xl xl:text-7xl font-medium text-center underline decoration-muted-text/20 decoration-6 underline-offset-10 leading-tight`}
                            >
                                Her projenin <br />
                                kusursuz olmasını <br />
                                hedefleyen biri.
                            </h3>
                            <p className='text-muted-text text-base md:text-lg lg:text-xl text-justify w-full xl:w-4/5 mx-auto leading-snug'>
                                Tasarım ve frontend geliştirme alanlarını
                                birleştirerek kullanıcı odaklı dijital ürünler
                                geliştirme konusunda uzmanlaşmış bir
                                profesyonelim. Adobe ürün ailesiyle başladığım
                                kariyerimde, UI/UX tasarımı ve React/Next.js
                                tabanlı frontend geliştirme yetkinlikleri
                                kazandım. Modern araçlarla güçlü kullanıcı
                                deneyimi sağlayan arayüzler tasarlıyor ve
                                kodluyorum. <br /> <br />
                                Freelancer olarak ve ekip içinde edindiğim
                                deneyimlerle, hem bağımsız hem de takım
                                çalışmasına yatkın bir şekilde projelerde
                                sorumluluk alabiliyorum. <br /> <br /> Hedefim,
                                sürekli gelişen teknolojilere adapte olarak
                                estetik ve fonksiyonel çözümler üretmek ve katma
                                değer sağlayan projelerde yer almak.
                            </p>
                            <div className='absolute -top-[2px] -right-[2px] origin-top-right size-18 md:size-20 bg-gradient-to-tr from-stroke to-main-background from-[49.5%] to-[50.5%] rounded-bl-2xl group-hover:scale-140 transition-all duration-300'></div>
                        </div>
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
                        <a
                            href='/Enes Bakadur CV.pdf'
                            download='Enes Bakadur CV.pdf'
                            className={`${jetBrainsMono.className} text-muted-text text-sm md:text-base uppercase antialiased whitespace-nowrap text-center bg-background hover:bg-muted-background transition-all duration-300 rounded-md px-4 py-2 inline-flex items-center gap-2 md:gap-3 cursor-pointer group`}
                        >
                            <HugeiconsIcon
                                icon={Download01Icon}
                                strokeWidth={1.5}
                                className='size-5 group-hover:translate-y-0.5 transition-all duration-300'
                            />
                            CV'Mİ İNDİR
                        </a>

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
