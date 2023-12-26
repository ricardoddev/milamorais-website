import { NavLink } from 'react-router-dom';
import { NavBarWrapper } from './styles';
import { useState } from 'react';

export function Navbar() {
	const [colorBg, setColorBg] = useState(false);

	const changeColorBg = () => {
		if (window.scrollY >= 96) {
			setColorBg(true);
		} else {
			setColorBg(false);
		}
	};

	window.addEventListener('scroll', changeColorBg);

	return(
		<NavBarWrapper className={colorBg ? 'headerTransparent headerSolid' : 'headerTransparent'}>
			<ul>
				<li><NavLink to={'/catalogo'}>Catálogo</NavLink></li>
				<li><NavLink to={'/sobre-nos'}>Sobre nós</NavLink></li>
				<li><NavLink to={'/social'}>Contate-nos</NavLink></li>
			</ul>
			
		</NavBarWrapper>
	);
}