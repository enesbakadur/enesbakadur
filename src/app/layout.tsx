import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Footer from '@/components/Footer';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

export const metadata: Metadata = {
    title: 'Enes Bakadur Portfolyo',
    description:
        'Beni daha yakından tanıyabileceğiniz, işlerimi ve deneyimlerimi inceleyebileceğiniz ve de iletişim kurabileceğiniz bir portfolyo sayfası.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`${inter.className} antialiased`}>
                <ThemeProvider>
                    <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-0.5rem)] md:w-[calc(100%-1.5rem)] lg:w-[calc(100%-3rem)] h-[calc(100%-0.5rem)] md:h-[calc(100%-1.5rem)] lg:h-[calc(100%-3rem)] z-[-1] bg-main-background rounded-2xl p-4'></div>
                    <div className='fixed top-0 w-full h-1 md:h-3 lg:h-6 bg-background z-[1000] box-border'></div>
                    <div className='fixed bottom-0 w-full h-1 md:h-3 lg:h-6 bg-background z-[1000]'></div>
                    <Navbar />

                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
