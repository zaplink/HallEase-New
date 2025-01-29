'use client';

import { LayoutDashboard, Building2, Airplay, LogOut } from 'lucide-react';
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarMenu,
	SidebarMenuItem,
	SidebarMenuButton,
	SidebarHeader,
	SidebarFooter,
	SidebarGroupLabel,
	SidebarGroupContent,
	SidebarProvider,
	SidebarTrigger,
} from '@/components/ui/sidebar';
import { usePathname } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import {
	Breadcrumb,
	BreadcrumbList,
	BreadcrumbItem,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import React from 'react';
import { getBaseUrl } from '@/utils/getBaseUrl';

// Sidebar menu items
const menuItems = [
	{
		title: 'Dashboard',
		url: '/dashboard',
		icon: LayoutDashboard,
	},
	{
		title: 'Hall Manage',
		url: '/hall',
		icon: Building2,
	},
	{
		title: 'Event Manage',
		url: '/event',
		icon: Airplay,
	},
];

type SidebarLayoutProps = {
	children: React.ReactNode;
};

export default function SidebarLayout({ children }: SidebarLayoutProps) {
	// Current path of URL
	const currentPath = usePathname();

	// Calender state
	const [date, setDate] = React.useState<Date | undefined>(new Date());
	const [isCalendarVisible, setIsCalendarVisible] = useState(false);
	const toggleCalendar = () => {
		setIsCalendarVisible((prevState) => !prevState); // Toggle the calendar visibility
	};

	const baseUrl = getBaseUrl();
	// console.log(baseUrl);

	return (
		// Sidebar placeholder
		<SidebarProvider>
			{/* Sideabar */}
			<Sidebar side='left'>
				<SidebarHeader className='p-1'>
					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton className='h-auto'>
								<Avatar className='mr-5'>
									<AvatarImage src='https://github.com/shadcn.png' />
									<AvatarFallback>JD</AvatarFallback>
								</Avatar>
								<a
									href={baseUrl + '/profile'}
									className='flex flex-row justify-left'
								>
									<span className='font-bold'>John Doe</span>
								</a>
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarHeader>

				<Separator />

				<SidebarContent>
					<SidebarGroup>
						<SidebarGroupLabel>Application</SidebarGroupLabel>
						<SidebarGroupContent>
							<SidebarMenu>
								{menuItems.map((item) => (
									<SidebarMenuItem key={item.title}>
										<SidebarMenuButton
											asChild
											isActive={currentPath == item.url}
										>
											<a
												href={baseUrl + item.url}
												className='flex flex-row justify-left'
											>
												<item.icon
													size={20}
													className='mr-5'
												/>
												<span>{item.title}</span>
											</a>
										</SidebarMenuButton>
									</SidebarMenuItem>
								))}
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				</SidebarContent>

				<Separator />

				<SidebarFooter>
					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton asChild>
								<a
									href={baseUrl + '/login'}
									className='flex flex-row justify-left'
								>
									<LogOut
										size={20}
										className='mr-5 text-red-500'
									/>
									<span className='text-red-500'>Logout</span>
								</a>
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarFooter>
			</Sidebar>

			{/* Page */}
			<div className='w-full'>
				<div className='w-full pt-3 pb-4 px-2 flex flex-row items- justify-between'>
					<div className='flex flex-row items-center'>
						{/* Sidebar button */}
						<SidebarTrigger />

						{/* Separator */}
						<Separator
							orientation='vertical'
							className='h-5 mx-6'
						/>

						{/* Beadcrumb */}
						<Breadcrumb>
							<BreadcrumbList>
								<BreadcrumbItem>
									<BreadcrumbPage>System</BreadcrumbPage>
								</BreadcrumbItem>
								<BreadcrumbSeparator />
								<BreadcrumbItem>
									<BreadcrumbPage>Test</BreadcrumbPage>
								</BreadcrumbItem>
							</BreadcrumbList>
						</Breadcrumb>
					</div>

					{/* Calender button */}
					<div>
						<Button onClick={toggleCalendar} variant='secondary'>
							<CalendarIcon size={20} />
						</Button>
					</div>
				</div>

				<Separator />

				{/* Calender */}
				<div className='relative w-full'>
					{isCalendarVisible && (
						<Calendar
							mode='single'
							selected={date}
							onSelect={setDate}
							className='rounded-md border absolute bg-white z-10 top-0 right-2'
						/>
					)}
				</div>

				{/* Put page content here*/}
				<div className='px-2 pt-2 flex flex-col h-full'>{children}</div>
			</div>
		</SidebarProvider>
	);
}
