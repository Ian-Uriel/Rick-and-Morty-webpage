import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { filterCards, orderCards } from "../../redux/actions"


import styles from './Favorites.module.css'

const Favorites = () =>{

    const { myFavorites }  = useSelector(state => state)
    const dispatch = useDispatch()

    const handleOrder = (event) =>{
        dispatch(orderCards(event.target.value))
    }

    const handleFilter = (event) =>{
        dispatch(filterCards(event.target.value))
    }

    return(
        <div>
               <select onChange={handleOrder}>
                    <option value='order' disabled='disabled' >Order By</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                
                <select onChange={handleFilter}>
                    <option value='filter' disabled='disabled' >Filter By</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Genderless">Genderless</option>
                        <option value="Unknown">Unknown</option>
                </select>

            {
                myFavorites?.map((character) =>{
                    return(

                        <div className={styles.Card}>

                            <img className={styles.imgCard} src={character.image} alt ={character.name}></img>

                        <Link to={`/detail/${character.id}`}>
                            <div className={styles.nameCard}>
                                <h2>{character.name}</h2>
                            </div>
                        </Link>

                        <div className={styles.infoCard}>
                            <h2>{character.gender}</h2>
                            <h2>{character.species}</h2>
                        </div>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default Favorites