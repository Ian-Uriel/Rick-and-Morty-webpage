import './App.css'
import Cards from './components/Cards/Cards'
import Nav from "./components/NavBar/Nav"
import About from './components/About/About'
import Detail from './components/Details/Detail'
import Form from './components/Form/Form'
import {useState, useEffect} from "react"
import { Routes, Route, useNavigate } from 'react-router-dom'

function App () {
  const navigate = useNavigate()
  const [characters, setCharacters] = useState([])
  const [access, setAccess] = useState(false)
  const username = 'admin@gmail.com'
  const password = '1admin'
  
  const Login = (userData) =>{
    if(userData.password === password && userData.username === username){
      setAccess(true)
      navigate('/home')
    }
  }

  useEffect(() => {
    !access && navigate('/');
 }, [access])
  
  const onSearch = (character) =>{
    ///     http://localhost:3001/rickandmorty
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
    .then((response) => response.json())
    .then((data) => {
       if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    })
  }

  const onClose = (id) => {
    setCharacters(characters.filter(character => character.id !== id))
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav onSearch={onSearch} /> 
        <div>
          <Routes>
            <Route path='/' element={<Form Login={Login} />} />
            <Route path="home" element={<Cards onClose={onClose} characters={characters} />} />
            <Route path="about" element={<About />} />
            <Route path="detail/:detailId" element={<Detail />} />
          </Routes>
        </div>
    </div>
  )
}

export default App
