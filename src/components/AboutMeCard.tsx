export default function AboutMeCard({
    title,
    text,
}: {
    title: string;
    text: string;
}) {
    return (
        <button className='col-span-1 h-full flex flex-col gap-2 p-4 lg:p-8 border-2 border-foreground/20 rounded-lg border-dashed hover:border-solid hover:border-primary focus:border-primary active:border-primary transition-all duration-300 group/card hover:z-10'>
            <div className='flex items-center relative'>
                <div className='w-0 h-6 bg-primary group-hover/card:w-2 group-focus/card:w-2 group-active/card:w-2 transition-all duration-300 -translate-y-[1px] rounded-tr-md rounded-br-md'></div>
                <h2 className='text-lg md:text-2xl font-semibold group-hover/card:translate-x-2 group-focus/card:translate-x-2 group-active/card:translate-x-2 transition-all duration-300'>
                    {title}
                </h2>
            </div>

            <p className='text-xs sm:text-sm md:text-base font-light text-left'>
                {text}
            </p>
        </button>
    );
}
