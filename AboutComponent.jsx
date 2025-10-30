const AboutComponent = ({ icon, title, description }) => {
	return (
		<div className='flex justify-center relative  border-2 border-black rounded-lg cursor-pointer w-[22rem] overflow-hidden shadow-[5px_5px_0px_1px_black] transition-transform duration-100 ease-in-out '>
			<p className='text-[#f92763] pt-5 text-2xl'>{icon}</p>
			<div className='flex flex-col items-start to-transparent px-4 pt-4'>
				<div className='text-2xl flex items-center gap-4 font-raleway font-bold text-white shadow-md mb-2'>{title}</div>
				<p className='opacity-65 text-white text-md shadow-sm shadow-black pr-4'>{description}</p>
			</div>
		</div>
	);
};

export default AboutComponent;
