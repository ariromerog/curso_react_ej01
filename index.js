console.log("start ")

function cuadrados( ...arr ) {
    return result = arr.map(x => x*x)
}

function solopositivos( ...arr ) {
    return result = arr.filter(x => x > 0)
}

function haypositivos( ...arr ) {
    return result = arr.some(x => x > 0)
}

function todospositivos( ...arr ) {
    return result = arr.every(x => x > 0)
}

// paso el array como lista de argumentos solo
// para jugar con el spread... 

const test_cuadrados = cuadrados(1, 2, 3, 4, -5, -6)
const test_solopositivos = solopositivos(1, 2, 3, 4, -5, -6)
const test_haypositivos = haypositivos(1, 2, 3, 4, -5, -6)
const test_todospositivos = todospositivos(1, 2, 3, 4, -5, -6)

console.log( 'test_cuadrados: ' + test_cuadrados )
console.log( 'test_solopositivos: ' + test_solopositivos )
console.log( 'test_haypositivos: ' + test_haypositivos )
console.log( 'test_todospositivos: ' + test_todospositivos )