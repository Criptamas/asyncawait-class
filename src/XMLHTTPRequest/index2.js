/*Antes de todo primero instalamos nuestro entorno xmlhttprequest
Este nos sirve para consumir una API en la web o servidor
COmamdo en la terminal: npm i xmlhttprequest 
Una vez ejecutado ese comando en la terminal procedemos aca */


const XMLHttpRequest = require('xmlhttprequest'); //asignamos el xml
const API = 'https://api.escuelajs.co/api/v1'; //Ejemplo de api

/*RECIBIMOS EN PACKAGE JASON Y ENVIAMOS EN PACKAGE JASON */

function fethData(urlApi, callback){
    let xhttp = new XMLHttpRequest(); //referencia a la const de arriba xml
    xhttp.open('GET', urlApi, true); //recurso para abrir la entrada de api osea para poder ejecutar
    xhttp.onreadystatechange = function (event){
        if(xhttp.readyState === 4){
            if(xhttp.status === 200){
                callback(null, JSON.parse(xhttp.resposeText))
            }

        }
        else{
            const error = new Error('Error ' + urlApi)
            return callback(error, null)
        }
        xhttp.send();
    
    }     }