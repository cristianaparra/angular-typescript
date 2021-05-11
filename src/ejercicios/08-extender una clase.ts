/*
    ===== Código de TypeScript =====
*/

class PersonaNormal {

    constructor(
        public nombre: string,
        public direccion: string
        )  
    {}
}
class Heroe extends PersonaNormal {

    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string,
        
        )  
    {
        super(nombreReal,'chile');
    }
}

const ironman = new Heroe('iroman', 45, 'tony');
console.log(ironman)