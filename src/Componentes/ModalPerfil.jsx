import estilos from './ModalPerfil.module.css';
import jiujiu from '../assets/img/jiulia.png';

export function ModalPerfil() {
    return (
        <div className={estilos.conteinerPerfil}>
            <div className={estilos.imgPerfil}>
                <img src={jiujiu} alt="Perfil" className={estilos.imagemModal} />
            </div>
            <div className={estilos.conteudoPerfil}>
                <div className={estilos.opiniao}>
                <p>"A 10 anos utilizando da Piratei+, nunca sofri, uma plataforma que veio para mudar"</p>
                </div>
                <div className={estilos.nome}>Jiulia Muniz</div>
                <div className={estilos.email}>MunizJiulia@gmail.com</div>
                <div className={estilos.telefone}>(19) 1234 5678</div>
            </div>
        </div>
    );
}
