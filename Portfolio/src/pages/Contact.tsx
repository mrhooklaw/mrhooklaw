import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaDiscord, FaEnvelope, FaCopy, FaCheck } from "react-icons/fa";

const slogans = [
    "Ideas matter, execution defines them.",
    "Progress is built, not imagined.",
    "Function first, Beauty follows.",
    "Build what matters, not what distracts.",
    "Consistency is proof of mastery.",
    "Built to work. Hardened to last.",
];

export default function Contact() {
    const [sloganIndex, setSloganIndex] = useState(0);
    const [time, setTime] = useState("");
    const [copiedDiscord, setCopiedDiscord] = useState(false);
    const [copiedGmail, setCopiedGmail] = useState(false);

    useEffect(() => {
        const sloganInterval = setInterval(() => {
            setSloganIndex((prev) => (prev + 1) % slogans.length);
        }, 3000);

        const updateTime = () => {
            const now = new Date();
            // Create date object for GMT+5
            const utc = now.getTime() + now.getTimezoneOffset() * 60000;
            const gmtPlus5 = new Date(utc + 3600000 * 5);

            setTime(
                gmtPlus5.toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: true,
                })
            );
        };

        updateTime();
        const timeInterval = setInterval(updateTime, 1000);

        return () => {
            clearInterval(sloganInterval);
            clearInterval(timeInterval);
        };
    }, []);

    const copyToClipboard = (text: string, isDiscord: boolean) => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text);
        } else {
            const textarea = document.createElement("textarea");
            textarea.value = text;
            textarea.style.position = "fixed";
            textarea.style.opacity = "0";
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
        }

        if (isDiscord) {
            setCopiedDiscord(true);
            setTimeout(() => setCopiedDiscord(false), 2000);
        } else {
            setCopiedGmail(true);
            setTimeout(() => setCopiedGmail(false), 2000);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center w-full h-full gap-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-3xl bg-black/40 backdrop-blur-xl rounded-lg shadow-xl overflow-hidden border border-white/10 pointer-events-auto"
            >
                <div className="bg-white/5 px-4 py-2 flex gap-2 items-center border-b border-white/10">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <div className="ml-2 text-xs text-gray-400">
                        user@MrHooksLaw:~/contact
                    </div>
                </div>

                <div className="p-8 text-gray-300 flex flex-col gap-8">
                    {/* Slogan Rotator */}
                    <div className="h-12 flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={sloganIndex}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.5 }}
                                className="text-xl md:text-2xl font-mono text-gray-300 text-center italic"
                            >
                                "{slogans[sloganIndex]}"
                            </motion.p>
                        </AnimatePresence>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Contact Info */}
                        <div className="space-y-4">
                            <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-4">
                                Contact Channels
                            </h3>

                            <button
                                onClick={() => copyToClipboard("mrhookslaw", true)}
                                className="w-full flex items-center justify-between bg-white/5 p-4 rounded-md border border-white/5 hover:bg-white/10 transition-all group"
                            >
                                <div className="flex items-center gap-3">
                                    <FaDiscord className="text-2xl text-indigo-400" />
                                    <div className="text-left">
                                        <p className="text-xs text-gray-500">Discord</p>
                                        <p className="text-white font-mono">mrhookslaw</p>
                                    </div>
                                </div>
                                {copiedDiscord ? (
                                    <FaCheck className="text-green-400" />
                                ) : (
                                    <FaCopy className="text-gray-600 group-hover:text-white transition-colors" />
                                )}
                            </button>

                            <button
                                onClick={() => copyToClipboard("mrhookslaw@gmail.com", false)}
                                className="w-full flex items-center justify-between bg-white/5 p-4 rounded-md border border-white/5 hover:bg-white/10 transition-all group"
                            >
                                <div className="flex items-center gap-3">
                                    <FaEnvelope className="text-2xl text-red-400" />
                                    <div className="text-left">
                                        <p className="text-xs text-gray-500">Email</p>
                                        <p className="text-white font-mono">mrhookslaw@gmail.com</p>
                                    </div>
                                </div>
                                {copiedGmail ? (
                                    <FaCheck className="text-green-400" />
                                ) : (
                                    <FaCopy className="text-gray-600 group-hover:text-white transition-colors" />
                                )}
                            </button>
                        </div>

                        {/* Time & Quote */}
                        <div className="flex flex-col justify-between gap-6">
                            <div className="bg-white/5 p-4 rounded-md border border-white/5">
                                <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-2">
                                    My Timezone (GMT+5)
                                </h3>
                                <p className="text-3xl font-mono text-white font-bold">
                                    {time}
                                </p>
                            </div>

                            <div className="bg-white/5 p-4 rounded-md border border-white/5 flex-grow flex items-center justify-center">
                                <p className="text-center text-gray-400 italic font-serif">
                                    "Simplicity is the ultimate sophistication."
                                    <br />
                                    <span className="text-sm text-gray-500 mt-2 block">
                                        — Leonardo da Vinci
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
