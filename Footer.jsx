import React from 'react';
import config from '../config/config.json';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	const copyrightText = config.footer.copyright.replace('{{currentYear}}', currentYear);

	return (
		<div className='bg-[#0e0d0d] text-white py-20 px-6 lg:px-20'>
			<div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12'>
				<div className='flex flex-col items-center lg:items-start'>
					<img className='h-32 mb-4' src={config.footer.logoSrc} alt='Logo' />
					<h2 className='text-2xl font-bold uppercase text-center lg:text-left'>{copyrightText}</h2>
					<p className='mt-4 text-sm opacity-80 text-center lg:text-left max-w-md'>{config.footer.disclaimer1}</p>
				</div>

				<div className='flex flex-col items-center lg:items-start'>
					<p className='text-2xl font-bold uppercase underline decoration-[#f92763] underline-offset-4 mb-4'>
						Contact & Info
					</p>
					<ul className='space-y-2 text-lg'>
						<li>
							<span className='font-semibold'>Email:</span>{' '}
							<a href={config.footer.contact.emailHref} className='text-[#f92763] hover:underline'>
								{config.footer.contact.email}
							</a>
						</li>
						<li>
							<span className='font-semibold'>Forum:</span>{' '}
							<a href={config.footer.contact.forumHref} className='text-[#f92763] hover:underline'>
								{config.footer.contact.forum}
							</a>
						</li>
					</ul>

					<p className='mt-10 text-sm opacity-80 max-w-md text-center lg:text-left'>{config.footer.disclaimer2}</p>

					<p className='mt-6 text-md font-bold uppercase font-raleway'>
						Created by <span style={{ color: config.footer.creator.highlightColor }}>{config.footer.creator.name}</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
