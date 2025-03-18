import React from 'react';
import BookingForm from './BookingForm';
import SidebarLayout from '@/layouts/Sidebar/Layout';
import { createClient } from '@/lib/supabaseServer';
import { redirect } from 'next/navigation';
// import { Label } from '@/components/ui/label';
// import { Separator } from '@/components/ui/separator';
import PageHeader from '@/components/custom/PageHeader';

async function page() {
	const supabase = await createClient();
	const { data, error } = await supabase.auth.getUser();
	if (error || !data?.user) {
		redirect('/login');
	}

	return (
		<SidebarLayout>
			<PageHeader
				title='Book a Hall'
				descriptions={[
					'Provide the required details to proceed with your booking',
				]}
			/>
			<BookingForm />
		</SidebarLayout>
	);
}

export default page;
