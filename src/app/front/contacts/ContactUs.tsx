import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaFacebookMessenger } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { ContactUs } from './contactform';

const TestUs = () => {
	return (
		<div
			id='contacts'
			style={{
				backgroundImage: "url('/fct3.jpg')",
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				height: '100vh',
				position: 'absolute',
				left: 0,
				width: '100%',
				zIndex: -1,
			}}
		>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					height: '100%',
				}}
			>
				<div className='container mx-auto p-20 bg-black bg-opacity-35 rounded-3xl'>
					<h2 className='text-6xl font-bold text-white no-3 uppercase mb-10'>
						CONTACT & SUPPORT
					</h2>

					<ContactUs />

					<footer className='mt-5 text-center text-white font-semibold text-sm'>
						<div className='flex justify-center gap-5 mb-5'>
							<a
								href='#'
								className=' hover:text-slate-500 transition duration-300'
							>
								<FaFacebook />
							</a>
							<a
								href='#'
								className=' hover:text-slate-500 transition duration-300'
							>
								<FaFacebookMessenger />
							</a>
							<a
								href='#'
								className=' hover:text-slate-500 transition duration-300'
							>
								<FaInstagram />
							</a>
							<a
								href='#'
								className=' hover:text-slate-500 transition duration-300'
							>
								<FaTwitter />
							</a>
						</div>
						Copyright &copy; {new Date().getFullYear()} - All Rights
						are Reserved. <br />
						Team ZapLink
					</footer>
				</div>
			</div>
		</div>
	);
};

export default TestUs;
