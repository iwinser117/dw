const axios = require('axios')
const API = 'https://rickandmortyapi.com/api/character'
const main = async() => {
    let response = await axios.get(API );
    let characters = response.data.results.map((character) => {
        return {
            id: character.id,
            name: character.name,
        }
    })
    console.log(characters)
}
    
main();