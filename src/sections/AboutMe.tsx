'use client';
import AboutMeCard from '@/components/AboutMeCard';
import SkillsCard from '@/components/SkillsCard';
import {
    SourceCodeSquareIcon,
    WebDesign01Icon,
} from '@hugeicons/core-free-icons';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AboutMe() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const opacity = useTransform(
        scrollYProgress,
        [0, 0.3, 0.7, 1],
        [0, 1, 1, 0]
    );
    const y = useTransform(
        scrollYProgress,
        [0, 0.3, 0.7, 1],
        [200, 0, 0, -200]
    );
    const rotate = useTransform(
        scrollYProgress,
        [0, 0.3, 0.7, 1],
        [15, 0, 0, -15]
    );

    const skillsRef = useRef(null);
    const skillsInView = useInView(skillsRef, { amount: 0.3 });

    return (
        <section
            ref={containerRef}
            className='min-h-screen overflow-x-hidden items-start !py-20'
            id='aboutMe'
        >
            <div className='container flex flex-col gap-4 md:gap-8'>
                <div className='group grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8'>
                    {/* Summary Card */}
                    <motion.div
                        style={{ opacity, y, rotate }}
                        transition={{ duration: 2, ease: 'easeOut' }}
                        className='transition-all duration-300 group-hover:blur-[2px] group-focus:blur-[2px] group-active:blur-[2px] hover:!blur-none focus:!blur-none active:!blur-none'
                    >
                        <AboutMeCard
                            title='Hakkımda'
                            text="1998 yılında Bursa'da doğdum. Oldukça erken yaşta Adobe Photoshop ile tanışıp lise son sınıfa kadar birçok Adobe programını profesyonel düzeyde kullanmaya başladım. Kariyerime grafik tasarımcı olarak başladım ve zamanla UI/UX tasarımı ve frontend geliştirme konularında yetkinlik kazandım. Tasarım ve yazılım becerilerimi birleştirerek, kullanıcı dostu ve estetik çizgisi olan ürünler tasarlama ve geliştirme konularında oldukça tecrübe edindim."
                        />
                    </motion.div>
                    <motion.div
                        style={{
                            opacity,
                            y,
                            rotate: useTransform(rotate, (r) => -r),
                        }}
                        transition={{ duration: 2, ease: 'easeOut', delay: 3 }}
                        className='transition-all duration-300 group-hover:blur-[2px] group-focus:blur-[2px] group-active:blur-[2px] hover:!blur-none focus:!blur-none active:!blur-none'
                    >
                        <AboutMeCard
                            title='Hedeflerim'
                            text='Grafik tasarım ve UI/UX alanlarındaki deneyimlerimi, frontend geliştirme ile birleştirerek
                        meslek hayatımı bu doğrultuda ilerletmek istiyorum. Tasarım ve yazılım alanındaki bilgi
                        birikimimin, kullanıcı odaklı ve estetik projeler geliştirmeme önemli katkılar sağladığına
                        inanıyorum. Sürekli öğrenme ve yeni teknolojilere adapte olma tutkusuyla, dinamik ve iş
                        birliğine açık bir ekipte çalışarak hem bireysel hem de kolektif başarılar elde etmek
                        istiyorum.'
                        />
                    </motion.div>
                </div>
                <div
                    className='grid grid-cols-1 gap-4 md:gap-8'
                    id='skills'
                    ref={skillsRef}
                >
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={skillsInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                            duration: 0.8,
                            ease: 'easeOut',
                            delay: skillsInView ? 0.4 : 0,
                        }}
                    >
                        <SkillsCard
                            icon={SourceCodeSquareIcon}
                            title='Yazılım'
                            text='Üniversiteden mezun olduğumdan beri (2022) yazılım alanında kendimi geliştirmeye devam ediyorum. Bu süreçte tam zamanlı olarak çalıştığım işlerin yanı sıra freelancer olarak da tecrübe edinme fırsatları yakaladım.'
                            skills={[
                                'Javascript',
                                'Typescript',
                                'React',
                                'Next.js',
                                'Tailwind CSS',
                                'Bootstrap',
                                'Uikit',
                                'HTML',
                                'CSS',
                            ]}
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={skillsInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                            duration: 0.8,
                            ease: 'easeOut',
                            delay: skillsInView ? 0.8 : 0,
                        }}
                    >
                        <SkillsCard
                            icon={WebDesign01Icon}
                            title='Tasarım'
                            text='Üniversiteden mezun olduğumdan beri (2022) yazılım alanında kendimi geliştirmeye devam ediyorum. Bu süreçte tam zamanlı olarak çalıştığım işlerin yanı sıra freelancer olarak da tecrübe edinme fırsatları yakaladım.'
                            skills={[
                                'Adobe Photoshop',
                                'Adobe Illustrator',
                                'Adobe XD',
                                'Adobe Premiere Pro',
                                'Adobe Lightroom',
                                'Figma',
                            ]}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
