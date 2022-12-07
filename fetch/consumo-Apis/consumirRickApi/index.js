const axios = require("axios");
const fs = require("fs").promises;
const path = require("path");
const { exec } = require("child_process");



const API = "https://rickandmortyapi.com/api/character";
const main = async () => {
  let response = await axios.get(API);
  let characters = response.data.results
    .map((character) => {
      return {
        id: character.id,
        name: character.name,
        status: character.status,
        species: character.species,
      };
    }).map((personaje)=> Object.values(personaje).join(",")).join("\n"); 
    
    await fs.writeFile(path.join(__dirname,"data.csv"), characters);
    console.log(__dirname,'data.csv');
  console.log(characters);
};

main();
