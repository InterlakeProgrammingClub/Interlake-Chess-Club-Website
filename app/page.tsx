import Link from "next/link";

export default function Home() {
	return (
		<div className="min-h-screen bg-background text-foreground">
			<section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
					<div className="space-y-8">
						<h1 className="section-title text-balance">
							Master the Ancient Game of Strategy
						</h1>
						<p className="section-subtitle text-balance">
							Join our thriving chess community where students of all levels
							gather to learn, compete, and grow intellectually through the
							timeless game of chess.
						</p>
						<div className="flex gap-4 flex-wrap pt-4">
							<Link href="/play" className="btn-primary">
								Play Now
							</Link>
							<Link href="/tournaments" className="btn-secondary">
								View Tournaments
							</Link>
						</div>
					</div>
					<div className="bg-primary/10 rounded-xl p-12 flex items-center justify-center h-96 relative overflow-hidden">
						<div className="text-8xl animate-pulse">♟</div>
						<div className="absolute top-8 right-8 text-6xl opacity-50">♖</div>
						<div className="absolute bottom-8 left-8 text-6xl opacity-50">
							♘
						</div>
					</div>
				</div>
			</section>

			<section className="bg-card border-t border-border py-20">
				<div className="max-w-6xl mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="section-title mb-4">Why Join Our Club?</h2>
						<p className="section-subtitle">
							Everything you need to become a better player
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="feature-card">
							<div className="text-4xl mb-4">📚</div>
							<h3 className="text-xl font-bold mb-3">Learn & Grow</h3>
							<p className="text-muted-foreground">
								Access tutorials, strategies, and guidance from experienced
								players to improve your game.
							</p>
						</div>
						<div className="feature-card">
							<div className="text-4xl mb-4">🏆</div>
							<h3 className="text-xl font-bold mb-3">Compete</h3>
							<p className="text-muted-foreground">
								Participate in tournaments and matches against fellow students
								to test your skills.
							</p>
						</div>
						<div className="feature-card">
							<div className="text-4xl mb-4">👥</div>
							<h3 className="text-xl font-bold mb-3">Community</h3>
							<p className="text-muted-foreground">
								Build friendships with like-minded players and join a supportive
								chess community.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="max-w-6xl mx-auto px-6 py-20">
				<div className="space-y-12">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
						<div className="space-y-4">
							<h3 className="text-3xl font-bold">Built-in Chess Engine</h3>
							<p className="text-muted-foreground text-lg">
								Practice against our powerful chess engine with adjustable
								difficulty levels. Analyze your moves and improve your strategy
								in real-time.
							</p>
							<Link href="/play" className="inline-block btn-primary mt-4">
								Start Playing
							</Link>
						</div>
						<div className="bg-secondary/5 rounded-xl p-12 flex items-center justify-center h-80">
							<div className="text-6xl">♔</div>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
						<div className="bg-primary/5 rounded-xl p-12 flex items-center justify-center h-80 md:order-2">
							<div className="text-6xl">🏅</div>
						</div>
						<div className="space-y-4 md:order-1">
							<h3 className="text-3xl font-bold">Tournament Calendar</h3>
							<p className="text-muted-foreground text-lg">
								Stay updated on upcoming tournaments and events. Register for
								competitions and track your rankings throughout the school year.
							</p>
							<Link
								href="/tournaments"
								className="inline-block btn-primary mt-4"
							>
								View Schedule
							</Link>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-primary text-primary-foreground py-20 mt-8">
				<div className="max-w-4xl mx-auto px-6 text-center space-y-8">
					<h2 className="text-4xl md:text-5xl font-bold">Ready to Join?</h2>
					<p className="text-lg opacity-90 max-w-2xl mx-auto">
						Get started today and become part of our chess community. Whether
						you're a beginner or an experienced player, there's a place for you
						here.
					</p>
					<div className="flex gap-4 justify-center flex-wrap">
						<Link
							href="/about"
							className="px-8 py-3 bg-primary-foreground text-primary rounded-lg font-bold transition-all hover:opacity-90 active:scale-95"
						>
							Get In Touch
						</Link>
						<Link
							href="/tournaments"
							className="px-8 py-3 border-2 border-primary-foreground rounded-lg font-bold transition-all hover:bg-primary-foreground hover:text-primary active:scale-95"
						>
							Learn More
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
