//Funcion que se recibira y asignara al callback
function sum(num1, num2,){
    return num1 + num2;

};


function calc(num1, num2,cb){
    return cb(num1, num2); //Aca establecemos los parametros del callback cb
}
/* Aca pasamos a declarar la funcion calc y le asignamos el valor de sus parametros
    A la vez asignamos el valor de los parametros de la funcion cb
    Y dichos parametros son iguales a los de la primera funcion
    Y por orden y logica tienen el valor de num1 y num2 de la funcion calc*/ 
console.log(calc(2, 3, sum))//Aca asignamos el valor de la funcion sum al parametro cb
/* Y de esta manera tenemos el callback realizado*/

//SETTIMEOUT

//Este es un gran ejemplo de un call ya que recibe como parametro a una funcion 

setTimeout(function(){
    consol.log('Hi javascript');
}, 2000/*Tiempo que pasara para ejecutar la function */);

//Other Example


function gretting(name){
    console.log(`Hi ${name}!!!`)
}
/*Ahora bien para una funcion ya establecida que queramos asignar a un setTimeout el valor del argumento se coloca como tercer argumento en el setTimeout; es decir despues del tiempo en mls */
setTimeout(gretting, 2000, 'Juan'); //Asi de tercer parametro asignamos el valor del parametro de la funcion gretting