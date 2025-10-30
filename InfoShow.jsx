import InfoSection from './InfoElement';
import config from '../config/config.json';

const ServerShow = () => {
	return (
		<div
			id='info'
			style={{
				background: 'linear-gradient(180deg, #000000 0%, #101010 65%)',
			}}
			className=''>
			{config.info.items.map((item, index) => (
				<InfoSection
					key={index}
					imageSrc={item.imageSrc}
					title={item.title}
					description={item.description}
					buttonText={item.buttonText}
					imageRight={item.imageRight}
				/>
			))}
		</div>
	);
};

export default ServerShow;
