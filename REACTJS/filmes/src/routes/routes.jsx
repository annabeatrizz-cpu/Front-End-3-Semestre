import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../pages/login/Login"
import CadastroFilme from "../pages/cadastroFilmes/CadastroFilme"
import CadastroGenero from "../pages/cadastroGenero/CadastroGenero"

const Rotas = () =>{
    return(
         <BrowserRouter>
         <Routes>
             <Route  path="/" element={<Login/>} />
             <Route  path="/Filmes" element={<CadastroFilme/>} />
             <Route  path="/generos" element={<CadastroGenero/>} />
         </Routes>
         </BrowserRouter>
    )
}

 export default Rotas