/*Antes de todo primero instalamos nuestro entorno xmlhttprequest
Este nos sirve para consumir una API en la web o servidor
COmamdo en la terminal: npm i xmlhttprequest 
Una vez ejecutado ese comando en la terminal procedemos aca */


const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; //asignamos el xml
const API = 'https://api.escuelajs.co/api/v1'; //Ejemplo de api

/*RECIBIMOS EN PACKAGE JASON Y ENVIAMOS EN PACKAGE JASON */

function fetchData(urlApi, callback){
    let xhttp = new XMLHttpRequest(); //referencia a la const de arriba xml
    xhttp.open('GET', urlApi, true); //recurso para abrir la entrada de api osea para poder ejecutar
    xhttp.onreadystatechange = function (event){
        if(xhttp.readyState === 4){
            if(xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText))
            }else{
                const error = new Error('Error ' + urlApi)
                return callback(error, null)
            }

        }
        
    
    
    }
    xhttp.send();
     }

     //FETCHDATA

//           Api junto con una direccion especifica y un callback
     fetchData(`${API}/products`, function(error1, data1){

        
        if (error1) return console.log(error1);

        fetchData(`${API}/products/${data1[0].id}`, function(error2, data2){
        
            if (error2) return console.log(error2);
        
            fetchData(`${API}/categories/${data2?.category?.id}`,function (error3, data3) {

                if (error3) return console.log(error3);
                
                console.log(data1[0]);
                console.log(data2.title);
                console.log(data3.name);
            });
     });
    }
    );
