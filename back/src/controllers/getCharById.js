import axios from 'axios'


export const getCharById = (res, id) =>{
     axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.data)
    .then(data => {
        const obj = {
            id: data.id,
            image: data.image,
            name: data.name,
            gender: data.gender,
            species: data.species
        }
    })

}