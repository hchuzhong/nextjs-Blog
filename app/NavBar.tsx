'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosHome } from "react-icons/io";
import classnames from 'classnames';

export default function NavBar() {
    const currentPath = usePathname();
    const links = [
        { lable: "Home", href: "/" },
        { lable: "Blog", href: "/blog" },
    ];
    return (
        <nav className="flex space-x-6 border-b px-5 h-14 items-center">
            <Link href="/"><IoIosHome className="text-xl" /></Link>
            <ul className="flex space-x-6">
                {links.map((link, i) => (
                    <li key={link.href} className={classnames({
                        'text-zinc-900': currentPath === link.href,
                        'text-zinc-500': currentPath !== link.href,
                        'hover:text-zinc-800 transition-colors': true
                    })}>
                        <Link href={link.href}>{link.lable}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
