/*
    ===== Código de TypeScript =====
*/

interface Producto {
    desc: string,
    precio: number,
}


const tableta: Producto = {
    desc: 'ipad',
    precio: 350,
}
const telefono: Producto = {
    desc: 'nokia',
    precio: 150,
}

function calcularIVA(productos: Producto[]):[number, number] {

    let total = 0;

    productos.forEach(({precio}) => {
        total += precio
    })
    return[ total, total * 0.19]
}

const articulos = [telefono, tableta]
const [iva, total] = calcularIVA(articulos)
console.log('iva: ', iva)
console.log('total: ', total)