import Card from './Card';

export default function Cards({characters, onClose}) {
   
   return (
      <div className= "Cards">
         {
            characters.map(({id, name, species, gender, image}) => {
               return(
                  <Card
                     key ={id} 
                     name={name}
                     species={species}
                     gender={gender}
                     image={image}
                     id={id}
                     onClose={() => onClose(id)}
                  />
               );  
            })
         }
      </div>
   );
}