import { frameworks } from "../lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaTerminal, FaExternalLinkAlt, FaBoxOpen, FaUser, FaGithub } from "react-icons/fa";

export default function Frameworks() {
    const [selectedFramework, setSelectedFramework] = useState(frameworks[0]);

    return (
        <div className="flex items-center justify-center w-full h-full p-4 md:p-8">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-6xl bg-black/40 backdrop-blur-xl rounded-lg shadow-2xl overflow-hidden border border-white/10 flex flex-col h-[82vh] mt-4 pointer-events-auto"
            >
                {/* Terminal Header */}
                <div className="bg-white/5 px-4 py-3 flex justify-between items-center border-b border-white/10 shrink-0">
                    <div className="flex gap-2 items-center">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="text-xs text-gray-400 font-mono flex items-center gap-2">
                        <FaTerminal />
                        <span>pkg-inspector — v1.0.5</span>
                    </div>
                    <div className="w-16" /> {/* Spacer for centering */}
                </div>

                {/* Main Content Area */}
                <div className="flex flex-col md:flex-row flex-grow overflow-hidden">

                    {/* Left Pane: Package List */}
                    <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-white/10 flex flex-col bg-black/20">
                        <div className="p-3 border-b border-white/5 bg-white/5 text-xs font-mono text-gray-400 uppercase tracking-wider">
                            Available Modules
                        </div>
                        <div className="overflow-y-auto flex-grow p-2 space-y-1 custom-scrollbar">
                            {frameworks.map((framework) => (
                                <button
                                    key={framework.name}
                                    onMouseEnter={() => setSelectedFramework(framework)}
                                    onClick={() => setSelectedFramework(framework)}
                                    className={`w-full text-left px-4 py-3 rounded-md font-mono text-sm transition-all duration-200 flex items-center justify-between group ${selectedFramework.name === framework.name
                                        ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                                        : "text-gray-400 hover:bg-white/5 hover:text-gray-200 border border-transparent"
                                        }`}
                                >
                                    <span className="flex items-center gap-2">
                                        <FaBoxOpen className={`text-xs ${selectedFramework.name === framework.name ? "text-blue-400" : "text-gray-600 group-hover:text-gray-400"}`} />
                                        {framework.name}
                                    </span>
                                    {selectedFramework.name === framework.name && (
                                        <motion.span layoutId="active-indicator" className="text-blue-400 text-xs">●</motion.span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Pane: Inspector Details */}
                    <div className="w-full md:w-2/3 flex flex-col bg-black/10 relative overflow-hidden">
                        <div className="p-3 border-b border-white/5 bg-white/5 text-xs font-mono text-gray-400 uppercase tracking-wider flex justify-between shrink-0">
                            <span>Module Metadata</span>
                        </div>

                        <div className="overflow-y-auto flex-grow relative z-10 custom-scrollbar">
                            <div className="p-8 flex flex-col min-h-full justify-between">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={selectedFramework.name}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.2 }}
                                        className="space-y-8"
                                    >
                                        {/* Header Section */}
                                        <div>
                                            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                                                {selectedFramework.name}
                                            </h1>
                                            <div className="flex gap-4 text-xs font-mono text-gray-500 mb-4">
                                                <span className="bg-white/5 px-2 py-1 rounded border border-white/5">LATEST</span>
                                                <span className="bg-white/5 px-2 py-1 rounded border border-white/5">STABLE</span>
                                                <span className="bg-white/5 px-2 py-1 rounded border border-white/5">MIT LICENSE</span>
                                            </div>

                                            {/* Author Info */}
                                            {/* @ts-ignore */}
                                            {selectedFramework.author && (
                                                <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                                                    <FaUser className="text-blue-400" />
                                                    <span>Created by: <span className="text-white">{selectedFramework.author}</span></span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Description */}
                                        <div className="bg-white/5 p-6 rounded-lg border border-white/5 backdrop-blur-sm">
                                            <p className="text-gray-300 leading-relaxed text-lg font-light">
                                                {selectedFramework.description}
                                            </p>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-4 pb-2">
                                            <a
                                                href={selectedFramework.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-md font-mono text-sm transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] group"
                                            >
                                                <span>DOCUMENTATION</span>
                                                <FaExternalLinkAlt className="group-hover:translate-x-1 transition-transform" />
                                            </a>

                                            {/* @ts-ignore */}
                                            {selectedFramework.repo && (
                                                <a
                                                    href={selectedFramework.repo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-md font-mono text-sm transition-all border border-white/10 group"
                                                >
                                                    <span>REPOSITORY</span>
                                                    <FaGithub className="text-lg group-hover:scale-110 transition-transform" />
                                                </a>
                                            )}
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Background Decoration */}
                        <div className="absolute bottom-0 right-0 opacity-[0.03] pointer-events-none">
                            <FaBoxOpen className="text-[300px]" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
