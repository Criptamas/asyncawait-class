// /*Promise se construye con la palabra reservada promise
//  */

// const promise = new Promise(function(resolve, reject){ /* los dos argumentos reservados para las promise */
//     resolve('Everything Ok!!!'); //regresa si todo esta bien
// }); //DE esta manera escribimos

// //Example:
// const  cows = 9;

// const countCows = new Promise(function(resolve, reject){
//     if(cows > 10){
//         resolve(`We have ${cows} cows on the farm `)
//     } else{
//         reject('There is no cows on the farm');
//     }
// }) 


// //Asi mostramos la ejecucion de la funcion de arriba
// countCows.then((result)=>{
//     console.log(result)

// }).catch((error)=>{ //Asi mostramos y agarramos los errores para poder trabajar mejor con ellos
//         console.log(error);
// }).finally(()=>{ //Independientemente del resultado este metodo proporciona el fianl de la operacion
//     console.log('Finally')
// })

// //Then par alas solicitudes anidadas y el catch para el reject

import fetch from 'node-fetch'; // con este aca lo que hacemos es que traeemos el fetch node que ya intalamos en la terminal
const API = 'https://api.escuelajs.co/api/v1'; //Aca almacenamos la url de la api que vasmos a utilizar


//procedemos con la funcion fetchData
function fetchData(urlApi){
    return fetch(urlApi);

}
fetchData(`${API}/products`)
.then(response => response.json())
.then(products => {
    return fetchData(`${API}/products/${products[0].id}`);

})
.then(response => response.json())
.then(product => {
    return fetchData(`${API}/categories/${product.category.id}`);


})
.then(response => response.json())
.then(category => {
    console.log(category.name);

})
.catch(error => console.log(error))
.finally(()=> console.log('Finally'))


//Esta es la forma mas sencilla de hacer el codigo
fetchData(`${API}`)



//recordemos que en la terminal debemos instalar nodde-fetch
//Comdando: npm i(i abreviado significa install) node-fetch
