import { createClient } from '@/lib/supabaseClient';
import { Hall as HallType } from '@/types/hall';

export async function getHalls(): Promise<HallType[]> {
	const supabase = createClient();

	const { data, error } = await supabase.from('halls-v1').select('*');

	if (error) {
		console.error('Error fetching halls:', error.message);
		return [];
	}
	return (data ?? []) as HallType[];
}
