'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabaseServer';
import { store } from '@/redux/store';
import { clearAuth } from '@/redux/authSlice';

export async function logout() {
	store.dispatch(clearAuth());

	const supabase = await createClient();

	const { error } = await supabase.auth.signOut();

	if (error) {
		console.log(error);
		// redirect('/login/error');
	}

	revalidatePath('/', 'layout');
	redirect('/');
}
