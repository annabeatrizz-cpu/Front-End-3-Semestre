import CardPerfil from "../cardperfil/cardperfil";
import "./Menu.css"
function Menu(){
    return(
    
        <nav className="menu">

            <a href="#" className="menu_item">Home</a>
            <a href="#" className="menu_item">Quem somos</a>
            <a href="#" className="menu_item">Contato</a>
            <a href="#" className="menu_item menu__item--signin">Entrar</a>
            <a href="#" className="menu_item menu__item--signup">Cadastar</a>
        
        
        
       <CardPerfil/>
            
            
        </nav>


    );
}

export default Menu