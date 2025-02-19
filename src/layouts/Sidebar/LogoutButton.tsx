import { useState, useTransition } from 'react';
import { LogOut } from 'lucide-react';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogFooter,
	DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { logout } from '@/lib/logoutAction';
import { DialogTitle } from '@radix-ui/react-dialog';

export default function LogoutButton() {
	// State to control modal visibility
	const [open, setOpen] = useState(false);
	// Handle async server action
	const [isPending, startTransition] = useTransition();

	const handleLogout = () => {
		startTransition(async () => {
			await logout();
		});
	};

	return (
		<>
			{/* Logout Button (Opens the Dialog) */}
			<button
				onClick={() => setOpen(true)} // Open dialog on click
				className='flex flex-row justify-left items-center'
			>
				<LogOut size={20} className='mr-1 text-red-500' />
				<span className='text-red-500'>Logout</span>
			</button>

			{/* Logout Confirmation Modal */}
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>
							<h2 className='text-lg font-semibold'>
								Confirm Logout
							</h2>
						</DialogTitle>
						<p className='text-sm text-gray-500'>
							Are you sure you want to log out?
						</p>
					</DialogHeader>
					<DialogFooter className='flex justify-end space-x-2'>
						<DialogClose asChild>
							<Button
								variant='outline'
								onClick={() => setOpen(false)}
							>
								Cancel
							</Button>
						</DialogClose>
						<Button
							variant='destructive'
							onClick={handleLogout}
							disabled={isPending}
						>
							{isPending ? 'Logging out...' : 'Logout'}
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</>
	);
}
