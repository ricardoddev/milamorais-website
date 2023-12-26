import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { TesteHome } from './pages/TesteHome/TesteHome';
import { Social } from './pages/Social';
import { Catalog } from './pages/Catalog/Catalog';
import { AboutUs } from './pages/AboutUs';
import { Home } from './pages/Home/Home';

export function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<DefaultLayout />}>
					<Route index element={<Home />} />
					<Route path="/testehome" element={<TesteHome />} />
					<Route path="/social" element={<Social />} />
					<Route path="/catalogo" element={<Catalog />} />
					<Route path="/sobre-nos" element={<AboutUs />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}