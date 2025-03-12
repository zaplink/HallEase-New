'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Hall as HallType } from './hall';

export const columns: ColumnDef<HallType>[] = [
	{
		accessorKey: 'id',
		header: 'ID',
	},
	{
		accessorKey: 'code',
		header: 'Code',
	},
	{
		accessorKey: 'capacity',
		header: 'Capacity',
	},
	{
		accessorKey: 'type',
		header: 'Type',
	},
	{
		accessorKey: 'status',
		header: 'Status',
	},
];
