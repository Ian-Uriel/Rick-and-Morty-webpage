import './App.css'
import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import SearchBar from './components/SearchBar.jsx'
import characters, { Rick } from './data.js'

function App () {
  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose ={() => alert('Emulamos que se cierra la card')}
        />
      </div>
      
        <Cards
          characters={characters}
        />

      <div>
        <SearchBar
          onSearch={(characterID) => alert(characterID)}
        />
      </div>
    </div>
  )
}

export default App
