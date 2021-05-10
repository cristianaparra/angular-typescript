
/*
    ===== Código de TypeScript =====
*/

// tipos arr, obje, interfaces


let habiliadades: string[]=['hola', 'como', 'estas'];

habiliadades.push('tu')

interface Personaje{
    nombre: string;
    hp: number;
    habiliadades: string[];
    puebloNatal?: string;

}
const personaje: Personaje ={
    nombre: 'cristian',
    hp: 200,
    habiliadades:['hola', 'como', 'estas']
}
personaje.puebloNatal='curico'

console.table(personaje)