'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Combobox } from '@/components/combobox';

const formSchema = z.object({
	requirements: z.string(),

	lecture: z.string().min(1, { message: 'Select the organization.' }),

	description: z.string().min(10, {
		message: 'Description must be at least 10 characters long.',
	}),

	attendence: z
		.number()
		.min(100, { message: 'Minimum attendance should be 100.' })
		.max(1000, { message: 'Maximum attendance should be 1000.' }),

	date: z
		.string()
		.regex(/^\d{4}-\d{2}-\d{2}$/, {
			message: 'Invalid date format. Use YYYY-MM-DD.',
		})
		.transform((val) => new Date(val)),

	starttime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
		message: 'Invalid time format. Use HH:MM (24-hour format).',
	}),

	endtime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
		message: 'Invalid time format. Use HH:MM (24-hour format).',
	}),

	// contact details
	applicant: z.string(),
	affiliation: z.string(),
	email: z.string().email({ message: 'Enter a valid email address.' }),

	phone: z.string().regex(/^\+?[0-9]{10,15}$/, {
		message: 'Enter a valid phone number (10-15 digits, optional +).',
	}),
});

export function LectureForm() {
	const [agreed, setAgreed] = useState(false);
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			// eventname: '',
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}

	const lecturerooms = [
		{ value: 'general', label: 'General Lecture Room' },
		{ value: 'seminar', label: 'Seminar Hall' },
		{ value: 'conference', label: 'Conference Room' },
		{ value: 'computer_lab', label: 'Computer Lab' },
		{ value: 'network_lab', label: 'Network Lab' },
		{ value: 'chemistry_lab', label: 'Chemistry Lab' },
		{ value: 'engineering_workroom', label: 'Engineering Workroom' },
		{ value: 'language_lab', label: 'Language Lab' },
		{ value: 'discussion_room', label: 'Discussion Room' },
		{ value: 'tutorial_room', label: 'Tutorial Room' },
		{ value: 'project_presentation', label: 'Project Presentation Room' },
		{ value: 'multimedia_room', label: 'Multimedia Room' },
		{ value: 'virtual_classroom', label: 'Virtual Classroom' },
		{ value: 'science_lab', label: 'Science Lab' },
	];

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
				<FormField
					control={form.control}
					name='lecture'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Type of Room</FormLabel>
							<FormControl>
								<Combobox
									options={lecturerooms}
									placeholder='Choose the type of lecture room you need'
									value={field.value}
									onChange={(selected) =>
										field.onChange(selected)
									}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<div className='flex gap-6'>
					<div className='w-1/2'>
						<FormField
							control={form.control}
							name='attendence'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Number of Attendance</FormLabel>
									<FormControl>
										<Input
											placeholder='Estimated number of attendees'
											type='number'
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<div className='w-1/2'>
						<FormField
							control={form.control}
							name='date'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Date</FormLabel>
									<FormControl>
										<Input
											placeholder='Date'
											type='date'
											value={
												field.value
													? new Date(field.value)
															.toISOString()
															.split('T')[0]
													: ''
											}
											onChange={(e) =>
												field.onChange(e.target.value)
											}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
				</div>

				<div className='flex gap-6'>
					<div className='w-1/2'>
						<FormField
							control={form.control}
							name='starttime'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Start Time</FormLabel>
									<FormControl>
										<Input type='time' {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<div className='w-1/2'>
						<FormField
							control={form.control}
							name='endtime'
							render={({ field }) => (
								<FormItem>
									<FormLabel>End Time</FormLabel>
									<FormControl>
										<Input type='time' {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
				</div>

				<FormField
					control={form.control}
					name='applicant'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input
									type='text'
									placeholder="Enter the applicant's name"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									type='email'
									placeholder='Enter email'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='phone'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Phone Number</FormLabel>
							<FormControl>
								<Input
									type='tel'
									placeholder='Enter phone number (WhatsApp preffered)'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='affiliation'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Affiliation/Organization</FormLabel>
							<FormControl>
								<Input
									type='text'
									placeholder='Enter your organization or entity'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='requirements'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Additional Requirements</FormLabel>
							<FormControl>
								<Input
									placeholder='If any Equipment Needed?'
									type='text'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='description'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Description</FormLabel>
							<FormControl>
								<Input
									placeholder='Briefly explain the purpose of the lecture'
									type='text'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<div className='flex items-center gap-2'>
					<input
						type='checkbox'
						id='terms'
						checked={agreed}
						onChange={() => setAgreed(!agreed)}
						className='w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500'
					/>
					<label htmlFor='terms' className='text-gray-700 text-sm'>
						I agree to the{' '}
						<a
							href='/terms'
							className='text-blue-600 hover:underline'
						>
							Terms and Conditions
						</a>
					</label>
				</div>

				<Button type='submit' className='w-full'>
					Submit
				</Button>
			</form>
		</Form>
	);
}
