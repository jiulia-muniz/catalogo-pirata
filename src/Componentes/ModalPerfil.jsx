import estilos from './ModalPerfil.module.css';
import jiujiu from '../assets/img/jiulia.png'
//estrutura do componente
export function ModalPerfil(){
    //eu só posso retornar 1 componente
    return(
       <>
       <div className={estilos.conteinerPerfil}>
        <div className={estilos.conteudoGlobal}>
            <img src={jiujiu} className="img-perfil"alt="a" />
            <div className={estilos.conteudoPerfil}>
            <div className={estilos.opiniao}>
            <p>"A 10 anos utilizando da Piratei+, nunca sofri, uma plataforma que veio para mudar"</p>
            </div>
            <div className={estilos.nome}><p>Jiulia Muniz</p></div>
            <div className={estilos.email}><p>MunizJiulia@gmail.com</p></div>
            <div className={estilos.telefone}><p>(19) 1234 5678</p></div>
            </div>
            
        </div>
    </div>
       </>
    )

}