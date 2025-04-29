import { Routes, Route } from "react-router-dom";
import { Inicial } from "../Paginas/Inicial";
import { Lista } from "../Componentes/Lista";
import { Perfil } from "../Paginas/Perfil";
import { Series } from "../Paginas/Series";


export function Rotas(){
    return(
        <Routes>
            <Route path="/" element={<Inicial/>}>
                    <Route index element={<Lista/>}/>
                    <Route path = 'perfil' element={<Perfil/>}/>
                    <Route path = 'serie' element={<Series/>}/>
            </Route>
        </Routes>
    )

}