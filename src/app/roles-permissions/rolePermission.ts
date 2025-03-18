export type Permission = {
	permissionTag: string;
	description: string;
};

export type Role = {
	roleTag: string;
	description: string;
	permissions: Permission[];
};
