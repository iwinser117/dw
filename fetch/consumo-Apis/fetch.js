/* const API = "https://jsonplaceholder.typicode.com"; */

const API = "https://jsonplaceholder.typicode.com/posts";

async function fetchData(urlApi) {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const date = await fetchData(API);
    console.log(date[1].title)
    return date;
  } catch (err) {
    console.log("error en anonima nooooooo");
  }
})();



const arr = []
setTimeout(()=>{
    console.log(arr)
},5000)

/* 
const arrVacio = [];
d1
.then((res) => res.json())
  .then(posts => {
    arrVacio.push(posts);
    return posts;
  })
  .catch((err) => console.error("ha ocuurido un erros en post"));

async function imprimeArrat(array){
     if(array.length ! = 0){
        await console.log(array)
    }
}
imprimeArrat(arrVacio) */

/* 
fetchData(`${API}/users`)
  .then((response) => response.json())
  .then((users) => {
    console.log(users[1]);
  });

function fetchData(urlApi) {
  return fetch(urlApi);
} */
/* function fetchData(urlApi){
    return fetch(urlApi)
}

fetchData(`${API}`)
.then(response => response.json())
.then(pokemon => {
    console.log(pokemon.results[2])
})
.then(()=>{
    console.log('esta funcionando')
})
.catch(err => {
    console.log('ahhhhh... un error')
}) */
/* 
fetchData(`${API}/users`)
.then(response => response.json())
.then(users => {
    console.log(users[1].address)
    return fetchData(`${API}/users`)
})
 */
