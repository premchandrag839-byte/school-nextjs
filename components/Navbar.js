import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About" },
	{ href: "/academics", label: "Academics" },
	{ href: "/admissions", label: "Admissions" },
	{ href: "/gallery", label: "Gallery" },
	{ href: "/contact", label: "Contact" },
];

export default function Navbar() {
	const [open, setOpen] = useState(false);

	return (
		<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-blue-100">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<Link href="/" className="flex items-center gap-2">
						<Image
							src="/assets/logo.png"
							alt="AKASH INTER COLLEGE logo"
							width={36}
							height={36}
							className="h-9 w-9 rounded"
						/>
						<span className="font-bold text-primary">
							AKASH INTER COLLEGE
						</span>
					</Link>

					<div className="hidden md:flex items-center gap-6">
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
							>
								{item.label}
							</Link>
						))}
						<Link
							href="/admissions"
							className="px-4 py-2 rounded bg-primary text-white hover:bg-primary-dark transition-colors"
						>
							Admission Open
						</Link>
					</div>

					<button
						aria-label="Toggle Menu"
						className="md:hidden inline-flex items-center justify-center p-2 rounded hover:bg-blue-50"
						onClick={() => setOpen((v) => !v)}
					>
						<span className="i">☰</span>
					</button>
				</div>
			</div>

			<AnimatePresence>
				{open && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						className="md:hidden overflow-hidden border-t border-blue-100"
					>
						<div className="px-4 py-3 flex flex-col gap-3 bg-white">
							{navItems.map((item) => (
								<Link
									key={item.href}
									href={item.href}
									onClick={() => setOpen(false)}
									className="text-sm font-medium text-gray-700 hover:text-primary"
								>
									{item.label}
								</Link>
							))}
							<Link
								href="/admissions"
								onClick={() => setOpen(false)}
								className="px-4 py-2 text-center rounded bg-primary text-white"
							>
								Admission Open
							</Link>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
}
