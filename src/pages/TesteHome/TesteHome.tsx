import { ColorExample, HomeWrapper, ImageCarousel, MainCollection, RedirectToCatalog, TitleMainCollection, imagesStyles } from './styles';
import Raizes1 from '../../assets/raizes/raízes1.png';
import Raizes2 from '../../assets/raizes/raízes2.png';
import Raizes3 from '../../assets/raizes/raízes3.png';
import Raizes4 from '../../assets/raizes/raízes4.png';
import Raizes5 from '../../assets/raizes/raízes5.png';
import Raizes6 from '../../assets/raizes/raízes6.png';
import Raizes7 from '../../assets/raizes/raízes7.png';
import Raizes8 from '../../assets/raizes/raízes8.png';
import Terracota from '../../assets/raizes/img_model_terracota.jpg';
import PuroLinho from '../../assets/raizes/img_modelo_purolinho.jpg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { NavLink } from 'react-router-dom';

type ImagesType = {
	idImg: string,
	path: string,
	altText: string 
}

const images: Array<ImagesType> = [
	{
		idImg: '1',
		path: Raizes1,
		altText: ''
	},
	{
		idImg: '2',
		path: Raizes2,
		altText: ''
	},
	{
		idImg: '3',
		path: Raizes3,
		altText: ''
	},
	{
		idImg: '4',
		path: Raizes4,
		altText: ''
	},
	{
		idImg: '5',
		path: Raizes5,
		altText: ''
	},
	{
		idImg: '6',
		path: Raizes6,
		altText: ''
	},
	{
		idImg: '7',
		path: Raizes7,
		altText: ''
	},
	{
		idImg: '8',
		path: Raizes8,
		altText: ''
	}
];


export function TesteHome() {

	function returnImages() {
		return images.map(image => {
			return <img 
				style={imagesStyles} 
				className='images-from-carousel' 
				key={image.idImg} 
				src={image.path} 
				alt={image.altText} 
			/>;
		});
	}
	

	return(
		<HomeWrapper>
			<img src="../../../vite.svg" alt="" className='logo-mila'/>

			<div className="what-is-mila-morais">
				<h1>O que é a Mila Morais?</h1>
				<p>A Mila Morais é uma marca brasileira comprometida em entregar produtos esteticamente diferenciados, autorais e de qualidade incomparável, com foco em peças em puro linho.</p>
				<p>Buscamos sempre entregar o melhor produto possível, com muito amor e dedicação em tudo que fazemos.</p>
				<p>Nossa proposta é entregar um produto versátil, elegante e com uma estética que vai te diferenciar.</p>
			</div>

			<div className='card-container'>
				<div>
					<h1>Puro Linho</h1>
					<p>Nossas peças são feitas 100% em linho, fabricadas sob encomenda.
					Fazemos questão de utilizar a melhor matéria-prima do mercado para entregar sempre o melhor produto para você.</p>
				</div>

				<div>
					<h1>Sustentabilidade</h1>
					<p>Todos os nossos produtos são feitos com materiais 100% sustentáveis, ou seja, fibras e materiais naturais de qualidade incomparável.
					Reforçamos nosso compromisso <i>ecofriendly</i> e de sustentabilidade em tudo que fazemos.</p>
				</div>

				<div>
					<h1>Estilo atemporal</h1>
					<p>Somos uma marca com uma estética atemporal, focando sempre na versatilidade e elegência em nossas peças.
					Seja para ir a um café, para ir a um evento ou para ir a um encontro com as amigas, você vai estar bem vestida com a Mila Morais.</p>
				</div>

			</div>

			<MainCollection>
				<TitleMainCollection>RAÍZES</TitleMainCollection>

				<ImageCarousel>
					<Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop interval={4000}>
						{returnImages()}
					</Carousel>
				</ImageCarousel>

				<ColorExample>
					<img src={Terracota} alt=""/>
					<section>
						<h2>Terracota</h2>
						<p>
							<span>A essência da terra:</span> uma cor chic e versátil, que valoriza ainda mais a proposta de vestir o puro linho de modo atemporal e sempre atual.
						</p>
					</section>
				</ColorExample>

				<ColorExample>
					<section style={{textAlign: 'right'}}>
						<h2>Linho branco</h2>
						<p>
							<span>O clássico:</span> uma cor extremamente versátil, que traz a sofistiação e a elegância a seu nível mais alto. Perfeito para todas as ocasiões.
						</p>
					</section>
					<img src={PuroLinho} alt="" />

				</ColorExample>

				<RedirectToCatalog>
					<NavLink to='/catalogo'>
						Clique aqui para conferir o catálogo completo dessa coleção.
					</NavLink>
				</RedirectToCatalog>
			
			</MainCollection>
			
			

		</HomeWrapper>
	);
}