'use client';

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

const formSchema = z.object({
	username: z.string().min(3, {
		message: 'Username must be at least 3 characters.',
	}),
	email: z
		.string()
		.email({ message: 'Please enter a valid email address.' })
		.transform((value) => value.trim()),
	phone: z.string().regex(/^\d{10,15}$/, {
		message: 'Please enter a valid phone number.',
	}),
	password: z
		.string()
		.min(6, { message: 'Password must be at least 6 characters long.' })
		.max(20, { message: 'Password must be at most 20 characters long.' }),
});

export default function SignupForm() {
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: '',
			email: '',
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
				{/* form fields  */}
				<FormField
					control={form.control}
					name='username'
					render={({ field }) => (
						<FormItem>
							<FormLabel className='font-semibold mb-1'>
								Username
							</FormLabel>
							<FormControl>
								<Input
									type='text'
									placeholder="This is user's public display name"
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
							<FormLabel className='font-semibold mb-1'>
								Email
							</FormLabel>
							<FormControl>
								<Input
									type='email'
									placeholder="Enter user's email address"
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
							<FormLabel className='font-semibold mb-1'>
								Phone Number
							</FormLabel>
							<FormControl>
								<Input
									type='tel'
									placeholder="Enter user's phone number"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='password'
					render={({ field }) => (
						<FormItem>
							<FormLabel className='font-semibold mb-1'>
								Password
							</FormLabel>
							<FormControl>
								<Input
									type='password'
									placeholder='Give a password for new user'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type='submit'>Register</Button>
			</form>
		</Form>
	);
}
