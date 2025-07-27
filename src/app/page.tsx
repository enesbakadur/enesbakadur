import HeroSection from '@/sections/HeroSection';
import MyProjects from '@/sections/MyProjects';
import Experiences from '@/sections/Experiences';
import AboutMe from '@/sections/AboutMe';

export default function Home() {
    return (
        <main>
            <HeroSection />
            <MyProjects />
            <Experiences />
            <AboutMe />
        </main>
    );
}
