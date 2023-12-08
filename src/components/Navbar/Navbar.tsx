import { NavLink } from 'react-router-dom';
import { NavBarWrapper, NavLinksWrapper } from './styles';

export function Navbar() {
	return(
		<NavBarWrapper>
			<NavLink to={'/'}><img src="../../../vite.svg" alt="Logotipo Mila Morais Puro Linho" /></NavLink>
			
			<NavLinksWrapper>
				<ul>
					<li><NavLink to={'/catalogo'}>Catálogo</NavLink></li>
					<li><NavLink to={'/sobre-nos'}>Sobre nós</NavLink></li>
					<li><NavLink to={'/social'}>Contate-nos</NavLink></li>
				</ul>
			</NavLinksWrapper>
		</NavBarWrapper>
	);
}