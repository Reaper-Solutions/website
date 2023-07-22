"use client";

import Particles from "@/app/components/particles";
import {Navigation} from "../components/nav";
import {Card} from "../components/card";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDiscord, faGithub} from '@fortawesome/free-brands-svg-icons'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {tomorrow} from 'react-syntax-highlighter/dist/esm/styles/prism';

const good_points = [
    "Gui punishment plugin for spigot minecraft server.",
    "From 1.8 to latest minecraft versions.",
    "MYSQL, YAML support",
    "Customizable messages",
    "Customizable punishments",
    "Customizable GUIs",
]

const yamGuiConfig = `MAIN: # <-- This is the main gui
  name: §4ReaperSanction # <-- The name of the gui
  size: 27 # <-- The size of the gui (9, 18, 27, 36, 45, 54)
  # Slots start at 0 and end at size - 1,
  # If you place an item in a slot outside of the gui size, it can cause errors
  isFill: true
  # If isFill is true, the gui will be filled with a glass pane
  # The option to customize the glass pane will be added in the future
  items: # <-- The items of the gui
    '8': # <-- The slot of the item
      type: ANVIL # <-- The type of the item
      amount: 1 # <-- The amount of the item
      display: §6What§cEver§1You§bWant # <-- The display name of the item
      lore: # <-- The lore of the item
        '0': Hi # <-- The line of the lore, you have to start at 0, incrementing by 1 and write like it is
        '1': Custom lore
        '2': With custom actions
      actions: # <-- The actions of the item
        '0': EXT->SAY HELLO %player%  # <- Similar to lore, you have to start at 0, incrementing by 1
        # More explaination about how and what is available below.
    '16': # Here is another item
      type: PAPER
      amount: 1
      display: §cEnd
      actions:
        '0': INT->GUI->END->%player%`;

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
        <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 overflow-hidden">
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
                            <li>Proxy (Velocity/BungeeCord) version (with Redis or BungeeChannels)</li>
                            <li>Better report (system of views, claims etc)</li>
                            <li>Sanction API</li>
                        </ul>
                    </div>
                    <div className="mt-16"/>
                    <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">Screenshots</h2>
                    <p className="mt-4 text-sm text-zinc-400">Some screenshots of the plugin.</p>
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
                    <div className="mt-16"/>
                    <div
                        className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"/>
                    <div className="mt-24"/>
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">Wiki</h1>
                    <p className="mt-4 text-sm text-zinc-400">The wiki of ReaperSanction.</p>
                    <div className="mt-12"/>
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
                        <table id="table" className="table-auto text-zinc-300">
                            <thead>
                            <tr>
                                <th className="px-4 py-2">Command</th>
                                <th className="px-4 py-2">Usage</th>
                                <th className="px-4 py-2">Permission</th>
                                <th className="px-4 py-2">Description</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="border px-4 py-2">/rs</td>
                                <td className="border px-4 py-2">/rs [player]</td>
                                <td className="border px-4 py-2">reapersanction</td>
                                <td className="border px-4 py-2">Main command of ReaperSanction</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">/ban</td>
                                <td className="border px-4 py-2">/ban [player] (reason)</td>
                                <td className="border px-4 py-2">reapersanction.ban</td>
                                <td className="border px-4 py-2">Ban a player (permanent)</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">/tempban</td>
                                <td className="border px-4 py-2">/tempban [player] [time with sec/min/hour/day/year]
                                    (reason)
                                </td>
                                <td className="border px-4 py-2">reapersanction.tempban</td>
                                <td className="border px-4 py-2">Ban a player (temporary)</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">/unban</td>
                                <td className="border px-4 py-2">/unban [player]</td>
                                <td className="border px-4 py-2">reapersanction.unban</td>
                                <td className="border px-4 py-2">Unban a player</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">/kick</td>
                                <td className="border px-4 py-2">/kick [player] (reason)</td>
                                <td className="border px-4 py-2">reapersanction.kick</td>
                                <td className="border px-4 py-2">Kick a player</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">/mute</td>
                                <td className="border px-4 py-2">/mute [player] (reason)</td>
                                <td className="border px-4 py-2">reapersanction.mute</td>
                                <td className="border px-4 py-2">Mute a player (permanent)</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">/tempmute</td>
                                <td className="border px-4 py-2">/tempmute [player] [time with sec/min/hour/day/year]
                                    (reason)
                                </td>
                                <td className="border px-4 py-2">reapersanction.tempmute</td>
                                <td className="border px-4 py-2">Mute a player (temporary)</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">/unmute</td>
                                <td className="border px-4 py-2">/unmute [player]</td>
                                <td className="border px-4 py-2">reapersanction.unmute</td>
                                <td className="border px-4 py-2">Unmute a player</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">/ban-ip</td>
                                <td className="border px-4 py-2">/ban-ip [ip or player (preferred)] (reason)</td>
                                <td className="border px-4 py-2">reapersanction.banip</td>
                                <td className="border px-4 py-2">Ban an ip and a player (permanent)</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">/vanish</td>
                                <td className="border px-4 py-2">/vanish (player)</td>
                                <td className="border px-4 py-2">reapersanction.vanish</td>
                                <td className="border px-4 py-2">Vanish yourself</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">/report</td>
                                <td className="border px-4 py-2">/report [player]</td>
                                <td className="border px-4 py-2"></td>
                                <td className="border px-4 py-2">Report a player via gui</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">/history</td>
                                <td className="border px-4 py-2">/history [player]</td>
                                <td className="border px-4 py-2">reapersanction.history</td>
                                <td className="border px-4 py-2">See the history of a player</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">/rsadmin</td>
                                <td className="border px-4 py-2">/rsadmin [rl/reload/infos/migratedb]</td>
                                <td className="border px-4 py-2">reapersanction.admin</td>
                                <td className="border px-4 py-2">Reload the config, get the plugin infos, get
                                    information on how to migrate to MYSQL
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <div className="mt-24"/>
                        <h2 className="text-2xl font-bold">Custom GUIs</h2>
                        <p>See below for the list of compatible GUIs with their exact name in config.</p>
                        <div className="text-left">
                            <ul className="list-disc list-inside">
                                <li>Main GUI {"->"} MAIN</li>
                                <li>Mute GUI {"->"} MUTE</li>
                                <li>Ban GUI {"->"} BAN</li>
                                <li>History GUI {"->"} HISTORY</li>
                                <li>Report GUI {"->"} REPORT</li>
                                <li>End GUI {"->"} END</li>
                                <li>Ban IP GUI {"->"} BAN_IP</li>
                            </ul>
                        </div>
                        <div className="mt-12"/>
                        <h3 className="text-xl font-bold">How the GUI/Message config work</h3>
                        <p className="text-left">The config is red at the start of the server and when you use the
                            command /rsadmin rl. You can edit the config and use the command to reload it. The config
                            may not order the GUIs in the same order as you want. You can change the order of the GUIs,
                            this won't affect the plugin.
                        </p>
                        <h4 className="text-lg font-bold">Location</h4>
                        <p className="text-left">The path of the GUI config is :
                            plugins/ReaperSanction/Inventories.yml</p>
                        <p className="text-left">The path of the message config is :
                            plugins/ReaperSanction/Messages.yml</p>
                        <div className="mt-6"/>
                        <h4 className="text-lg font-bold">GUI config</h4>
                        <div id="code" className="overflow-x-auto">
                            <SyntaxHighlighter language="yaml" style={tomorrow}>
                                {yamGuiConfig}
                            </SyntaxHighlighter>
                        </div>
                        <div className="mt-6"/>
                        <h4 className="text-lg font-bold">Actions</h4>
                        <h5 className="text-lg font-bold">EXT actions</h5>
                        <p className="text-left">The EXT actions will sudo the player to execute the command.
                            For example if we have "EXT{"->"}SAY HELLO %player%", the player will execute :
                            "/say HELLO %player%". %player% represent the player name.
                        </p>
                        <div className="mt-6"/>
                        <h5 className="text-lg font-bold">INT actions</h5>
                        <p className="text-left">The INT actions will transfer instructions to the plugin.
                            For example if we have "INT{"->"}TEMPBAN{"->"}%player%{"->"}7day{"->"}Fly", the plugin will
                            tempban the
                            player for 7 days for "Fly".
                        </p>
                        <p className="text-left">The INT actions are have optional arguments. For example we can remove
                            the reason of the action. If we have "INT{"->"}TEMPBAN{"->"}%player%{"->"}7day", the plugin
                            will tempban
                            the player for 7 days with the default reason.
                        </p>
                        <div className="mt-6"/>
                        <h5 className="text-lg font-bold">INT actions ENDPOINTS</h5>
                        <p className="text-left">The INT actions ENDPOINTS are the possible actions that the plugin can
                            do. The list of the possible actions is below.
                        </p>
                        <p className="text-left">() = optional argument</p>
                        <table className="table-auto">
                            <thead>
                            <tr>
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">Arguments</th>
                                <th className="px-4 py-2">Description</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="border px-4 py-2">TEMPBAN</td>
                                <td className="border px-4 py-2">{"->"}%PLAYER%{"->"}duration({"->"}reason)</td>
                                <td className="border px-4 py-2">Tempban a player</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">BAN</td>
                                <td className="border px-4 py-2">{"->"}%PLAYER%({"->"}reason)</td>
                                <td className="border px-4 py-2">Ban a player</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">TEMPMUTE</td>
                                <td className="border px-4 py-2">{"->"}%PLAYER%{"->"}duration({"->"}reason)</td>
                                <td className="border px-4 py-2">Tempmute a player</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">BAN_IP</td>
                                <td className="border px-4 py-2">{"->"}%PLAYER%({"->"}reason)</td>
                                <td className="border px-4 py-2">Ban the IP of a player</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">KICK</td>
                                <td className="border px-4 py-2">{"->"}%PLAYER%({"->"}reason)</td>
                                <td className="border px-4 py-2">Kick a player</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">MUTE</td>
                                <td className="border px-4 py-2">{"->"}%PLAYER%({"->"}reason)</td>
                                <td className="border px-4 py-2">Mute a player</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">UNMUTE</td>
                                <td className="border px-4 py-2">{"->"}%PLAYER%</td>
                                <td className="border px-4 py-2">Unmute a player</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">UNBAN</td>
                                <td className="border px-4 py-2">{"->"}%PLAYER%</td>
                                <td className="border px-4 py-2">Unban a player</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">UNBAN_IP</td>
                                <td className="border px-4 py-2">{"->"}%PLAYER%</td>
                                <td className="border px-4 py-2">Unban the IP of a player</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">GUI</td>
                                <td className="border px-4 py-2">{"->"}%GUI%{"->"}%PLAYER%</td>
                                <td className="border px-4 py-2">Open a GUI to a player /!\ not supported by the history
                                    gui
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">GUI_DYN</td>
                                <td className="border px-4 py-2">{"->"}%GUI%{"->"}%PLAYER%</td>
                                <td className="border px-4 py-2">Open a GUI (Made for the history GUI)</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">CLOSE</td>
                                <td className="border px-4 py-2">{"->"}%PLAYER%</td>
                                <td className="border px-4 py-2">Close the GUI of the player</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">REPORT</td>
                                <td className="border px-4 py-2">{"->"}%REASON%{"->"}%PLAYER%</td>
                                <td className="border px-4 py-2">Report a player</td>
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

