import IconMVRX from "../icons/icon_mvr_x.png";
import IconGitHub from "../icons/icon_github.tsx";

const navLinks = [
    { href: "#", label: "Context" },
    { href: "#", label: "Tutorial" },
    { href: "#", label: "FAQ" },
];

const NavLink = ({ href, label }: { href: string; label: string }) => (
    <li>
        <a
            href={href}
            className={`block py-2 px-3 md:p-0 rounded-sm text-xl font-semibold text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
        >
            {label}
        </a>
    </li>
);

function Navigation() {
    const fileName = "Example.mvr";

    return (
        <nav className="bg-primary dark:text-white">
            <div className="flex flex-wrap items-center justify-between mx-auto py-4 px-5">
                <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={IconMVRX} className="h-10" alt="MVR x GDTF cross Logo fill-[#243c5a]" />
                    <span className="self-center text-2xl whitespace-nowrap ">MVR Explorer</span>
                </a>
                <span>{fileName}</span>
                <div className="flex md:order-2 space-x-3 md:space-x-0">
                    <ul className="flex items-center flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-5 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
                        {navLinks.map((link) => (
                            <NavLink key={link.label} {...link} />
                        ))}
                        <li>
                            <IconGitHub classes={"fill-white h-10 w-auto"} />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
