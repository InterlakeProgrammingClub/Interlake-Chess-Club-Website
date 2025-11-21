import Link from "next/link";

export default function Navigation() {
	return (
		<nav className="sticky top-0 z-50 bg-card border-b border-border backdrop-blur-sm">
			<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
				<Link
					href="/"
					className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity"
				>
					♔ Interlake Chess Club
				</Link>
				<div className="flex items-center gap-8">
					<Link href="/about" className="nav-link">
						About
					</Link>
					<Link href="/play" className="nav-link">
						Play
					</Link>
					<Link href="/tournaments" className="nav-link">
						Tournaments
					</Link>
					<Link href="/leadership" className="nav-link">
						Leadership
					</Link>
				</div>
			</div>
		</nav>
	);
}
