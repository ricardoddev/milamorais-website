import { CardQualities, HomeWrapper } from './styles';

type QualityType = {
	id: number,
	title: string,
	pharagraphs: string[]
}

const qualitiesDescriptions: Array<QualityType> = [
	{
		id: 1,
		title: 'O que é a Mila Morais?',
		pharagraphs: ['A Mila Morais é uma marca brasileira comprometida em entregar produtos esteticamente diferenciados, autorais e de qualidade incomparável, com foco em peças em puro linho.', 'Buscamos sempre entregar o melhor produto possível, com muito amor e dedicação em tudo que fazemos.', 'Nossa proposta é entregar um produto versátil, elegante e com uma estética que vai te diferenciar.']
	},
	{
		id: 2,
		title: 'Puro Linho',
		pharagraphs: ['Nossas peças são feitas 100% em linho, fabricadas sob encomenda.', 'Fazemos questão de utilizar a melhor matéria-prima do mercado para entregar sempre o melhor produto para você.']
	}
];

export function Home() {
	console.log(qualitiesDescriptions);

	return(
		<HomeWrapper>
			<div>
				<img src="" alt="" />
				<img src="" alt="" />
				<img src="" alt="" />
				<img src="" alt="" />
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>

			<div className="what-is-mila-morais">
				<h1>O que é a Mila Morais?</h1>
				<p>A Mila Morais é uma marca brasileira comprometida em entregar produtos esteticamente diferenciados, autorais e de qualidade incomparável, com foco em peças em puro linho.</p>
				<p>Buscamos sempre entregar o melhor produto possível, com muito amor e dedicação em tudo que fazemos.</p>
				<p>Nossa proposta é entregar um produto versátil, elegante e com uma estética que vai te diferenciar.</p>
			</div>

			<div className='card-container'>
				<CardQualities>
					<h1>Puro Linho</h1>
					<p>Nossas peças são feitas 100% em linho, fabricadas sob encomenda.</p>
					<p>Fazemos questão de utilizar a melhor matéria-prima do mercado para entregar sempre o melhor produto para você.</p>
				</CardQualities>

				<CardQualities>
					<h1>Sustentabilidade</h1>
					<p>Todos os nossos produtos são feitos com materiais 100% sustentáveis, ou seja, fibras e materiais naturais de qualidade incomparável.</p>
					<p>Reforçamos nosso compromisso <i>ecofriendly</i> e de sustentabilidade em tudo que fazemos.</p>
				</CardQualities>

				<CardQualities>
					<h1>Estilo atemporal</h1>
					<p>Somos uma marca com uma estética atemporal, focando sempre na versatilidade e elegência em nossas peças.</p>
					<p>Seja para ir a um café, para ir a um evento ou para ir a um encontro com as amigas, você vai estar bem vestida com a Mila Morais.</p>
				</CardQualities>

				<CardQualities> {/* isso aqui pode ser substituído por um card ou algo do tipo */}
					<h1>Todo o Brasil</h1>
					<p>Enviamos nossas peças para todas as regiões do Brasil.</p>
				</CardQualities>
			</div>
		</HomeWrapper>
	);
}