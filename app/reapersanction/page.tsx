"use client";

import Particles from "@/app/components/particles";
import {Navigation} from "../components/nav";
import {Card} from "../components/card";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDiscord, faGithub} from '@fortawesome/free-brands-svg-icons'

const good_points = [
    "Gui punishment plugin for spigot minecraft server.",
    "From 1.8 to latest minecraft versions.",
    "MYSQL, YAML support",
    "Customizable messages",
    "Customizable punishments",
    "Customizable GUIs",
]

const links = [
    {
        name: "Download",
        href: "https://github.com/Reaper-Solutions/Minecraft-ReaperSanction/releases",
        icon: <img src="../download.png" className="w-6 h-6" alt="Download"/>,
    },
    {
        name: "SpigotMc",
        href: "https://www.spigotmc.org/resources/reapersanction.89580/",
        icon: <img src="https://static.spigotmc.org/img/spigot.png" className="w-6 h-6" alt="SpigotMc"/>,
    },
    {
        name: "Discord",
        href: "https://discord.gg/dZjrzmdH74",
        icon: <FontAwesomeIcon icon={faDiscord}/>,
    },
    {
        name: "Github",
        href: "https://github.com/Reaper-Solutions/Minecraft-ReaperSanction",
        icon: <FontAwesomeIcon icon={faGithub}/>,
    },
]

