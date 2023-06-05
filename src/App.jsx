import { Admin } from './pages/Admin';
import Main from './pages/Main'
import s from './styles/App.module.scss'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
	return (
		<div className={s.app}>
			<Router>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/admin" element={<Admin />}/>
				</Routes>
			</Router>
		</div>
	)
}

export default App;