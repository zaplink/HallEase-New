import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from '@/redux/store';
import { createClient } from '@/lib/supabaseClient';

// Define Profile Type
interface UserProfile {
	id: string;
	full_name: string;
	pro_pic: string;
	email: string;
	role: string;
	permissions: string[];
}

// Define Redux State
interface AuthState {
	user: UserProfile | null;
	fullProfile: UserProfile | null;
	loading: boolean;
	error: string | null;
}

// Initial State
const initialState: AuthState = {
	user: null,
	fullProfile: null,
	loading: false,
	error: null,
};

// Create Redux Slice
const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<UserProfile>) => {
			state.user = action.payload;
			state.loading = false;
			state.error = null;
		},
		setFullProfile: (state, action: PayloadAction<UserProfile>) => {
			state.fullProfile = action.payload;
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
			state.fullProfile = null;
			state.loading = false;
			state.error = null;
		},
	},
});

// Export Actions
export const { setUser, setFullProfile, setLoading, setError, clearAuth } =
	authSlice.actions;

// Export Reducer
export default authSlice.reducer;

// **Thunk Function to Fetch Profile**
export const fetchUserData = () => async (dispatch: AppDispatch) => {
	const supabase = createClient();
	dispatch(setLoading()); // 🔹 Start loading

	try {
		// Fetch user data from Supabase Auth
		const { data: authData, error: authError } =
			await supabase.auth.getUser();
		if (authError || !authData?.user) {
			throw new Error('Authentication failed');
		}

		// Fetch user profile from database
		const { data: profile, error: profileError } = await supabase
			.from('profiles')
			.select('id, full_name, pro_pic, email, role')
			.eq('id', authData.user.id)
			.single();

		if (profileError || !profile) {
			throw new Error('Profile not found: ' + authData.user.id);
		}

		// Fetch permissions based on user role
		const { data: permissionsData, error: permissionsError } =
			await supabase
				.from('role_permissions')
				.select('permission_tag')
				.eq('role_tag', profile.role);

		if (permissionsError) {
			throw new Error('Failed to load permissions');
		}

		// Extract permissions array
		const permissions = permissionsData.map((p) => p.permission_tag);

		// Construct user profile
		const userData: UserProfile = {
			...profile,
			permissions,
		};

		// Store user data in Redux
		dispatch(setUser(userData));
	} catch (error) {
		if (error instanceof Error) {
			dispatch(setError(error.message)); // Capture error
			console.error('Error fetching user data:', error.message);
		} else {
			dispatch(setError('An unknown error occurred'));
			console.error('Unexpected error:', error);
		}
	}
};