export default function Dev() {
    return (
        <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <Navigation/>
            <Particles
                className="absolute inset-0 -z-10 animate-fade-in"
                quantity={100}
            />
            <title>ReaperSanction - Reaper Solutions</title>
            <div className="container flex flex-col items-center justify-center min-h-screen px-4 mx-auto">
                <div className="flex flex-col items-center justify-center w-full mx-auto text-center mt-32">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">ReaperSanction</h1>
                    <div id="toflex"
                         className="flex flex-row items-center justify-center w-full mx-auto text-left mt-4 gap-6">
                        <ul className="list-disc list-inside">
                            {good_points.map((item) => (
                                <li>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-16"/>
                    <div className="flex flex-row items-center justify-center w-full mx-auto text-center gap-6">
                        {links.map((item) => (
                            <Card>
                                <a href={item.href} target="_blank" rel="noreferrer"
                                   className="flex flex-row items-center justify-center w-full mx-auto my-auto text-center p-10">
                                    {item.icon}
                                    <p className="ml-4 text-sm text-zinc-400">{item.name}</p>
                                </a>
                            </Card>
                        ))}
                    </div>
                    <div className="mt-16"/>
                    <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">Currently in
                        development</h2>
                    <div className="flex flex-col items-center justify-center w-full mx-auto text-left mt-4 gap-6">
                        <ul className="list-disc list-inside">
                            <li>Custom Inventory (IN TESTING see Release Candidate 1.5.0)</li>
                            <li>Usage of TimeZone selected by player (IN TESTING see Release Candidate 1.5.0)</li>
                            <li>Proxy (Velocity/BungeeCord) version (with Redis or BungeeChannels)</li>
                            <li>Discord webhook (customizable)</li>
                            <li>Better report (system of views, claims etc)</li>
                            <li>Better tab completer</li>
                        </ul>
                    </div>
                    <div className="mt-16"/>
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">Screenshots</h1>
                    <p className="mt-4 text-sm text-zinc-400">Some screenshots of ReaperSanction</p>
                    <div className="flex flex-col items-center justify-center w-full mx-auto text-center mt-4 gap-6">
                        <div
                            className="flex flex-row items-center justify-center w-full mx-auto text-center mt-4 gap-6">
                            <Card>
                                <img src="../reapersanction.png" className="w-full h-full" alt="ReaperSanction"/>
                            </Card>
                            <Card>
                                <img src="../reapersanction2.png" className="w-full h-full" alt="ReaperSanction"/>
                            </Card>
                            <Card>
                                <img src="../reapersanction3.png" className="w-full h-full" alt="ReaperSanction"/>
                            </Card>
                            <Card>
                                <img src="../reapersanction4.png" className="w-full h-full" alt="ReaperSanction"/>
                            </Card>
                        </div>
                    </div>
                    <div className="mt-24"/>
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">Wiki</h1>
                    <p className="mt-4 text-sm text-zinc-400">The wiki of ReaperSanction</p>
                    <div className="flex flex-col items-center justify-center w-full mx-auto text-center mt-4 gap-6">
                        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">Installation</h2>
                        <div className="flex flex-col items-center justify-center w-full mx-auto text-left mt-4 gap-6">
                            <ul className="list-disc list-inside">
                                <li>Download the latest stable version of ReaperSanction</li>
                                <li>Put the plugin in your plugins folder</li>
                                <li>Restart your server</li>
                                <li>Change some settings in the config.yml or some gui in inventories.yml if needed</li>
                            </ul>
                        </div>
                        <div className="mt-16"/>
                        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">Commands</h2>
                        <p>() = optional, [] = required</p>
                        <table className="table-auto text-zinc-300">
                            <thead>
                            <tr>
                                <th className="px-4 py-2">Command</th>
                                <th className="px-4 py-2">Alias</th>
                                <th className="px-4 py-2">Usage</th>
                                <th className="px-4 py-2">Permission</th>
                                <th className="px-4 py-2">Description</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="border px-4 py-2">/reapersanction</td>
                                <td className="border px-4 py-2">/rs</td>
                                <td className="border px-4 py-2">/rs [player]</td>
                                <td className="border px-4 py-2">reapersanction</td>
                                <td className="border px-4 py-2">Main command of ReaperSanction</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">/ban</td>
                                <td className="border px-4 py-2"></td>
                                <td className="border px-4 py-2">/ban [player] (reason)</td>
                                <td className="border px-4 py-2">reapersanction.ban</td>
                                <td className="border px-4 py-2">Ban a player (permanent)</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">/tempban</td>
                                <td className="border px-4 py-2"></td>
                                <td className="border px-4 py-2">/tempban [player] [time with sec/min/hour/day/year]
                                    (reason)
                                </td>
                                <td className="border px-4 py-2">reapersanction.tempban</td>
                                <td className="border px-4 py-2">Ban a player (temporary)</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">/unban</td>
                                <td className="border px-4 py-2"></td>
                                <td className="border px-4 py-2">/unban [player]</td>
                                <td className="border px-4 py-2">reapersanction.unban</td>
                                <td className="border px-4 py-2">Unban a player</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">/kick</td>
                                <td className="border px-4 py-2"></td>
                                <td className="border px-4 py-2">/kick [player] (reason)</td>
                                <td className="border px-4 py-2">reapersanction.kick</td>
                                <td className="border px-4 py-2">Kick a player</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">/mute</td>
                                <td className="border px-4 py-2"></td>
                                <td className="border px-4 py-2">/mute [player] (reason)</td>
                                <td className="border px-4 py-2">reapersanction.mute</td>
                                <td className="border px-4 py-2">Mute a player (permanent)</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">/tempmute</td>
                                <td className="border px-4 py-2"></td>
                                <td className="border px-4 py-2">/tempmute [player] [time with sec/min/hour/day/year]
                                    (reason)
                                </td>
                                <td className="border px-4 py-2">reapersanction.tempmute</td>
                                <td className="border px-4 py-2">Mute a player (temporary)</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">/unmute</td>
                                <td className="border px-4 py-2"></td>
                                <td className="border px-4 py-2">/unmute [player]</td>
                                <td className="border px-4 py-2">reapersanction.unmute</td>
                                <td className="border px-4 py-2">Unmute a player</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">/ban-ip</td>
                                <td className="border px-4 py-2"></td>
                                <td className="border px-4 py-2">/ban-ip [ip or player (preferred)] (reason)</td>
                                <td className="border px-4 py-2">reapersanction.banip</td>
                                <td className="border px-4 py-2">Ban an ip and a player (permanent)</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">/vanish</td>
                                <td className="border px-4 py-2"></td>
                                <td className="border px-4 py-2">/vanish (player)</td>
                                <td className="border px-4 py-2">reapersanction.vanish</td>
                                <td className="border px-4 py-2">Vanish yourself or a player</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">/report</td>
                                <td className="border px-4 py-2"></td>
                                <td className="border px-4 py-2">/report [player]</td>
                                <td className="border px-4 py-2"></td>
                                <td className="border px-4 py-2">Report a player via gui</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">/history</td>
                                <td className="border px-4 py-2"></td>
                                <td className="border px-4 py-2">/history [player]</td>
                                <td className="border px-4 py-2">reapersanction.history</td>
                                <td className="border px-4 py-2">See the history of a player</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">/rsadmin</td>
                                <td className="border px-4 py-2"></td>
                                <td className="border px-4 py-2">/rsadmin [rl/reload/infos/migratedb]</td>
                                <td className="border px-4 py-2">reapersanction.admin</td>
                                <td className="border px-4 py-2">Reload the config, get the plugin infos, get
                                    information on how to migrate to MYSQL
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-24"/>
                </div>
            </div>
        </div>
    );
}

