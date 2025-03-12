'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Hall } from './hall';

export const columns: ColumnDef<Hall>[] = [
	{
		accessorKey: 'id',
		header: 'ID',
	},
	{
		accessorKey: 'type',
		header: 'Type',
	},
	{
		accessorKey: 'capacity',
		header: 'Capacity',
	},
	{
		accessorKey: 'status',
		header: 'Status',
	},
];
