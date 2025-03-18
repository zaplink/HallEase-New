import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Role, Permission } from './rolePermission';

// Custom Hook for fetching role permissions
export const useRolePermissions = () => {
	const [rolePermissions, setRolePermissions] = useState<Role[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchRolePermissions = async () => {
			setLoading(true);
			setError(null);

			try {
				// ✅ Fetch roles with proper aliasing
				const { data: roles, error: rolesError } = await supabase
					.from('roles')
					.select('tag, description');
				if (rolesError) throw rolesError;

				// ✅ Fetch permissions with proper aliasing
				const { data: permissions, error: permissionsError } =
					await supabase
						.from('permissions')
						.select('tag, description');
				if (permissionsError) throw permissionsError;

				// ✅ Fetch role-permissions mapping
				const {
					data: rolePermissionsData,
					error: rolePermissionsError,
				} = await supabase
					.from('role_permissions')
					.select('role_tag, permission_tag');
				if (rolePermissionsError) throw rolePermissionsError;

				// ✅ Convert database column names to match TypeScript naming
				const formattedRoles: Role[] = roles.map((role) => ({
					roleTag: role.tag, // ✅ Convert snake_case to camelCase
					description: role.description,
					permissions: rolePermissionsData
						.filter((rp) => rp.role_tag === role.tag)
						.map((rp) => {
							// Find the matching permission
							const permission = permissions.find(
								(p) => p.tag === rp.permission_tag
							);
							return permission
								? {
										permissionTag: permission.tag,
										description: permission.description,
									}
								: null;
						})
						.filter((p): p is Permission => p !== null), // ✅ Ensure the type is correct
				}));

				setRolePermissions(formattedRoles);
			} catch (error) {
				if (error instanceof Error) {
					setError(error.message);
				} else {
					setError('An unknown error occurred.');
				}
			} finally {
				setLoading(false);
			}
		};

		fetchRolePermissions();
	}, []);

	return { rolePermissions, loading, error };
};
