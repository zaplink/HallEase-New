'use client';

import SidebarLayout from '@/layouts/Sidebar/Layout';
import ProtectedPage from '../../layouts/ProtectedPage';

import { Hall as HallType } from './hall';
import { columns } from './columns';
import { DataTable } from './data-table';
import { getHalls } from './getHalls';
import { useEffect, useState } from 'react';

export default function Hall() {
	const [halls, setHalls] = useState<HallType[] | null>(null);

	useEffect(() => {
		async function fetchHalls() {
			const data = await getHalls();
			setHalls(data);
		}

		fetchHalls();
	}, []);

	return (
		// Sidebar layout
		<ProtectedPage>
			<SidebarLayout>
				<div className='container mx-auto py-10'>
					{halls === null ? (
						<p>Loading halls...</p>
					) : (
						<DataTable columns={columns} data={halls} />
					)}
				</div>
			</SidebarLayout>
		</ProtectedPage>
	);
}
