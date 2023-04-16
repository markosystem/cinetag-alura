import Favoritos from "pages/Favoritos";
import NaoEncontrada from "pages/NaoEncontrada";
import PaginaBase from "pages/PaginaBase";
import Player from "pages/Player";
import Inicio from "pages/inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes(){
    return (
        <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<PaginaBase />}>                       
                            <Route index element={<Inicio />} ></Route>
                            <Route path="favoritos" element={<Favoritos />} ></Route>
                            <Route path=":id" element={<Player />} ></Route>
                            <Route path="*" element={<NaoEncontrada />} ></Route>
                        </Route> 
                    </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;