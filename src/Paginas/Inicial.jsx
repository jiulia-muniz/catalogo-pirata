import { Cabecalho } from "../Componentes/Cabecalho";
import { BarraNavegacao } from "../Componentes/BarraNavegacao";
import { Outlet} from "react-router-dom";
import { Rodape } from "../Componentes/Rodape";

export function Inicial(){
    return(
        <>
        < BarraNavegacao/>
        < Cabecalho/>
        < Outlet/>
        < Rodape/>
        </>
        
    )
}