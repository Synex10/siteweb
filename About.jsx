import AboutComponent from './AboutComponent';
import {
	IconDiamond,
	IconArrowBadgeDown,
	IconHeart,
	IconMapPin,
	IconUsers,
	IconDeviceGamepad2,
} from '@tabler/icons-react';

import config from '../config/config.json';

const iconMap = {
	IconDiamond,
	IconArrowBadgeDown,
	IconHeart,
	IconMapPin,
	IconUsers,
	IconDeviceGamepad2,
};

const About = () => {
	return (
		<div
			id='about'
			className='relative bg-black h-auto pb-40 bg-[radial-gradient(#363232_1.5px,transparent_0)] bg-[40px_40px] bg-position-[-19px_-19px]'>
			<div className='flex flex-col max-w-7xl mx-auto justify-center items-center pt-20 text-white'>
				<div className='flex flex-wrap relative gap-20 justify-center'>
					{config.about.items.map((item, index) => {
						const Icon = iconMap[item.icon];
						return (
							<AboutComponent
								key={index}
								title={item.title}
								description={item.description}
								icon={Icon ? <Icon stroke={2} size={48} /> : null}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default About;
