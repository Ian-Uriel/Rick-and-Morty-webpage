export default function Card({name, species, gender, image, onClose}) {
   return (
         <div className="Card">
            <div className="Exit">
               <button className="boto" onClick={onClose}>X</button>
            </div>
            <img className="imgCard" src={image} alt ={name}></img>
            <div className="nameCard">
               <h2>{name}</h2>
            </div>
            <div className="infoCard">
               <h2>{gender}</h2>
               <h2>{species}</h2>
            </div>
         </div> 
   );
}
