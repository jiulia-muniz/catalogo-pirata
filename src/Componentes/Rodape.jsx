import estilos from './Rodape.module.css'

export function Rodape(){
    return(
        <footer className={estilos.conteiner}>
            <h1>Munitaria.com</h1>
            <ul>
                <li>Contatos</li>
                <li>Sobre nós</li>
                <li>catálogo</li>
            </ul>
        </footer>
    )
}