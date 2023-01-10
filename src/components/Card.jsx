export default function Card({name, species, gender, image, onClose}) {
   return (
         <div className="Card">
            <div className="Exit"><button className="boto"onClick={onClose}>X</button></div>
            <h2>{name}</h2>
            <h2>{species}</h2>
            <h2>{gender}</h2>
            <img  src={image} alt ={name}/>
         </div> 
   );
}
