import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { AuditoriumForm } from './auditoriumForm';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Reservations = () => {
	return (
		<div
			id='public'
			className='min-h-screen flex items-center justify-center text-white 
			relative bg-gradient-to-b from-blue-200 via-white to-gray-200'
		>
			{/* Audiotium  */}

			<Tabs
				defaultValue='auditorium'
				className='transform -translate-y-10'
			>
				<TabsList>
					<TabsTrigger value='auditorium'>Auditorium</TabsTrigger>
					<TabsTrigger value='studio'>Studio</TabsTrigger>
					<TabsTrigger value='lectureRoom'>Lecture Rooms</TabsTrigger>
				</TabsList>

				<TabsContent value='auditorium'>
					<div className='bg-white shadow-lg rounded-2xl overflow-hidden w-full max-w-7xl lg:h-[80vh] grid grid-cols-1 lg:grid-cols-2'>
						{/* Left Section - Image */}
						<div className='relative h-100 lg:h-auto'>
							<Image
								src='/auditorium.jpg'
								alt='Signup'
								layout='fill'
								objectFit='cover'
								className='rounded-l-2xl'
							/>
						</div>

						{/* Right Section - Signup Form */}
						<Card className='p-8 rounded-none overflow-y-auto'>
							<p className='text-gray-500 text-lg'>
								Your Event, Our Venue.
							</p>
							<h2 className='text-2xl font-bold text-gray-800'>
								Reserve the Auditorium Today!
							</h2>

							<CardContent className='space-y-4 mt-5'>
								<AuditoriumForm />
							</CardContent>
						</Card>
					</div>
				</TabsContent>
				<TabsContent value='studio'>
					<p>Implement reservations for studio</p>
				</TabsContent>
				<TabsContent value='lectureRoom'>
					<p>Implement reservations for Lecture rooms</p>
				</TabsContent>
			</Tabs>
		</div>
	);
};

export default Reservations;
