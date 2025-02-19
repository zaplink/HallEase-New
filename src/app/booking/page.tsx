import React from 'react';
import Bookingformnew from '@/components/ui/bookingformnew';
import SidebarLayout from '@/layouts/Sidebar/Layout';
import { createClient } from '@/lib/supabaseServer';
import { redirect } from 'next/navigation';

async function page() {
	const supabase = await createClient();
	const { data, error } = await supabase.auth.getUser();
	if (error || !data?.user) {
		redirect('/login');
	}
	return (
		<SidebarLayout>
			<Bookingformnew />
		</SidebarLayout>
	);
}

export default page;
