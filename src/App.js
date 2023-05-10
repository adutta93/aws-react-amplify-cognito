import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Tabs, TabItem } from '@aws-amplify/ui-react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Premium from './pages/Premium';
function App() {
	return (
		<div className='App'>
			<Router>
				<div className='container'>
					<NavLink className='navitem' exact='true' ativeclassname='active' to='/'>
						Home
					</NavLink>
					<NavLink className='navitem' exact='true' ativeclassname='active' to='/about'>
						About
					</NavLink>
					<NavLink className='navitem' exact='true' ativeclassname='active' to='/premium'>
						Premium
					</NavLink>
				</div>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/premium' element={<Premium />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
