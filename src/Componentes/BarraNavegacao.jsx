import estilos from './BarraNavegacao.module.css';
//estrutura do componente
export function BarraNavegacao(){
    //eu só posso retornar 1 componente
    return(
       <nav className={estilos.conteiner}>
            <ul>
                <li>Home</li>
                <li>Series</li>
                <li>Perfil</li>
            </ul>
       </nav>
    )

}