import SidebarLayout from '@/layouts/Sidebar/Layout';
import React from 'react';
import SignupForm from './SignupForm';
import PageHeader from '@/components/custom/PageHeader';

const Registration = () => {
	return (
		<>
			<SidebarLayout>
				<PageHeader title='Register a New User' />
				<SignupForm />
			</SidebarLayout>
		</>
	);
};

export default Registration;
