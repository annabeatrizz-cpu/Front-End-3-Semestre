import cbjr from "../../assets/cbjr.jpg"
import "./cardperfil.css"

function CardPerfil() {
    return (
         <div className="card-perfil">
           <img className="card-perfil__image" src={cbjr} alt="imagem do usuario"/>
        </div>
    )
    
}

export default CardPerfil