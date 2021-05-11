/*
    ===== Código de TypeScript =====
*/

function queTipoSOy<T>(arg:T){
    return arg
}

let soyString = queTipoSOy('hola')
let soyNumero = queTipoSOy(100)
let soyBolean = queTipoSOy(true)
let soyArreglo = queTipoSOy([1,2,3,4])
let soyExplicito = queTipoSOy<number>(1)