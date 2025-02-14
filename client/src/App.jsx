import './App.css';
import CanvasModel from './canvas';
import Customizer from './pages/Customizer';
import Home from './pages/Home';

function App() {
	return (
		<main className='app transition-all  ease-in max-h-screen overflow-hidden'>
			<div className='flex justify-around items-center  '>
				<div className=' h-screen bg-blue-50 xl:w-1/4'>
					<Home />
				</div>
				<div className=' bg-gray-50 xl:w-3/4   '>
					<CanvasModel />
				</div>
			</div>
			<div className=' h-screen bg-blue-50 xl:w-1/4'>
				<Customizer />
			</div>
		</main>
	);
}

export default App;
