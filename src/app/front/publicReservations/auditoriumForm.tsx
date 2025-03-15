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
	eventname: z.string().min(1, {
		message: 'Please enter the event you are going to organize.',
	}),

	community: z.string().min(1, { message: 'Select the organization.' }),

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
	position: z.string(),
	email: z.string().email({ message: 'Enter a valid email address.' }),

	phone: z.string().regex(/^\+?[0-9]{10,15}$/, {
		message: 'Enter a valid phone number (10-15 digits, optional +).',
	}),
});

export function AuditoriumForm() {
	const [agreed, setAgreed] = useState(false);
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			eventname: '',
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}

	const eventType = [
		{ value: 'foss', label: 'FOSS Community' },
		{ value: 'ieee', label: 'IEEE' },
		{ value: 'isaca', label: 'ISACA' },
		{ value: 'cssa', label: 'CSSA' },
		{ value: 'greenclub', label: 'Green Club' },
		{ value: 'legion', label: 'Legion' },
		{ value: 'leo', label: 'Leo' },
		{ value: 'rotaract', label: 'Rotaract' },
		{ value: 'aws', label: 'AWS Community' },
	];

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
				<FormField
					control={form.control}
					name='eventname'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Event Name</FormLabel>
							<FormControl>
								<Input
									placeholder='Name of the event'
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
					name='community'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Organized By</FormLabel>
							<FormControl>
								<Combobox
									options={eventType}
									placeholder='Enter your organization / company (if any)'
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

				<FormField
					control={form.control}
					name='description'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Description</FormLabel>
							<FormControl>
								<Input
									placeholder='Briefly describe your event or function'
									type='text'
									{...field}
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

				{/* contact details of the applicant  */}
				<hr />

				<p className='text-gray-500 text-lg m-0'>Contact details</p>

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
					name='position'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Position</FormLabel>
							<FormControl>
								<Input
									type='text'
									placeholder='Enter your position in the organization or company'
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
