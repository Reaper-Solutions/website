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
                <p className="text-sm text-zinc-350 ">
                    Reaper Solutions is a team of developers and administrators that specialize in the development of
                    Java
                    (minecraft plugins) and web applications (apis, websites, etc).
                    <br/>
                    <br/>
                    We develop and maintain a variety of projects, including <a
                    href="https://reaper.farmeurimmo.fr/reapersanction"
                    className="text-zinc-500 hover:text-zinc-300">ReaperSanction</a>
                    , a minecraft plugin that allows
                    server owners to create custom bans and punishments for their server with easy gui interfaces.
                    <br/>
                    <br/>
                    We also develop and maintain a variety of web applications, including this website, which is built
                    with
                    <a href="https://nextjs.org" className="text-zinc-500 hover:text-zinc-300"> Next.js</a> and
                    <a href="https://tailwindcss.com" className="text-zinc-500 hover:text-zinc-300"> TailwindCSS</a>.
                    <br/>
                    <br/>
                    If you are interested in working with us, please go to our discord server and open a ticket.
                    Or, you cand send us an email at <a href="mailto:contact@farmeurimmo.fr"
                                                        className="text-zinc-500 hover:text-zinc-300">
                    contact@farmeurimmo.fr</a>.
                </p>
            </div>
            <Footer/>
        </main>
    )
}
