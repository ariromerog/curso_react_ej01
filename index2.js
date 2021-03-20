console.log("start 2")


class SerVivo {
    constructor(nombre)  {
        this.nombre = nombre
    }

    caminar(nombre) {
        return "Ahora esta caminando: " + nombre
    }

}

class Persona extends SerVivo {
    moverse() {
        return this.caminar(this.nombre)
    }
}

const dy = new Persona("Daddy Yankee")

console.log( dy.moverse() ) 