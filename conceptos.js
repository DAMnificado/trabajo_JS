// Existen situaciones en la los datos a los que queremos acceder no están en local. Por ejemplo, pueden estar en un fichero que queremos leer, en una base de datos, 
// en una API a la que le estamos haciendo una petición... etc 
// Es aqui cuando nuestro código deja de ser síncrono, los datos no aparecerán al momento y tenemos que lidiar con esto adecuandamente.
// El objeto Promise nos permite manejar este codigo asíncrono.

const data = [{

nombre : 'Pablo',
edad : '21',
cuidad : 'Vigo'

},{

nombre : 'Edu',
edad : '22',
cuidad : 'Vigo'
    
},{

nombre : 'Ana',
edad : '19',
cuidad : 'Pontevedra'
        
},{

nombre : 'Sol',
edad : '23',
cuidad : 'Lugo'
            
}]


function getData() {

return new Promise((resolve , reject) => {

    if(data.length ===0) {
        reject(new Error('Vacío'))
    }
    resolve(data);

})

}

//El "response" que recibe el .then es lo que sea que estemos intentando obtener a través de la Promise, en este caso unos "data" que son unos datos en local
//Si no hay error entra el .then y lo que nos de el resolve
//Si lo hay en el .catch e imprime el mensaje que tengamos en nuestro reject : "Vacío"

getData()
    .then(response)
    .catch((err) => console.error(err.message))



//Con el "async await" hacemos lo mismo que acabamos de hacer arriba, pero se ve de una manera más legible. 
//Parece codigo secuencial, pero es asíncrono

async function fetchingData(){
    const personas = await getData();
    console.log(personas);
}


//Básicamente en la linea 59 guardamos en "personas" los datos que nos devuelve getData(). 
//Envolvemos todo en una función "async" para que sepa con que estamos trabajando, pero en las ultimas versiones no es necesario.
//Nos dice algo así como: "Hey, espera un momento por favor. Esto que voy a hacer puede tardar, no explotes" 
//En este ejemplo no va a tardar nada, porque estamos trabajando con los datos en local, pero la logica es la misma