import Requestpage from '@/components/ui/Requestpage';
import SidebarLayout from '@/layouts/SidebarLayout';
import { createClient } from '@/lib/supabaseServer';
import { redirect } from 'next/navigation';

export default async function pending() {
	// navigate back to login if user not logged
	const supabase = await createClient();

	const { data, error } = await supabase.auth.getUser();
	if (error || !data?.user) {
		redirect('/');
	}

	return (
		<>
			<SidebarLayout>
				<Requestpage />
			</SidebarLayout>
		</>
	);
}
