'use client';

import SidebarLayout from '@/layouts/Sidebar/Layout';
import ProtectedPage from '../../layouts/ProtectedPage';

import { Hall as HallType } from '@/types/hall';
import { columns } from './columns';
import { DataTable } from './data-table';
import { getHalls } from '@/lib/getHalls';
import { useEffect, useState } from 'react';
import ProtectedComponent from './ProtectedComponent';
import { fetchProfile } from '@/lib/fetchProfile';

export default function Hall() {
	const [halls, setHalls] = useState<HallType[] | null>(null);
	const [profile, setProfile] = useState<{
		full_name: string;
		id: string;
	} | null>(null);
	// const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchHalls() {
			const data = await getHalls();
			setHalls(data);
		}

		async function fetchUser() {
			const profileData = await fetchProfile();
			setProfile(profileData);
			// setLoading(false);
		}

		fetchHalls();
		fetchUser();
	}, []);

	return (
		// Sidebar layout
		<ProtectedPage>
			<SidebarLayout>
				<div className='container mx-auto'>
					{halls === null ? (
						<p>Loading halls...</p>
					) : (
						<>
							{profile === null ? (
								<p>Loading profile...</p>
							) : (
								<ProtectedComponent profileId={profile?.id} />
							)}
							<DataTable columns={columns} data={halls} />
						</>
					)}
				</div>
			</SidebarLayout>
		</ProtectedPage>
	);
}
