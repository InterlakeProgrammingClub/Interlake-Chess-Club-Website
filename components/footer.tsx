import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-card border-t border-border py-12">
			<div className="max-w-6xl mx-auto px-6">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
					<div>
						<h4 className="font-bold text-lg mb-4">♔ Interlake Chess Club</h4>
						<p className="text-muted-foreground text-sm">
							Building tomorrow's strategic thinkers, one move at a time.
						</p>
					</div>
					<div>
						<h5 className="font-bold mb-3">Navigate</h5>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									href="/play"
									className="text-muted-foreground hover:text-primary"
								>
									Play
								</Link>
							</li>
							<li>
								<Link
									href="/tournaments"
									className="text-muted-foreground hover:text-primary"
								>
									Tournaments
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h5 className="font-bold mb-3">Club</h5>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									href="/about"
									className="text-muted-foreground hover:text-primary"
								>
									About
								</Link>
							</li>
							<li>
								<Link
									href="/leadership"
									className="text-muted-foreground hover:text-primary"
								>
									Leadership
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h5 className="font-bold mb-3">Connect</h5>
						<p className="text-muted-foreground text-sm">
							Follow us on social media for updates and tournament
							announcements.
						</p>
					</div>
				</div>
				<div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
					<p>© 2025 Interlake Chess Club. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
