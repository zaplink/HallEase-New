// Just a testing component to check if components can be protected for a particular role slug
// For example role: MBR (Manage Booking Requests) this component returns a success/failure message

import { useEffect, useState } from 'react';
import { getUserPermissions } from '@/lib/auth';

type ProtectedComponentProps = {
	profileId: string;
};

export default function ProtectedComponent({
	profileId,
}: ProtectedComponentProps) {
	const [permissions, setPermissions] = useState<string[]>([]);

	useEffect(() => {
		async function fetchPermissions() {
			const userPermissions = await getUserPermissions(profileId);
			setPermissions(userPermissions);
		}
		fetchPermissions();
	}, [profileId]);

	if (!permissions.includes('MBR')) {
		return <p>Access Denied</p>;
	}

	return <p>TEST: Welcome! You can manage booking requests now.</p>;
}
