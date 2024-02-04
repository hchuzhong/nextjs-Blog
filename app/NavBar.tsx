import Link from "next/link";
import { IoIosHome } from "react-icons/io";

export default function NavBar() {
    const links = [
        { lable: "Home", href: "/" },
        { lable: "Blog", href: "/blog" },
    ]
    return (
        <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
            <Link href="/"><IoIosHome className="text-xl" /></Link>
            <ul className="flex space-x-6">
                {links.map((link, i) => (
                    <li key={link.href} className="text-zinc-500 hover:text-zinc-800 transition-colors">
                        <Link href={link.href}>{link.lable}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
