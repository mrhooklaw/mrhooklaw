import { MdHome, MdWork, MdCode, MdEmail, MdLayers } from "react-icons/md";
import { SiLua, SiPython, SiCplusplus, SiRust } from "react-icons/si";
import { BiCode } from "react-icons/bi";
import type { IconType } from "react-icons";

export type Link = {
    name: string;
    href: string;
    icon: IconType;
};

export type Skill = {
    name: string;
    icon: IconType;
};

export const navLinks: Link[] = [
    {
        name: "Home",
        href: "/",
        icon: MdHome,
    },
    {
        name: "Projects",
        href: "/projects",
        icon: MdWork,
    },
    {
        name: "Source Code",
        href: "/source-code",
        icon: MdCode,
    },
    {
        name: "Frameworks",
        href: "/frameworks",
        icon: MdLayers,
    },
    {
        name: "Contact Me",
        href: "/contact",
        icon: MdEmail,
    },
];

export const skills: Skill[] = [
    {
        name: "Luau",
        icon: SiLua,
    },
    {
        name: "Python",
        icon: SiPython,
    },
    {
        name: "C++",
        icon: SiCplusplus,
    },
    {
        name: "C",
        icon: BiCode,
    },
    {
        name: "Rust",
        icon: SiRust,
    },
];

export const frameworks = [
    {
        name: "Knit",
        description: "A lightweight, robust framework for Roblox that simplifies communication between scripts. It provides a structured way to manage services and controllers, making your codebase cleaner and more scalable.",
        url: "https://sleitnick.github.io/Knit/",
    },
    {
        name: "Rojo",
        description: "Enables professional-grade development tools for Roblox by syncing files from your local filesystem. This allows you to use industry-standard editors like VS Code, version control with Git, and other external tools.",
        url: "https://rojo.space/",
    },
    {
        name: "Trove",
        description: "A powerful cleanup management class for tracking and cleaning up objects. It simplifies memory management by handling connections, instances, and other cleanup tasks automatically when they are no longer needed.",
        url: "https://sleitnick.github.io/RbxUtil/api/Trove/",
    },
    {
        name: "Tree",
        description: "A utility library for working with the Roblox instance tree. It provides a clean and concise API for finding, waiting for, and manipulating instances, reducing boilerplate code in your projects.",
        url: "https://sleitnick.github.io/RbxUtil/api/Tree",
    },
    {
        name: "Lune",
        description: "A standalone Luau runtime that allows you to write and run scripts outside of the Roblox engine. Perfect for automation, build scripts, and other development tasks that don't require the full game client.",
        url: "https://lune-org.github.io/docs/",
    },
    {
        name: "Darklua",
        description: "A code transform tool for Luau to process and optimize scripts. It can minify code, remove unused variables, and apply various transformations to improve performance and code quality.",
        url: "https://darklua.com/",
    },
];
