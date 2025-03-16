'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabaseServer';

export async function login(formData: FormData) {
	const supabase = await createClient();

	const data = {
		email: formData.get('email') as string,
		password: formData.get('password') as string,
	};

	const { error } = await supabase.auth.signInWithPassword(data);

	if (error) {
		const errorMessage = encodeURIComponent(error.message);
		redirect(`/login/error?message=${errorMessage}`);
	}

	revalidatePath('/', 'layout');
	redirect('/auth/callback');
}
