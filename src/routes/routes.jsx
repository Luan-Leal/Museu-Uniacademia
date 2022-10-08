import { Route, BrowserRouter, Routes } from "react-router-dom";
import Contato from "../views/contato/contato";
import Home from "../views/home/home";
import Sobre from "../views/sobre/sobre";
import Visit from "../views/visit/visit";


const Rotas = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={<Home/>} />
                <Route path="/exposicoes" element={<Visit/>} />
                <Route path="/sobre" element={<Sobre/>} />
                <Route path="/contato" element={<Contato/>} />
               

            </Routes>
        </BrowserRouter>

    )
}
export default Rotas;