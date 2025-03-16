import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from '@/redux/store';
import { createClient as createClientInstance } from '@/lib/supabaseClient';

interface UserProfile {
	id: string;
	full_name: string;
	pro_pic: string;
	email: string;
	role: string;
	permissions: string[];
}

interface AuthState {
	user: UserProfile | null;
	loading: boolean;
	error: string | null;
}

const initialState: AuthState = {
	user: null,
	loading: false,
	error: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<UserProfile>) => {
			state.user = action.payload;
			state.loading = false;
			state.error = null;
		},
		setLoading: (state) => {
			state.loading = true;
			state.error = null;
		},
		setError: (state, action: PayloadAction<string>) => {
			state.loading = false;
			state.error = action.payload;
		},
		clearAuth: (state) => {
			state.user = null;
			state.loading = false;
			state.error = null;
		},
	},
});

export const { setUser, setLoading, setError, clearAuth } = authSlice.actions;

export const fetchUserData = () => async (dispatch: AppDispatch) => {
	dispatch(setLoading());

	const supabase = createClientInstance();

	try {
		dispatch(clearAuth());

		const { data: authData, error: authError } =
			await supabase.auth.getUser();
		if (authError || !authData?.user)
			throw new Error('Authentication failed');

		const { data: profile, error: profileError } = await supabase
			.from('profiles')
			.select('id, full_name, pro_pic, email, role')
			.eq('id', authData.user.id)
			.single();

		if (profileError || !profile) throw new Error('Profile not found');

		const { data: permissionsData, error: permissionsError } =
			await supabase
				.from('role_permissions')
				.select('permission_tag')
				.eq('role_tag', profile.role);

		if (permissionsError) throw new Error('Failed to load permissions');

		const userData: UserProfile = {
			...profile,
			permissions: permissionsData.map((p) => p.permission_tag),
		};

		dispatch(setUser(userData));
	} catch (error) {
		dispatch(clearAuth());
		dispatch(
			setError(
				error instanceof Error
					? error.message
					: 'An unknown error occurred'
			)
		);
	}
};

// **Thunk to Logout**
export const logoutUser = () => async (dispatch: AppDispatch) => {
	const supabase = createClientInstance();

	try {
		await supabase.auth.signOut(); // Sign out from Supabase
		dispatch(clearAuth()); // Clear Redux state
	} catch (error) {
		dispatch(setError('Logout failed'));
		console.log(error);
	}
};

export default authSlice.reducer;
