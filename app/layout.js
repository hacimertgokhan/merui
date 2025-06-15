import "./globals.css";
import {Noto_Sans} from 'next/font/google';

const inter = Noto_Sans({
    subsets: ['latin'],
    variable: '--font-inter',
});

export const metadata = {
    title: "Mer UI",
};

export default function RootLayout({ children }) {
    return (
        <html lang="tr" className={`${inter.variable} antialiased`} suppressHydrationWarning>
        <head>
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        </head>
        <body
            className={`${inter.variable} font-sans bg-neutral-100`}>
                <main>
                    {children}
                </main>
            </body>
        </html>
    );
}