// Retrieve and return user's role slugs using user's ID
// In: profileID
// Out: Array of role slugs

import { createClient } from '@/lib/supabaseClient';
import { PostgrestError } from '@supabase/supabase-js';

const supabase = createClient();

interface ProfileRole {
	roles: { slug: string } | { slug: string }[];
}

export async function getUserPermissions(profileId: string): Promise<string[]> {
	const {
		data,
		error,
	}: { data: ProfileRole[] | null; error: PostgrestError | null } =
		await supabase
			.from('profile_roles')
			.select('roles (slug)')
			.eq('profile_id', profileId);

	if (error || !data) {
		console.error('Error fetching permissions:', error?.message);
		return [];
	}

	return data.flatMap((role) =>
		Array.isArray(role.roles)
			? role.roles.map((r) => r.slug)
			: [role.roles.slug]
	);
}
