import estilos from './Series.module.css';
import { ListaFavoritos } from "../Componentes/ListaFavorito";


export function Series(){
    return(
        <>
        <div className={estilos.titulo}>
            <h2>Favoritos</h2>
        </div>
        <ListaFavoritos/>
        </>
        
    )
}