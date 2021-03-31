// Desestructuración
// Asignación Desestructurante 
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
}

const { nombre, edad, clave } = persona;

console.log(nombre);
console.log(edad);
console.log(clave);

const useContext = ({nombre, edad, clave, rango = 'Capitán'}) => {
    // const { nombre, edad, clave } = usuario;
    console.log(nombre, edad, clave, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1231,
            lng: -12.3232
        }
    }
}

const {nombreClave, anios,latlng ,latlng:{lat, lng}} = useContext(persona);
// const {lat, lng} = latlng;
console.log(nombreClave, anios);
console.log(latlng, lat, lng);