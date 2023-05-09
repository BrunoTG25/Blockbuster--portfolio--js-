//Creamos las clases. Los moldes de nuestros objetos
class Cliente{
    constructor(nombre, edad, membresia){
        this.nombre = nombre;
        this.edad = edad;
        this.membresia = membresia;
    }
}

class Pelicula{
    constructor( nombre, genero){
        this.nombre = nombre;
        this.genero = genero;
    }
}

class Alquiler{
    constructor(pelicula, cliente, costo, fecha){
        this.pelicula = pelicula;
        this.cliente = cliente;
        this.costo = Math.round(costo);
        this.fecha = fecha || new Date();
    }
}


//instanciamos los objetos con la palabra reservada new

// clientes
const clienteUno = new Cliente ("Juan", 20, "Gold");
const ClienteDos = new Cliente ("Pedro", 30, "Normal");
const arrayCliente = [clienteUno, ClienteDos];

//peliculas

const peliculaUno = new Pelicula ("El Señor de los Anillos", "Fantasia");
const peliculaDos = new Pelicula ("El Padrino" , "Drama");
const arrayPeliculas = [peliculaUno, peliculaDos];

// alquiler

const alquilerUno = new Alquiler (peliculaUno, clienteUno, 5.68, );
const alquilerDos = new Alquiler (peliculaDos, ClienteDos, 3.25, new Date("may 7 , 2023"));
const arrayAlquileres = [alquilerUno, alquilerDos];



//Tenemos que crear funciones que implementen si la membresia es Gold , el cual va a tener un rango de 3 dias
// o si es comun, el cual tiene 2 dias para devolver la peli

function diasAlquilerSegunMembresia(cliente){
   if(cliente.membresia == "Gold"){
    return 3 
   } else{
    return 2 
   }
}


function peliculasADevolverHoy(alquiler){
    let fechaAlquiler = alquiler.fecha;
    let fechaActual = new Date();
    let diasDeAlquiler = diasAlquilerSegunMembresia(alquiler.cliente);
    fechaAlquiler.setDate(fechaAlquiler.getDate()+ diasDeAlquiler);

    if( fechaAlquiler < fechaActual){
        return `la pelicula ${alquiler.pelicula.nombre} debe devolverse hoy, su costo es de $ ${alquiler.costo}`;

    } else{
        return `la pelicula ${alquiler.pelicula.nombre} no debe devolverse hoy, su costo es de $ ${alquiler.costo}`;

    }
    
        
}


console.log(peliculasADevolverHoy(alquilerUno));
console.log (peliculasADevolverHoy(alquilerDos));
