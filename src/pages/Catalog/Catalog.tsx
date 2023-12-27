import Table from '../../assets/tabela_medidas.png';
import { CatalogAccessWrapper, CatalogWrapper, ColorExample, ContactWrapper, ImageCarousel, MeasurementTableWrapper, SocialMediaButton, imagesStyles } from './styles';
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
import Natural from '../../assets/raizes/img_modelo_natural.jpg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { NavLink } from 'react-router-dom';
import { InstagramLogo, WhatsappLogo } from '@phosphor-icons/react';

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

export function Catalog() {
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
		<CatalogWrapper>
			<h1>RAÍZES</h1>

			<ImageCarousel>
				<Carousel showArrows={false} showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop={true} interval={3000}>
					{returnImages()}
				</Carousel>
			</ImageCarousel>
			
			<section>
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
						<h2>Branco</h2>
						<p>
							<span>A sofisticação no seu mais alto nível:</span> uma cor sutil e sofisticada, que traz uma elegância natural que apenas o linho branco consegue trazer.
						</p>
					</section>
					<img src={PuroLinho} alt="" />
				</ColorExample>

				<ColorExample>
					<img src={Natural} alt=""/>
					<section>
						<h2>Natural</h2>
						<p>
							<span>O clássico:</span> uma cor extremamente versátil e fácil de se utilizar no cotidiano. Perfeito para ocasiões mais casuais, mas que também pode ser usado em situações mais formais.
						</p>
					</section>
				</ColorExample>
			</section>

			<CatalogAccessWrapper>
				<p>Para conferir nosso catálogo completo da coleção <span>RAÍZES</span>, com todas as peças da coleção e seus valores, clique no botão ao lado.</p>

				<button>RAÍZES - Lookbook</button>
			</CatalogAccessWrapper>

			<MeasurementTableWrapper>
				<p>E para deixar sua experiência Mila Morais ainda mais impressionante, disponibilizamos para você a <strong>Tabela de Medidas</strong> que utilizamos para a construção das nossas peças.</p>
				<img src={Table} alt="" />
			</MeasurementTableWrapper>

			<ContactWrapper>
				<p>
					Ficou interessada? Então entre em contato com nossa equipe de vendas que está preparada para te ajudar a adquirir seu look Mila Morais!
				</p>

				<div>
					<SocialMediaButton>
						<NavLink to={'https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2Fmessage%2F2GT6VBFVQJOYI1&e=AT1CKwG_LVC7-u7znPH6-DC8SsserhXCQ-JMnzw2WNFl7mCUWwa91o6ZZOSR511nAupWHMrxyoD1AIN-0Fkk9dqdWUOC0_4WrBtTIy66kdoNRCh7T9fhgg'} target='_blank'>
							<button><WhatsappLogo size={28}/> WhatsApp</button>
						</NavLink>
					</SocialMediaButton>
					<SocialMediaButton>
						<NavLink to={'https://www.instagram.com/milamoraisoficial'} target='_blank'>
							<button><InstagramLogo size={28}/> Instagram</button>
						</NavLink>
					</SocialMediaButton>
				</div>
			
			</ContactWrapper>
		</CatalogWrapper>
	);
}