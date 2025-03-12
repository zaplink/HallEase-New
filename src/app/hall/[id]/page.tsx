'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import SidebarLayout from '@/layouts/Sidebar/Layout';
import { Hall as HallType } from '@/types/hall';
import { getHall } from '@/lib/getHall';

export default function Hall() {
	const { id } = useParams<{ id: string }>();

	const [hall, setHall] = useState<HallType | null>(null);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		if (!id) return;

		setLoading(true);
		getHall(id).then((data) => {
			setHall(data);
			setLoading(false);
		});
	}, [id]);

	if (loading) {
		return (
			<SidebarLayout>
				<p>Loading...</p>
			</SidebarLayout>
		);
	}

	if (!hall) {
		return (
			<SidebarLayout>
				<p>Hall not found</p>
			</SidebarLayout>
		);
	}

	return (
		<SidebarLayout>
			<div>
				<h1>ID: {hall.id}</h1>
				<p>Capacity: {hall.capacity}</p>
			</div>
		</SidebarLayout>
	);
}
