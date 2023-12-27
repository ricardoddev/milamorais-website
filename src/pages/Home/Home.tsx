import Terracota from '../../assets/raizes/img_model_terracota.jpg';
import FotoHome from '../../assets/img_main_mila.jpg';
import { CollectionInfoAndAccess, HomeWrapper } from './styles';
import { CaretRight } from '@phosphor-icons/react';
import { NavLink } from 'react-router-dom';

export function Home() {
	return (
		<HomeWrapper>
			<CollectionInfoAndAccess>
				<h2>Lookbook</h2>
				<h1>RAÍZES</h1>
				<NavLink to="/catalogo">
					<CaretRight size={128} />
				</NavLink>
			</CollectionInfoAndAccess>
            
			<img id="main-photo-mila" src={FotoHome} alt="" />
			<img id="small-photo-collection" src={Terracota} alt="" />
			<img id="big-photo-collection" src={Terracota} alt="" />
		</HomeWrapper>
	);
}