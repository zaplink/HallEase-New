'use server';

import { redirect } from 'next/navigation';

import { createClient } from '@/lib/supabaseServer';

export async function signup(formData: FormData) {
	const supabase = await createClient();

	// type-casting here for convenience
	const data = {
		email: formData.get('email') as string,
		password: formData.get('password') as string,
		phone: formData.get('phone') as string,
		username: formData.get('username') as string,
	};

	// Handle missing fields properly
	if (!data.username || !data.email || !data.phone || !data.password) {
		redirect('/error');
	}

	const { error } = await supabase.auth.signUp(data);

	if (error) {
		redirect('/error');
	}

	await supabase.from('users').insert(data);

	// return success instead of redirecting
	return { success: true, message: 'Invitation sent to user email.' };
}
