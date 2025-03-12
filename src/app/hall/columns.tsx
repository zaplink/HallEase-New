'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Hall as HallType } from './hall';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { MoreHorizontal, ArrowUpDown } from 'lucide-react';
import { toast } from 'sonner';

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
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === 'asc')
					}
				>
					Capacity
					<ArrowUpDown className='ml-2 h-4 w-4' />
				</Button>
			);
		},
	},
	{
		accessorKey: 'type',
		header: 'Type',
	},
	{
		accessorKey: 'status',
		header: 'Status',
	},
	{
		id: 'actions',
		cell: ({ row }) => {
			const hall = row.original;

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant='ghost' className='h-8 w-8 p-0'>
							<span className='sr-only'>Open menu</span>
							<MoreHorizontal className='h-4 w-4' />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align='end'>
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuItem
							onClick={() => {
								navigator.clipboard.writeText(hall.id);
								toast('Hall ID Copied!');
							}}
						>
							Copy Hall ID
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Book Hall</DropdownMenuItem>
						<DropdownMenuItem>View Hall</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
