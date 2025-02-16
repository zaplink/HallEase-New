import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu } from 'lucide-react'; // For the mobile menu icon
// import Link from "next/link";

const Navbar = () => {
	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			window.scrollTo({
				top: element.offsetTop - 80, // Adjust for navbar height
				behavior: 'smooth',
			});
		}
	};

	return (
		<nav className='fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-md shadow-md'>
			<div className='container mx-auto px-2 flex justify-between items-center py-4'>
				{/* Logo */}
				<div
					className='flex items-center space-x-3 cursor-pointer'
					onClick={() => scrollToSection('home')}
				>
					<Image
						src='/fct-logo.png'
						alt='Logo'
						width={50}
						height={50}
						className='rounded-full'
					/>
					<span className='text-xl font-bold text-blue-600'>
						HallEase
					</span>
				</div>

				{/* Desktop Menu */}
				<div className='hidden md:flex space-x-6'>
					{['home', 'users', 'public', 'contacts'].map((section) => (
						<Button
							key={section}
							variant='ghost'
							onClick={() => scrollToSection(section)}
							className='text-lg font-medium text-gray-700 hover:text-blue-600 transition'
						>
							{section.charAt(0).toUpperCase() + section.slice(1)}
						</Button>
					))}
				</div>

				{/* Mobile Menu (Dropdown) */}
				<div className='md:hidden'>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant='ghost' size='icon'>
								<Menu className='w-6 h-6' />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align='end'>
							{['home', 'users', 'public', 'contacts'].map(
								(section) => (
									<DropdownMenuItem
										key={section}
										onClick={() => scrollToSection(section)}
									>
										{section.charAt(0).toUpperCase() +
											section.slice(1)}
									</DropdownMenuItem>
								)
							)}
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
