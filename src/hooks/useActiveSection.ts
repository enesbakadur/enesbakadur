import { useEffect, useState } from 'react';

export function useActiveSection(sectionIds: string[]) {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            let current: string | null = null;
            for (const id of sectionIds) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 200 && rect.bottom >= 200) {
                        current = id;
                        break;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sectionIds]);

    return activeSection;
}
