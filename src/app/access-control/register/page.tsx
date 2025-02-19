import SidebarLayout from '@/layouts/Sidebar/Layout';
import React from 'react';
import SignupForm from './SignupForm';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

const Registration = () => {
	return (
		<>
			<SidebarLayout>
				<div className='mb-12'>
					<Label className='font-bold text-xl'>
						Register a New User
					</Label>
					<Separator className='my-3' />
				</div>

				<SignupForm />
			</SidebarLayout>
		</>
	);
};

export default Registration;
