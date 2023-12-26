import Table from '../../assets/tabela_medidas.png';

export function Catalog() {
	return(
		<>
			<h1>RAÍZES</h1>

			<div>Carrossel</div>

			<div>
				<div>Terracota</div>
				<div>Natural</div>
				<div>Linho branco</div>
			</div>

			<div>
				<p>Confira o nosso catálogo completo, preparado com muito carinho e esmero para você!</p>

				<button>RAÍZES - Lookbook</button>
			</div>

			<div>
				<p>E para deixar sua experiência Mila Morais ainda mais impressionante, disponibilizamos para você a tabela de medidas que utilizamos para a construção das nossas peças.</p>
				<img src={Table} alt="" />
			</div>
		</>
	);
}