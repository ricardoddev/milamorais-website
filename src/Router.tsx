import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Home } from './pages/Home/Home';
import { Social } from './pages/Social';
import { Catalog } from './pages/Catalog';
import { AboutUs } from './pages/AboutUs';

export function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<  DefaultLayout />}>
					<Route index element={<Home />} />
					<Route path="/social" element={<Social />} />
					<Route path="/catalogo" element={<Catalog />} />
					<Route path="/sobre-nos" element={<AboutUs />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}