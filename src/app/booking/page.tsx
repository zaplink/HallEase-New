import React from 'react';
import Bookingformnew from '@/components/ui/bookingformnew';
import SidebarLayout from '@/layouts/SidebarLayout';
import { createClient } from '@/lib/supabaseServer';
import { redirect } from 'next/navigation';

async function page() {
	// navigate back to login if user not logged
	const supabase = await createClient();

	const { data, error } = await supabase.auth.getUser();
	if (error || !data?.user) {
		redirect('/');
	}
	return (
		<>
			<SidebarLayout>
				<Bookingformnew />
			</SidebarLayout>
		</>
	);
}

export default page;
