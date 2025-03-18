import { Loader } from 'lucide-react';
import clsx from 'clsx';

interface LoadingProps {
	className?: string;
	reason?: string; // Optional reason for loading
	pageView?: boolean; // Determines if it should have extra margin
}

export default function Loading({ className, reason, pageView }: LoadingProps) {
	return (
		<div
			className={clsx(
				'flex flex-col items-center gap-2',
				pageView && 'mt-20 mx-auto'
			)}
		>
			<Loader className={clsx('animate-spin w-5 h-5', className)} />
			{reason && (
				<span className='text-gray-600 font-light'>
					{reason + '...'}
				</span>
			)}
		</div>
	);
}
