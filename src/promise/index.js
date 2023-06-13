/*Promise se construye con la palabra reservada promise
 */

const promise = new Promise(function(resolve, reject){ /* los dos argumentos reservados para las promise */
    resolve('Everything Ok!!!'); //regresa si todo esta bien
}); //DE esta manera escribimos

//Example:
const  cows = 9;

const countCows = new Promise(function(resolve, reject){
    if(cows > 10){
        resolve(`We have ${cows} cows on the farm `)
    } else{
        reject('There is no cows on the farm');
    }
}) 


//Asi mostramos la ejecucion de la funcion de arriba
countCows.then((result)=>{
    console.log(result)

}).catch((error)=>{ //Asi mostramos y agarramos los errores para poder trabajar mejor con ellos
        console.log(error);
}).finally(()=>{ //Independientemente del resultado este metodo proporciona el fianl de la operacion
    console.log('Finally')
})

//Then par alas solicitudes anidadas y el catch para el reject
