/* const API = "https://jsonplaceholder.typicode.com"; */

const d1 = fetch("https://jsonplaceholder.typicode.com/posts");
const arrVacio = [];
d1.then((res) => res.json())
  .then(posts => {
    arrVacio.push(posts);
      console.log(posts[3])
    return posts;
  })
  .catch((err) => console.error("ha ocuurido un erros en post"));



setTimeout(() => {
    console.log(arrVacio[0][4].body)
},2000)

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
