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
import { Textarea } from '@/components/ui/textarea';
// react-icons
import { GoPerson } from 'react-icons/go';
import { TfiEmail } from 'react-icons/tfi';
import { MdOutlinePhoneIphone } from 'react-icons/md';
import { LuMessageSquareText } from 'react-icons/lu';
import { GoArrowRight } from 'react-icons/go';

const formSchema = z.object({
	firstname: z.string().min(1, { message: 'Enter your first name' }).trim(),

	lastname: z.string().min(1, { message: 'Enter your last name' }).trim(),

	email: z
		.string()
		.email({ message: 'Please enter a valid email address.' })
		.transform((value) => value.trim()),

	phone: z
		.string()
		.min(10, { message: 'Phone number must be at least 10 digits' })
		.max(15, { message: 'Phone number cannot exceed 15 digits' })
		.regex(/^\d+$/, { message: 'Phone number must contain only numbers' })
		.optional(),

	message: z.string(),
});

export function ContactUs() {
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			firstname: '',
			lastname: '',
			email: '',
			phone: '',
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
				<div className='flex gap-6 my-3'>
					<div className='w-1/2'>
						<FormField
							control={form.control}
							name='firstname'
							render={({ field }) => (
								<FormItem>
									<FormLabel className='text-white text-md font-bold'>
										First Name
									</FormLabel>
									<FormControl>
										<div className='relative'>
											<GoPerson className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500' />
											<Input
												{...field}
												type='text'
												placeholder='First Name'
												className=' bg-white text-black h-10 py-3 pl-10'
											/>
										</div>
									</FormControl>
									<FormMessage className='text-white italic' />
								</FormItem>
							)}
						/>
					</div>

					<div className='w-1/2'>
						<FormField
							control={form.control}
							name='lastname'
							render={({ field }) => (
								<FormItem>
									<FormLabel className='text-white text-md font-bold'>
										Last Name
									</FormLabel>
									<FormControl>
										<div className='relative'>
											<GoPerson className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500' />
											<Input
												{...field}
												type='text'
												placeholder='Last Name'
												className=' bg-white text-black h-10 py-3 pl-10'
											/>
										</div>
									</FormControl>
									<FormMessage className='text-white italic' />
								</FormItem>
							)}
						/>
					</div>
				</div>

				<div className='flex gap-6 my-3'>
					<div className='w-1/2'>
						<FormField
							control={form.control}
							name='email'
							render={({ field }) => (
								<FormItem>
									<FormLabel className='text-white text-md font-bold'>
										Email
									</FormLabel>
									<FormControl>
										<div className='relative'>
											<TfiEmail className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500' />
											<Input
												{...field}
												type='email'
												placeholder='Email'
												className=' bg-white text-black h-10 py-3 pl-10'
											/>
										</div>
									</FormControl>
									<FormMessage className='text-white italic' />
								</FormItem>
							)}
						/>
					</div>

					<div className='w-1/2'>
						<FormField
							control={form.control}
							name='phone'
							render={({ field }) => (
								<FormItem>
									<FormLabel className='text-white text-md font-bold'>
										Phone Number
									</FormLabel>
									<FormControl>
										<div className='relative'>
											<MdOutlinePhoneIphone className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500' />
											<Input
												{...field}
												type='tel'
												placeholder='Phone Number'
												className=' bg-white text-black h-10 py-3 pl-10'
											/>
										</div>
									</FormControl>
									<FormMessage className='text-white italic' />
								</FormItem>
							)}
						/>
					</div>
				</div>
				<FormField
					control={form.control}
					name='message'
					render={({ field }) => (
						<FormItem>
							<FormLabel className='text-white text-md font-bold'>
								Message
							</FormLabel>
							<FormControl>
								<div className='relative'>
									<LuMessageSquareText className='absolute left-3 top-6 transform -translate-y-1/2 text-gray-500' />
									<Textarea
										{...field}
										placeholder='Enter your message here...'
										className='bg-white text-black h-32 py-3 pl-10 resize-none'
									/>
								</div>
							</FormControl>
							<FormMessage className='text-white italic' />
						</FormItem>
					)}
				/>

				<Button
					type='submit'
					className='bg-white text-black hover:bg-gray-200 hover:text-black hover:scale-105 transition duration-300'
				>
					Reach Us <GoArrowRight />
				</Button>
			</form>
		</Form>
	);
}
