import SearchBar from "./SearchBar"

const Nav = ({onSearch}) =>{
    return (
        <nav>
            <SearchBar onSearch={onSearch}/>
        </nav>
    )
}


export default Nav