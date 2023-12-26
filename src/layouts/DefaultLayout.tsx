import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';
import { NavbarHome } from '../components/Navbar/NavbarHome';

export function DefaultLayout() {
	const location = useLocation();
	const isHome = location.pathname === '/';

	return (
		<>
			{isHome ? <NavbarHome /> : <Navbar />}
			<Outlet />
			{isHome ? <></> : <Footer />}
		</>
	);
}