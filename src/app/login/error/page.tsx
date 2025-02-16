'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ErrorPage() {
	const searchParams = useSearchParams();
	const errorMessage =
		searchParams.get('message') || 'Something went wrong while logging in.';
	return (
		<>
			<div className='flex flex-col items-center justify-center h-screen text-center gap-2'>
				<h2 className='text-4xl font-bold'>HallEase</h2>
				<h1 className='text-2xl font-bold'>Login Error</h1>
				<p className='text-gray-500'>
					{decodeURIComponent(errorMessage)}
				</p>
				<Button asChild>
					<Link href='/login'>Try again</Link>
				</Button>
			</div>
		</>
	);
}
