'use client';

import { Button } from './button';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

function Requestpage() {
	return (
		<div>
			<Card>
				<CardHeader>
					<CardTitle>Request ID: 1002</CardTitle>
					<CardDescription className='flex flex-row gap-6'>
						<span>2025-01-01</span>
						<span>08.00 AM</span>
						<span>John Doe</span>
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Table>
						<TableBody>
							<TableRow>
								<TableCell className='flex flex-col'>
									<span className='font-semibold'>
										Event Name
									</span>
									<span className='font-medium text-gray-600'>
										Dream Big 2025 Conference
									</span>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className='flex flex-col'>
									<span className='font-semibold'>
										Event Type
									</span>
									<span className='font-medium text-gray-600'>
										Seminar
									</span>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className='flex flex-col'>
									<span className='font-semibold'>
										Organized By
									</span>
									<span className='font-medium text-gray-600'>
										Innovative Society
									</span>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className='flex flex-col'>
									<span className='font-semibold'>
										Event Description
									</span>
									<span className='font-medium text-gray-600'>
										An inspiring event that brings creative
										minds together.
									</span>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className='flex flex-col'>
									<span className='font-semibold'>
										Number of Attendees
									</span>
									<span className='font-medium text-gray-600'>
										100
									</span>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className='flex flex-col'>
									<span className='font-semibold'>
										Hall/Location
									</span>
									<span className='font-medium text-gray-600'>
										AB-LCH-01
									</span>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className='flex flex-col'>
									<span className='font-semibold'>
										Contact Email
									</span>
									<span className='font-medium text-gray-600'>
										example@domain.com
									</span>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className='flex flex-col'>
									<span className='font-semibold'>
										Contact Phone
									</span>
									<span className='font-medium text-gray-600'>
										(123) 456-7890
									</span>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className='flex flex-col'>
									<span className='font-semibold'>
										Special Requests
									</span>
									<span className='font-medium text-gray-600'>
										Please arrange extra chairs.
									</span>
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</CardContent>
				<CardFooter className='flex flex-row gap-4'>
					<Button>Approve</Button>
					<Button>Reject</Button>
				</CardFooter>
			</Card>
		</div>
	);
}

export default Requestpage;
