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
import { signup } from '@/lib/SignupActions';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';
import { Loader2 } from 'lucide-react';

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
	const [showSuccessPopup, setShowSuccessPopup] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: '',
			email: '',
			phone: '',
			password: '',
		},
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		const formData = new FormData();
		formData.append('username', values.username);
		formData.append('email', values.email);
		formData.append('phone', values.phone);
		formData.append('password', values.password);

		setIsLoading(true);
		const result = await signup(formData);

		if (result.success) {
			setShowSuccessPopup(true);
		} else {
			setErrorMessage(result.message);
		}
	}

	return (
		<>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='space-y-8'
				>
					<FormField
						control={form.control}
						name='username'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Username</FormLabel>
								<FormControl>
									<Input
										type='text'
										placeholder='Enter username'
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
										placeholder='Enter phone number'
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
								<FormLabel>Password</FormLabel>
								<FormControl>
									<Input
										type='password'
										placeholder='Enter password'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					{errorMessage && (
						<p className='text-red-500'>{errorMessage}</p>
					)}

					<Button type='submit' disabled={isLoading}>
						{isLoading ? (
							<>
								<Loader2 className='animate-spin w-5 h-5' />{' '}
								<span>Registering...</span>
							</>
						) : (
							'Register'
						)}
					</Button>
				</form>
			</Form>

			{/* Success Popup */}
			<Dialog open={showSuccessPopup} onOpenChange={setShowSuccessPopup}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Invitation Sent</DialogTitle>
					</DialogHeader>
					<p>An invitation has been sent to the provided email</p>
					<Button
						onClick={() => {
							setShowSuccessPopup(false);
							window.location.reload();
						}}
					>
						OK
					</Button>
				</DialogContent>
			</Dialog>
		</>
	);
}
