import { HugeiconsIcon } from '@hugeicons/react';

export default function SkillsCard({
    title,
    text,
    skills,
    icon,
}: {
    title: string;
    text: string;
    skills: string[];
    icon: any;
}) {
    return (
        <div className='col-span-1 h-full flex flex-col gap-4 p-4 lg:p-8 border-2 border-foreground/20 rounded-lg border-dashed hover:border-primary hover:border-solid transition-all duration-300 group/card hover:z-10 relative overflow-hidden lg:hover:pb-12'>
            <div className='flex items-center justify-start size-10 lg:size-14 lg:pt-2 lg:group-hover/card:pt-0 lg:group-hover/card:scale-50 transition-all duration-300 origin-top-left'>
                <HugeiconsIcon icon={icon} className='size-full' />
            </div>

            <div className='flex flex-col lg:group-hover/card:-translate-y-8 gap-1 transition-all duration-300 lg:pb-4'>
                <div className='flex items-center relative'>
                    <div className='w-0 h-6 bg-primary group-hover/card:w-2 transition-all duration-300 -translate-y-[1px] rounded-tr-md rounded-br-md'></div>
                    <h2 className='text-lg md:text-2xl font-semibold group-hover/card:translate-x-2 transition-all duration-300'>
                        {title}
                    </h2>
                </div>
                <p className='text-sm md:text-base font-light'>{text}</p>
            </div>
            <div className='flex flex-wrap gap-2 lg:absolute lg:-bottom-30 lg:group-hover/card:bottom-10 transition-all duration-300'>
                {/* Skills */}
                {skills.map((skill) => (
                    <div
                        key={skill}
                        className='flex items-center justify-center bg-background hover:bg-primary hover:text-background rounded-full py-2 px-4'
                    >
                        <p className='text-xs font-light pointer-events-none'>
                            {skill}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
