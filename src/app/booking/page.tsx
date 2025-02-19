import React from 'react';
import Bookingformnew from '@/components/ui/bookingformnew';
import SidebarLayout from '@/layouts/Sidebar/Layout';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

function page() {
	return (
		<SidebarLayout>
			<div className='pl-2 pt-4'>
				<div className='flex flex-col'>
					<Label className='font-bold text-xl'>Book a Hall</Label>
					<Label className='font-light text-sm text-gray-400'>
						Submit key details for your event to complete your
						booking efficiently.
					</Label>
					<Separator className='my-3' />
				</div>
				<Bookingformnew />
			</div>
		</SidebarLayout>
	);
}

export default page;
