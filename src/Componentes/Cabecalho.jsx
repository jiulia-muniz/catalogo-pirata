import estilo from './Cabecalho.module.css';

//estrutura React para componentes
export function Cabecalho(){
    return(
        //para cada return eu so posso renderizar um unico componente
        <header className={estilo.conteiner}>
            <h1>Piratei+</h1>
        </header>
    )

}