import { NavLink } from 'react-router-dom';
import { NavBarHomeWrapper } from './styles';

export function NavbarHome() {
	return(
		<NavBarHomeWrapper>
			<ul>
				<li><NavLink to={'/catalogo'}>Catálogo</NavLink></li>
				<li><NavLink to={'/sobre-nos'}>Sobre nós</NavLink></li>
				<li><NavLink to={'/social'}>Contate-nos</NavLink></li>
			</ul>
		</NavBarHomeWrapper>
		
	);
}