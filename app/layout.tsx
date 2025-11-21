import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer, Navigation } from "@/components";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Interlake Chess Club",
	description:
		"Join Interlake Chess Club and become part of a strategic community dedicated to excellence in the game of chess.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`font-sans antialiased`}>
				<Navigation />
				{children}
				<Footer />
			</body>
		</html>
	);
}
