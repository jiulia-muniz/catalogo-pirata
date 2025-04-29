import estilos from './Perfil.module.css';
import { ModalPerfil } from "../Componentes/ModalPerfil";

export function Perfil(){
    return(
        <>
        <div className={estilos.titulo}>
            <h2>Meu perfil</h2>
        </div>
        <ModalPerfil/>
        </>
        
    )
}