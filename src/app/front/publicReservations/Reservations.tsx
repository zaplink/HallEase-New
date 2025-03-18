import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Auditorium from './Auditorium';
import Studio from './Studio';
import LectureRooms from './LectureRooms';

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
					<Auditorium />
				</TabsContent>
				<TabsContent value='studio'>
					<Studio />
				</TabsContent>
				<TabsContent value='lectureRoom'>
					<LectureRooms />
				</TabsContent>
			</Tabs>
		</div>
	);
};

export default Reservations;
