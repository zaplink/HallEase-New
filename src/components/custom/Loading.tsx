import { Loader } from 'lucide-react';
import clsx from 'clsx';

interface LoadingProps {
	className?: string;
}

export default function Loading({ className }: LoadingProps) {
	return <Loader className={clsx('animate-spin w-5 h-5', className)} />;
}
