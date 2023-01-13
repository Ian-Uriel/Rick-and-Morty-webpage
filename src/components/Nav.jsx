import SearchBar from "./SearchBar"
import { Link } from "react-router-dom"

const Nav = ({onSearch}) =>{
    return (
        <nav>
            <SearchBar onSearch={onSearch}/>
            <Link to='/About'>
                <h3>About</h3>
            </Link>
            <Link to='/'>
                <h3>Home</h3>
            </Link>
        </nav>
    )
}


export default Nav