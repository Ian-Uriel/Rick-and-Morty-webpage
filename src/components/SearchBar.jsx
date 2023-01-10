export default function SearchBar({onSearch}) {
   return (
      <div className = 'Search'>
      <input type='search' />
      <button onClick={onSearch}>Agregar</button>
      </div>
   );
}
