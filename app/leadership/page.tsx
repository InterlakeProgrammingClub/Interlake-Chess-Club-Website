import Link from "next/link";
import {
	clubInfo,
	leadershipTeam,
	advisors,
	leadershipContent,
	type TeamMember,
} from "./data";

function LeaderCard({ name, role, grade, bio, icon, isPresident }: TeamMember) {
	return (
		<div
			className={`relative p-8 rounded-2xl border transition-all hover:shadow-xl hover:-translate-y-1 ${
				isPresident
					? "bg-primary/5 border-primary/30"
					: "bg-card border-border"
			}`}
		>
			{isPresident && (
				<div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
					President
				</div>
			)}
			<div className="flex flex-col items-center text-center space-y-4">
				<div
					className={`w-24 h-24 rounded-full flex items-center justify-center text-5xl ${
						isPresident ? "bg-primary/20" : "bg-secondary/10"
					}`}
				>
					{icon}
				</div>
				<div>
					<h3 className="text-xl font-bold">{name}</h3>
					<p className="text-primary font-medium">{role}</p>
					<p className="text-sm text-muted-foreground">{grade}</p>
				</div>
				<p className="text-muted-foreground text-sm leading-relaxed">{bio}</p>
			</div>
		</div>
	);
}

export default function Leadership() {
	const president = leadershipTeam.find((m) => m.isPresident);
	const otherMembers = leadershipTeam.filter((m) => !m.isPresident);

	return (
		<div className="min-h-screen bg-background text-foreground">
			{/* Hero Section */}
			<section className="relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/5" />
				<div className="max-w-6xl mx-auto px-6 py-24 md:py-32 relative">
					<div className="max-w-3xl mx-auto text-center space-y-6">
						<h1 className="section-title">{leadershipContent.hero.title}</h1>
						<p className="section-subtitle">
							{leadershipContent.hero.subtitle}
						</p>
					</div>
				</div>
			</section>

			{/* Leadership Grid */}
			<section className="max-w-6xl mx-auto px-6 pb-20">
				{/* President - Featured */}
				{president && (
					<div className="mb-12">
						<div className="max-w-md mx-auto">
							<LeaderCard {...president} />
						</div>
					</div>
				)}

				{/* Other Officers */}
				{otherMembers.length > 0 && (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{otherMembers.map((leader) => (
							<LeaderCard key={leader.name + leader.role} {...leader} />
						))}
					</div>
				)}
			</section>

			{/* Faculty Advisor Section */}
			{advisors.length > 0 && (
				<section className="bg-card border-y border-border py-20">
					<div className="max-w-6xl mx-auto px-6">
						<div className="text-center mb-12">
							<h2 className="text-3xl font-bold mb-4">
								{advisors.length === 1 ? "Faculty Advisor" : "Faculty Advisors"}
							</h2>
							<p className="text-muted-foreground">
								Guiding our club with wisdom and experience
							</p>
						</div>
						<div
							className={`${
								advisors.length === 1
									? "max-w-md mx-auto"
									: "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto"
							}`}
						>
							{advisors.map((advisor) => (
								<LeaderCard key={advisor.name + advisor.role} {...advisor} />
							))}
						</div>
					</div>
				</section>
			)}

			{/* Responsibilities Section */}
			<section className="max-w-6xl mx-auto px-6 py-20">
				<div className="text-center mb-16">
					<h2 className="section-title mb-4">What We Do</h2>
					<p className="section-subtitle">
						Our leadership team handles all aspects of running the club
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{leadershipContent.responsibilities.map((item) => (
						<div
							key={item.title}
							className="p-6 bg-card border border-border rounded-xl text-center"
						>
							<div className="text-3xl mb-3">{item.icon}</div>
							<h3 className="font-bold mb-2">{item.title}</h3>
							<p className="text-sm text-muted-foreground">{item.description}</p>
						</div>
					))}
				</div>
			</section>

			{/* Join Leadership CTA */}
			<section className="bg-secondary/5 py-20">
				<div className="max-w-4xl mx-auto px-6">
					<div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center space-y-6">
						<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
							<span className="text-3xl">🌱</span>
						</div>
						<h2 className="text-3xl font-bold">
							{leadershipContent.joinLeadership.title}
						</h2>
						<p className="text-muted-foreground max-w-2xl mx-auto">
							{leadershipContent.joinLeadership.description}
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
							<Link href="/about" className="btn-primary">
								Learn More About Us
							</Link>
							<a
								href={`mailto:${clubInfo.email}`}
								className="btn-secondary"
							>
								Contact Us
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Bottom CTA */}
			<section className="bg-primary text-primary-foreground py-16">
				<div className="max-w-4xl mx-auto px-6 text-center space-y-6">
					<h2 className="text-3xl md:text-4xl font-bold">
						Ready to Make Your Move?
					</h2>
					<p className="text-lg opacity-90">
						Join the {clubInfo.name} and become part of our growing community!
					</p>
					<div className="flex gap-4 justify-center flex-wrap pt-2">
						<Link
							href="/play"
							className="px-8 py-3 bg-primary-foreground text-primary rounded-lg font-bold transition-all hover:opacity-90 active:scale-95"
						>
							Start Playing
						</Link>
						<Link
							href="/tournaments"
							className="px-8 py-3 border-2 border-primary-foreground rounded-lg font-bold transition-all hover:bg-primary-foreground hover:text-primary active:scale-95"
						>
							View Tournaments
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
