/*
    ===== Código de TypeScript =====
*/


interface Reproductor {
    volumen: number,
    segundo: number,
    cancion: string,
    detalles:Detalles
}
interface  Detalles {
    autor: string,
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles:{
        autor: 'ed Sheeran',
        anio: 2015
    }
}
const {volumen, segundo, cancion, detalles}= reproductor
const {autor}= detalles


console.log('el volumen actual de:', volumen)
console.log('el segundo actual de:', segundo)
console.log('el cancion actual de:', cancion)
console.log('el autor:', autor)

