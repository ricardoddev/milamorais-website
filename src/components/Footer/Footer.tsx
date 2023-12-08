import { InstagramLogo, WhatsappLogo } from '@phosphor-icons/react';
import { NavLink } from 'react-router-dom';
import { FooterWrapper } from './styles';

export function Footer() {
	return(
		<FooterWrapper>
			<nav>
				<ul>
					<li><NavLink to={'/catalogo'}>Conheça nossos produtos</NavLink></li>
					<li><NavLink to={'/sobre-nos'}>Conheça mais sobre a Mila Morais</NavLink></li>
					<li><NavLink to={'/social'}>Nossas redes sociais</NavLink></li>
				</ul>
			</nav>

			<div>
				<div>
					<img src="../../../vite.svg" alt="" />
					<span>Seja elegante, versátil e sustentável</span>
					<strong>Seja Mila Morais</strong>
					<span className='emoji'>🌿</span>
				</div>
				
				<div className='social-media-icons'>
					<NavLink to={'https://www.instagram.com/milamoraisoficial'} target='_blank'><InstagramLogo size={32} color='#DDD7DB'/></NavLink>
					<NavLink to={'https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2Fmessage%2F2GT6VBFVQJOYI1&e=AT1CKwG_LVC7-u7znPH6-DC8SsserhXCQ-JMnzw2WNFl7mCUWwa91o6ZZOSR511nAupWHMrxyoD1AIN-0Fkk9dqdWUOC0_4WrBtTIy66kdoNRCh7T9fhgg'} target='_blank'><WhatsappLogo size={32} color='#DDD7DB'/></NavLink>
				</div>
			</div>
		</FooterWrapper>
	);
}