import { calcularIVA, Producto } from "./06-destructuracion-funcion";
/*
    ===== Código de TypeScript =====
*/


const carritoCompras: Producto[] = [
    {
        desc:'telefono 1',
        precio:120
    },
    {
        desc:'telefono 2',
        precio:500
    },
];

const [total,iva]= calcularIVA(carritoCompras);

console.log('total', total)
console.log('iva', iva)