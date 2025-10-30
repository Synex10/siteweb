import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import ServerShow from './components/InfoShow.jsx';
import About from './components/About.jsx';
import './components/css/RgbDivider.css';

const App = () => {
	return (
		<div className=' font-customFont'>
			<Navbar />
			<Header />
			<About />
			<ServerShow />
			<Footer />
		</div>
	);
};

export default App;
