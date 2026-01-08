// =====================================================
// LEADERSHIP PAGE - CUSTOMIZABLE DATA
// Replace all [PLACEHOLDER] values with your info
// Icons can be chess pieces (♔♕♖♗♘♙) or emojis
// =====================================================

export const clubInfo = {
	name: "Interlake Chess Club",
	email: "[EMAIL]@example.com",
};

export interface TeamMember {
	name: string;
	role: string;
	grade: string;
	bio: string;
	icon: string;
	isPresident?: boolean;
}

export const leadershipTeam: TeamMember[] = [
	{
		name: "[PRESIDENT NAME]",
		role: "President",
		grade: "[GRADE]",
		bio: "[BIO]",
		icon: "♔",
		isPresident: true,
	},
	{
		name: "[VP NAME]",
		role: "Vice President",
		grade: "[GRADE]",
		bio: "[BIO]",
		icon: "♕",
	},
	{
		name: "[NAME]",
		role: "[ROLE]",
		grade: "[GRADE]",
		bio: "[BIO]",
		icon: "♖",
	},
	// Add more team members:
	// {
	// 	name: "[NAME]",
	// 	role: "[ROLE]",
	// 	grade: "[GRADE]",
	// 	bio: "[BIO]",
	// 	icon: "♗",
	// },
];

export const advisors: TeamMember[] = [
	{
		name: "[ADVISOR NAME]",
		role: "Faculty Advisor",
		grade: "[DEPARTMENT]",
		bio: "[BIO]",
		icon: "👨‍🏫",
	},
];

export const leadershipContent = {
	hero: {
		title: "Meet Our Leadership",
		subtitle: "[LEADERSHIP PAGE SUBTITLE]",
	},

	responsibilities: [
		{
			icon: "📋",
			title: "Planning",
			description: "[DESCRIPTION]",
		},
		{
			icon: "🎯",
			title: "Coaching",
			description: "[DESCRIPTION]",
		},
		{
			icon: "🏅",
			title: "Tournaments",
			description: "[DESCRIPTION]",
		},
		{
			icon: "🌟",
			title: "Community",
			description: "[DESCRIPTION]",
		},
	],

	joinLeadership: {
		title: "Interested in Leadership?",
		description: "[JOIN LEADERSHIP DESCRIPTION]",
	},
};

