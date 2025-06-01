import { useState } from "react";
import IconMVRX from "../icons/icon_mvr_x.png";
import IconGitHub from "../icons/icon_github.tsx";
import { useProgressStepsContext } from "../contexts/ProgressContextUtils.ts";

const REPO_URL: string = "https://github.com/AlexChapman18/MVR-Explorer-GH";

const navLinks = [
    {
        href: "https://docs.google.com/forms/d/e/1FAIpQLSdUar5S5fN8QcrZJru6jkBx2S0jwzwl_O0BJPJQKYJHhShc9Q/viewform?usp=dialog",
        label: "Contact",
        active: true,
    },
    { href: "#", label: "Tutorial", active: false },
    { href: "#", label: "Updates", active: false },
];

const NavLink = ({ href, label, active }: { href: string; label: string; active: boolean }) => (
    <li className="py-1 md:py-0">
        <a
            href={href}
            className={
                "text-xl font-semibold transition-colors duration-100 " +
                (active ? "hover:text-accent-one" : "opacity-40 cursor-not-allowed line-through")
            }
        >
            {label}
        </a>
    </li>
);

const NavLinks = ({ links }: { links: { label: string; href: string; active: boolean }[] }) => (
    <ul className="flex items-center font-medium md:space-x-5 flex-col md:flex-row pb-1 md:pb-0">
        {links.map((link) => (
            <NavLink key={link.label} {...link} />
        ))}
    </ul>
);

const MenuButton = ({ onClick }: { onClick: () => void }) => (
    <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="cursor-pointer inline-flex items-center ms-3 p-2 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
        onClick={onClick}
    >
        <span className="sr-only">Open main menu</span>
        <svg className="w-7 h-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
            />
        </svg>
    </button>
);

function Navigation() {
    const { MVRName } = useProgressStepsContext();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="bg-primary text-white">
            <div className="flex flex-wrap items-center justify-between mx-auto py-4 px-5">
                <a href="/" className="flex items-center space-x-3">
                    <img src={IconMVRX} className="h-10" alt="MVR x GDTF cross Logo" />
                    <span className="self-center text-2xl whitespace-nowrap">MVR Explorer</span>
                </a>
                <span className="max-md:hidden">{MVRName}</span>
                <div className="flex md:flex-row-reverse">
                    <a className="cursor-pointer" href={REPO_URL}>
                        <IconGitHub classes="fill-white h-10 w-auto ms-4 hover:fill-accent-one transition-colors duration-100" />
                    </a>

                    <div className="hidden md:flex">
                        <NavLinks links={navLinks} />
                    </div>
                    <MenuButton onClick={handleMenuToggle} />
                </div>
            </div>
            <div className={"md:hidden flex-col " + (menuOpen ? "flex" : "hidden")}>
                <NavLinks links={navLinks} />
            </div>
        </nav>
    );
}

export default Navigation;
