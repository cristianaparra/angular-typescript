/*
    ===== Código de TypeScript =====
*/
function sumar(a:string,b:string) {
    return a + b;
}
const resultado = sumar('Parra', 'cristian');

console.log(resultado)


function sumar2(a:number,b:number):string {
    return (a + b).toString();
}
const numero = sumar2(10, 40);

console.log(numero)


interface PersonajeLOR {
    nombre:string;
    pv:number;
    mostrarHP: () => void;
    
}

function curar (personaje : PersonajeLOR, curarX:number):void{
    
    personaje.pv += curarX;
    
}

const nuevoPersonaje: PersonajeLOR={
    nombre:'frodo',
    pv:100,
    mostrarHP() {console.log('hola', this.pv)}

}

