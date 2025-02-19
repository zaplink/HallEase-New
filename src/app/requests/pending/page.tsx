import Requestpage from '@/components/ui/Requestpage';
import SidebarLayout from '@/layouts/Sidebar/Layout';
import { createClient } from '@/lib/supabaseServer';
import { redirect } from 'next/navigation';

export default async function pending() {
	const supabase = await createClient();
	const { data, error } = await supabase.auth.getUser();
	if (error || !data?.user) {
		redirect('/login');
	}

	return (
		<SidebarLayout>
			<Requestpage />
		</SidebarLayout>
	);
}
