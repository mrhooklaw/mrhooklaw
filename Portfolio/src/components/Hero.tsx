import { skills } from "../lib/data";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaDiscord } from "react-icons/fa";
import { useState } from "react";

export default function Hero() {
    const [copied, setCopied] = useState(false);

    const copyDiscord = () => {
        const text = "mrhookslaw";

        // Check if clipboard API is available (HTTPS or localhost)
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text);
        } else {
            // Fallback for HTTP or older browsers
            const textarea = document.createElement("textarea");
            textarea.value = text;
            textarea.style.position = "fixed";
            textarea.style.opacity = "0";
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
        }

        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex flex-col items-center justify-start w-full gap-2 -mt-4">
            {/* Main Content - Two Columns */}
            <div className="flex flex-col lg:flex-row gap-2 w-full max-w-6xl">
                {/* Left Column - Terminal */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex-1 bg-black/50 backdrop-blur-md rounded-lg shadow-xl overflow-hidden border border-white/10 pointer-events-auto"
                >
                    <div className="bg-white/5 px-4 py-2 flex gap-2 items-center border-b border-white/10">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <div className="ml-2 text-xs text-gray-400">
                            user@MrHooksLaw:~
                        </div>
                    </div>
                    <div className="p-6 text-gray-300">
                        <div className="flex gap-2 text-xl md:text-2xl mb-4">
                            <span className="text-green-400">➜</span>
                            <span className="text-blue-400">~</span>
                            <span className="text-white">whoami</span>
                        </div>
                        <div className="text-2xl md:text-4xl font-bold text-white mb-6 h-16">
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString("MrHooksLaw")
                                        .start();
                                }}
                                options={{
                                    delay: 75,
                                    cursor: "_",
                                }}
                            />
                        </div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 0.5 }}
                            className="space-y-4"
                        >
                            <p className="text-lg text-gray-400">
                                Luau Developer | Python | C++ | C | Rust
                            </p>
                            <p className="text-gray-400">
                                I have been doing Luau for more than 1 year. I am passionate about
                                low-level programming and game development.
                            </p>
                            <div className="pt-6">
                                <h3 className="text-sm text-gray-500 mb-3 uppercase tracking-wider">
                                    Tech Stack
                                </h3>
                                <div className="flex flex-wrap gap-4">
                                    {skills.map((skill) => (
                                        <div
                                            key={skill.name}
                                            className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-md hover:bg-white/10 transition-colors cursor-default border border-white/5"
                                            title={skill.name}
                                        >
                                            <skill.icon className="text-xl text-blue-400" />
                                            <span className="text-sm">{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Column - Profile & Frameworks */}
                <div className="flex flex-col gap-2 lg:w-80">
                    {/* Profile Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col items-center gap-4 bg-black/50 backdrop-blur-md rounded-lg shadow-xl p-6 border border-white/10 pointer-events-auto"
                    >
                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/10">
                            <img
                                src="/profilePic.png"
                                alt="MrHooksLaw"
                                width={128}
                                height={128}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h2 className="text-2xl font-bold text-white">MrHooksLaw</h2>
                        <button
                            onClick={copyDiscord}
                            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-md transition-colors border border-white/5 cursor-pointer group"
                            title="Click to copy"
                        >
                            <FaDiscord className="text-2xl text-indigo-400" />
                            <span className="text-gray-300 group-hover:text-white transition-colors">
                                {copied ? "Copied!" : "mrhookslaw"}
                            </span>
                        </button>
                    </motion.div>

                    {/* Frameworks Terminal */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-black/50 backdrop-blur-md rounded-lg shadow-xl overflow-hidden border border-white/10 pointer-events-auto"
                    >
                        <div className="bg-white/5 px-4 py-2 flex gap-2 items-center border-b border-white/10">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                            <div className="ml-2 text-xs text-gray-400">
                                frameworks
                            </div>
                        </div>
                        <div className="p-6 text-gray-300">
                            <h3 className="text-sm text-gray-500 mb-3 uppercase tracking-wider">
                                Frameworks & Tools I Use
                            </h3>
                            <div className="flex flex-wrap gap-2 text-sm">
                                {["Knit", "Rojo", "Trove", "Tree", "Lune", "Darklua"].map((tool) => (
                                    <span
                                        key={tool}
                                        className="bg-white/5 px-3 py-1 rounded-md border border-white/5 hover:bg-white/10 transition-colors"
                                    >
                                        {tool}
                                    </span>
                                ))}
                                <span className="text-gray-500 px-2 py-1">and more</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
