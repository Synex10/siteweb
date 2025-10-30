const InfoSection = ({ imageSrc, title, description, buttonText, buttonColor, imageRight = false }) => {
	return (
		<div
			className={`flex flex-col ${imageRight ? 'sm:flex-row-reverse' : 'sm:flex-row'} justify-center items-center`}
			style={{ height: 'auto' }}>
			<img src={imageSrc} alt={title} className='w-full sm:w-[50%] h-full object-cover' />
			<div className='text-white sm:w-[50%] h-full flex flex-col justify-center items-center text-center p-4'>
				<h3 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4'>{title}</h3>
				<p className='mb-6 max-w-[90%] sm:max-w-xl md:max-w-2xl text-lg sm:text-xl md:text-2xl'>{description}</p>
				<a
					href='#'
					className={`bg-[#f92763] text-white px-10 py-2 rounded-lg hover:bg-black border-[#f92763] border-2 transition-colors ${
						buttonColor ? buttonColor : ''
					}`}>
					{buttonText}
				</a>
			</div>
		</div>
	);
};

export default InfoSection;
