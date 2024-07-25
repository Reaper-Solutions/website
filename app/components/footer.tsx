import Link from "next/link";

export default function Footer() {

    return (
        <footer className="flex items-center justify-center gap-4 animate-fade-in p-20">
            <Link
                target="_blank"
                href="https://reaper.farmeurimmo.fr"
                className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
                Copyright © 2024 Reaper Solutions
            </Link>
            <Link href="https://github.com/Reaper-Solutions/website"
                  className="text-sm duration-500 text-zinc-500 hover:text-zinc-300">
                Open Source
            </Link>
            <Link
                target="_blank"
                href="https://status.farmeurimmo.fr"
                className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
                Services Status
            </Link>
        </footer>
    );
}