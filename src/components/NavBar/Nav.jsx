import SearchBar from "../SearchBar/SearchBar"
import { Link } from "react-router-dom"

const Nav = ({onSearch}) =>{
    return (
        <nav>
            <SearchBar onSearch={onSearch}/>
            <Link to='about'>
                <h3>About</h3>
            </Link>
            <Link to='home'>
                <h3>Home</h3>
            </Link>
        </nav>
    )
}


export default Nav