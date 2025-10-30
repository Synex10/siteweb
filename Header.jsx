import config from '../config/config.json';

const Header = () => {
	return (
		<div id='home' className='relative h-screen w-full'>
			<video autoPlay muted loop className='absolute inset-0 w-full h-full object-cover z-0'>
				<source src='/darkside.mp4' type='video/mp4' />
				Your browser does not support the video tag.
			</video>

			<div className='absolute inset-0 bg-black bg-opacity-50 z-10'></div>

			<div className='absolute bottom-0 w-full h-40 z-20 bg-gradient-to-b from-transparent to-black'></div>
			<div className='relative z-30 h-full flex font-raleway items-center'>
				<div className='w-full max-w-7xl mx-auto px-6 sm:px-12'>
					<h1 className='text-white max-w-[40rem] font-black uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug'>
						{config.hero.headline}
					</h1>
					<p className='max-w-xl text-white opacity-75 sm:opacity-80 p-2 text-lg sm:text-xl md:text-2xl'>
						{config.hero.description}
					</p>
					<button className='max-w-xl text-white m-2 px-10 py-2 bg-[#F92763] rounded-lg'>
						<p className='font-bold uppercase'>{config.hero.cta}</p>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
