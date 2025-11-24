import { navLinks } from "../lib/data";
import { Link, useLocation } from "react-router-dom";
import type { ReactNode } from "react";
import type { IconType } from "react-icons";

const NavLink = ({
    href,
    children,
    Icon,
}: {
    href: string;
    children: ReactNode;
    Icon?: IconType;
}) => {
    const location = useLocation();
    const isActive = href === location.pathname;

    return (
        <Link
            to={href}
            className={`text-lg flex items-center gap-2 px-2 ${isActive
                ? "bg-gray-200 text-black"
                : "text-white hover:bg-gray-300 hover:text-black"
                }`}
        >
            {Icon && <Icon />} {children}
        </Link>
    );
};

export default function Header() {
    return (
        <div className="flex justify-center items-center">
            <nav className="flex gap-4">
                {navLinks.map(({ name, href, icon: Icon }) => (
                    <NavLink key={href} href={href} Icon={Icon}>
                        {name}
                    </NavLink>
                ))}
            </nav>
        </div>
    );
}
