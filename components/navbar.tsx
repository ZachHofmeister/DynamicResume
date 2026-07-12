import Link from "next/link";

export default function Navbar() {
	const links = [
		{ id: 0, href: "/", name: "Home" },
		{ id: 1, href: "/Resume", name: "resume.tsx" },
		{ id: 2, href: "/Editor", name: "editor.tsx" },
	]

	return (
		<nav className="sticky top-0 bg-slate-200">
			<ul className="flex">
				{links.map(link =>
					<li key={link.id} className="p-5">
						<Link href={link.href} className="text-blue-500 underline">{link.name}</Link>
					</li>
				)}
			</ul>
		</nav>
	);
}