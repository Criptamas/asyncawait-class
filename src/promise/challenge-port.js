import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';
//LO que haremos sera post data osea agregar datos 
function postData (urlApi, data){
    const response = fetch(urlApi,{
        method: 'POST',
        mode: 'cors', //LOs permisos que va a tener y por defecto siempre es cors
        credentials: 'same-origin', //Las credenciales que va a tener pueden ser opcionales El estandar de que si no hay una autenticasion no hay ningun problema'
        headers: {
            'content-Type': 'application/json'
        },
        body: JSON.stringify(data) //Los transformamos en texto
    
    });
    return response;
}

const data = {
    "title": "New Product Course", 
     "price": 999,
     "description": "A description",
     "categoryId": 1,
     "images": [
        "https://placeimg.com/640/480/any" 
    ]
};

postData(`${API}/products`, data)
.then(response => response.json())
.then(data => console.log(data));