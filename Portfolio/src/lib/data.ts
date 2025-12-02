import { MdHome, MdWork, MdCode, MdEmail } from "react-icons/md";
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


