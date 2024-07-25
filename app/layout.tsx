import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import LocalFont from "@next/font/local";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: {
        default: "Home - Reaper Solution",
        template: "%s - Reaper Solution",
    },
    description: "A team of developers, sys admin and more",
    openGraph: {
        title: "Reaper Solution",
        description:
            "A team of developers, sys admin and more",
        url: "https://reaper.farmeurimmo.fr",
        siteName: "Reaper Solution",
        images: [
            {
                url: "https://cdn.farmeurimmo.fr/img/reaper-solution.jpg",
                width: 1920,
                height: 1080,
            },
        ],
        locale: "en-US",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    twitter: {
        title: "Reaper Solution",
        card: "summary_large_image",
    },
    icons: {
        shortcut: "https://cdn.farmeurimmo.fr/img/reaper-solution.ico",
    },
};

const calSans = LocalFont({
    src: "../public/fonts/CalSans-SemiBold.ttf",
    variable: "--font-calsans",
});

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <link rel="icon" href="https://cdn.farmeurimmo.fr/img/reaper-solution.ico"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="theme-color" content="#000000"/>
            <meta property="og:title" content=""/>
            <meta property="og:type" content=""/>
            <meta property="og:url" content=""/>
            <meta property="og:image" content=""/>
            <meta property="og:locale" content="fr_FR"/>
            <meta property="og:description" content=""/>
            <link rel="canonical" href="https://reaper.farmeurimmo.fr"/>
            <link rel="apple-touch-icon" href="https://cdn.farmeurimmo.fr/img/reaper-solution.jpg"/>
        </head>
        <body className={inter.className}>
        {children}
        </body>
        </html>
    )
}
