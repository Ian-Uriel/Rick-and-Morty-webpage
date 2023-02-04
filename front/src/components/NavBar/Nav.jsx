import SearchBar from "../SearchBar/SearchBar"
import { Link, useLocation } from "react-router-dom"

const Nav = ({onSearch}) =>{
    const url = useLocation()
    if(url.pathname !== '/'){
        return (
            <nav>
                <SearchBar onSearch={onSearch}/>
                <Link to='/about'>
                    <h3>About</h3>
                </Link>
                <Link to='/home'>
                    <h3>Home</h3>
                </Link>
                <Link to = '/favorites'>
                    <h3>Favorites</h3>
                </Link>
            </nav>
        )
    }
    return
}


export default Nav