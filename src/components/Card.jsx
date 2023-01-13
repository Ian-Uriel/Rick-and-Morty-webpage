import { Link } from "react-router-dom";

export default function Card({name, species, gender, image, onClose, id}) {
   return (
         <div className="Card">

            <div className="Exit">
               <button className="boto" onClick={onClose}>X</button>
            </div>

            <img className="imgCard" src={image} alt ={name}></img>
            
            <Link to={`/detail/${id}`}>
               <div className="nameCard">
                  <h2>{name}</h2>
               </div>
            </Link>

            <div className="infoCard">
               <h2>{gender}</h2>
               <h2>{species}</h2>
            </div>
         </div> 
   );
}
