import estilos from './Modal.module.css';

export function Modal({movie, onClose}){
    return(
        <div className={estilos.modalback}>
            <div className={estilos.modalConteiner}>
                <h2>{movie.title}</h2>
                <button onClick={onClose}>X</button>

                <img className={estilos.imgDetalhes} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
                <p>{`Popularidade: ${movie.popularity}`}</p>
                <p>{`Data de lançamento: ${movie.release_date}`}</p>
                <p>{`Quantidade de Votos: ${movie.vote_count}`}</p>
                <p>{`Sinopse: ${movie.overview}`}</p>
            </div>
        </div>
    )
}