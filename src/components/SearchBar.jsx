import {useState} from "react";

export default function SearchBar({onSearch}) {
   const [character, setCharacter] = useState('')

   const handleChange = (event) =>{
      setCharacter(event.target.value)
   }

   return (
      <div className = 'Search'>
      <input type='search' value={character} onChange={handleChange} />
      <button onClick={() => onSearch(character)}>Agregar</button>
      </div>
   );
}
