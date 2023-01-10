import Card from './Card';

export default function Cards({characters}) {
   
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
                     onClose ={() => alert('Emulamos que se cierra la card')}
                  />
               );  
            })
         }
      </div>
   );
}