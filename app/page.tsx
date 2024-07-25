"use client";
import Link from "next/link";
import Particles from "@/app/components/particles";
import Footer from "@/app/components/footer";

const navigation = [
    {name: "ReaperSanction", href: "/reapersanction"},
    {name: "Contact", href: "/contact"},
];

export default function Home() {
    return (
        <main
            className="flex min-h-screen flex-col items-center justify-between p-24 w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
            <div className="bg-red-500 p-2 mx-20">
                <p className="text-xl text-black">Reaper Solutions will be closed the 1st september 2024. Existing
                    projects will be moved to Farmeurimmo github account. Documentation will be moved too on the main
                    website. Thank you for your understanding.</p>
            </div>
            <nav className="my-16 animate-fade-in" id="home">
                <ul className="flex items-center justify-center gap-4">
                    {navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
                        >
                            {item.name}
                        </Link>
                    ))}
                </ul>
            </nav>
            <Particles
                className="absolute inset-0 -z-10 animate-fade-in"
                quantity={100}
            />
            <h1 className="text-zinc-350 font-bold text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text"
                id="name">
                Reaper Solutions
            </h1>
            <div className="my-16 text-left animate-fade-in" id="home">
                <p className="text-2xl text-zinc-350 ">
                    Will be closed the 1st september 2024.
                    <br/>
                    <br/>
                    Existing projects will be moved to Farmeurimmo github account.
                    <br/>
                    Documentation will be moved too on the main website.
                    <br/>
                    <br/>
                    Thank you for your understanding.
                </p>
            </div>
            <Footer/>
        </main>
    )
}
