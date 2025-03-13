'use client';

// Fetch and return current user's data from 'profiles' table

import { createClient } from '@/lib/supabaseClient';

const supabase = createClient();

interface UserProfile {
	id: string;
	full_name: string;
	pro_pic: string;
}

export async function fetchProfile(): Promise<UserProfile | null> {
	const { data: authData, error: authError } = await supabase.auth.getUser();
	if (authError || !authData?.user) {
		console.error('Error fetching user:', authError);
		return null;
	}

	const { data: profileData, error: profileError } = await supabase
		.from('profiles')
		.select('id, full_name, pro_pic')
		.eq('id', authData.user.id)
		.single();

	if (profileError) {
		console.error('Error fetching profile:', profileError);
		return null;
	}

	return profileData;
}
