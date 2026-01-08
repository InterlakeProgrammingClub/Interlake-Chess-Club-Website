import Link from "next/link";
import {
	clubInfo,
	meetingInfo,
	clubStats,
	aboutContent,
} from "./data";

export default function About() {
	const daysText = meetingInfo.days.join(" and ");

	return (
		<div className="min-h-screen bg-background text-foreground">
			{/* Hero Section */}
			<section className="relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5" />
				<div className="max-w-6xl mx-auto px-6 py-24 md:py-32 relative">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
						<div className="space-y-6">
							<h1 className="section-title text-balance">
								{aboutContent.hero.title}
							</h1>
							<p className="section-subtitle text-balance">
								{aboutContent.hero.subtitle}
							</p>
						</div>
						<div className="bg-card border border-border rounded-2xl p-12 flex items-center justify-center h-80 relative">
							<div className="grid grid-cols-2 gap-4 text-6xl">
								<span className="animate-pulse">♔</span>
								<span className="animate-pulse delay-100">♕</span>
								<span className="animate-pulse delay-200">♖</span>
								<span className="animate-pulse delay-300">♗</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Mission Section */}
			<section className="bg-card border-y border-border py-20">
				<div className="max-w-6xl mx-auto px-6">
					<div className="max-w-3xl mx-auto text-center space-y-6">
						<div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
							<span>♟</span> Our Mission
						</div>
						<h2 className="text-3xl md:text-4xl font-bold">
							{aboutContent.mission.title}
						</h2>
						<p className="text-muted-foreground text-lg leading-relaxed">
							{aboutContent.mission.description}
						</p>
					</div>
				</div>
			</section>

			{/* Meeting Info Section */}
			<section className="max-w-6xl mx-auto px-6 py-20">
				<div className="text-center mb-16">
					<h2 className="section-title mb-4">When & Where We Meet</h2>
					<p className="section-subtitle">
						Join us for weekly sessions of learning and play
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="feature-card text-center">
						<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
							<span className="text-3xl">📅</span>
						</div>
						<h3 className="text-xl font-bold mb-3">Meeting Days</h3>
						<p className="text-muted-foreground">
							Every <span className="text-primary font-semibold">{daysText}</span>
						</p>
						<p className="text-muted-foreground mt-2">During lunch & after school</p>
					</div>
					<div className="feature-card text-center">
						<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
							<span className="text-3xl">📍</span>
						</div>
						<h3 className="text-xl font-bold mb-3">Location</h3>
						<p className="text-muted-foreground">
							Room <span className="text-primary font-semibold">{meetingInfo.room}</span>
						</p>
						<p className="text-muted-foreground mt-2">
							{clubInfo.school}, {clubInfo.city}
						</p>
					</div>
					<div className="feature-card text-center">
						<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
							<span className="text-3xl">⏰</span>
						</div>
						<h3 className="text-xl font-bold mb-3">Time</h3>
						{meetingInfo.times.lunch.enabled && (
							<p className="text-muted-foreground">
								Lunch:{" "}
								<span className="text-primary font-semibold">
									{meetingInfo.times.lunch.start} - {meetingInfo.times.lunch.end}
								</span>
							</p>
						)}
						{meetingInfo.times.afterSchool.enabled && (
							<p className="text-muted-foreground mt-2">
								After School:{" "}
								<span className="text-primary font-semibold">
									{meetingInfo.times.afterSchool.start} - {meetingInfo.times.afterSchool.end}
								</span>
							</p>
						)}
					</div>
				</div>
			</section>

			{/* What to Expect Section */}
			<section className="bg-secondary/5 py-20">
				<div className="max-w-6xl mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="section-title mb-4">What to Expect</h2>
						<p className="section-subtitle">
							Whether you&apos;re a beginner or a grandmaster in training
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{aboutContent.expectations.map((item) => (
							<div
								key={item.title}
								className="bg-card border border-border rounded-xl p-8 space-y-4"
							>
								<div className="flex items-center gap-4">
									<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
										<span className="text-2xl">{item.icon}</span>
									</div>
									<h3 className="text-xl font-bold">{item.title}</h3>
								</div>
								<p className="text-muted-foreground">{item.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="max-w-6xl mx-auto px-6 py-20">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
					<div className="text-center">
						<div className="text-4xl md:text-5xl font-bold text-primary mb-2">
							{clubStats.activeMembers}
						</div>
						<p className="text-muted-foreground">Active Members</p>
					</div>
					<div className="text-center">
						<div className="text-4xl md:text-5xl font-bold text-primary mb-2">
							{clubStats.yearsRunning}
						</div>
						<p className="text-muted-foreground">Years Running</p>
					</div>
					<div className="text-center">
						<div className="text-4xl md:text-5xl font-bold text-primary mb-2">
							{clubStats.tournamentsPerYear}
						</div>
						<p className="text-muted-foreground">Tournaments/Year</p>
					</div>
					<div className="text-center">
						<div className="text-4xl md:text-5xl font-bold text-primary mb-2">
							{clubStats.skillLevels}
						</div>
						<p className="text-muted-foreground">Skill Levels Welcome</p>
					</div>
				</div>
			</section>

			{/* Contact CTA Section */}
			<section className="bg-primary text-primary-foreground py-20">
				<div className="max-w-4xl mx-auto px-6 text-center space-y-8">
					<h2 className="text-4xl md:text-5xl font-bold">
						{aboutContent.contactCta.title}
					</h2>
					<p className="text-lg opacity-90 max-w-2xl mx-auto">
						{aboutContent.contactCta.description}
					</p>
					<div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
						<a
							href={`mailto:${clubInfo.email}`}
							className="flex items-center gap-3 px-6 py-3 bg-primary-foreground text-primary rounded-lg font-bold transition-all hover:opacity-90 active:scale-95"
						>
							<span>📧</span>
							{clubInfo.email}
						</a>
						<Link
							href="/leadership"
							className="flex items-center gap-3 px-6 py-3 border-2 border-primary-foreground rounded-lg font-bold transition-all hover:bg-primary-foreground hover:text-primary active:scale-95"
						>
							<span>👥</span>
							Meet Our Team
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
