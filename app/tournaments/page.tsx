import Link from "next/link";

export default function Tournaments() {
	return (
		<div className="min-h-screen bg-background text-foreground">
			<section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
				<div className="text-center mb-16">
					<h1 className="section-title mb-4">Chess Tournaments</h1>
					<p className="section-subtitle max-w-2xl mx-auto">
						Stay updated on the latest tournaments. Register, compete,
						and track your progress throughout the season.
					</p>
				</div>

				{/* Tournament List */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
					<TournamentCard
						title="Tournament 1"
						date="N/A"
						status="upcoming"
						description="Details coming soon."
					/>

					<TournamentCard
						title="Tournament 2"
						date="N/A"
						status="upcoming"
						description="Details coming soon."
					/>

					<TournamentCard
						title="Tournament 3"
						date="N/A"
						status="upcoming"
						description="Details coming soon."
					/>
				</div>
			</section>

			{/* CTA */}
			<section className="bg-primary text-primary-foreground py-20 mt-8">
				<div className="max-w-4xl mx-auto px-6 text-center space-y-8">
					<h2 className="text-4xl md:text-5xl font-bold">Want to Compete?</h2>
					<p className="text-lg opacity-90 max-w-2xl mx-auto">
						View upcoming events and secure your spot in the next tournament.
					</p>
					<Link
						href="/register"
						className="px-8 py-3 bg-primary-foreground text-primary rounded-lg font-bold transition-all hover:opacity-90 active:scale-95"
					>
						Register Now
					</Link>
				</div>
			</section>
		</div>
	);
}
