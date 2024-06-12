class vehiculo {
    marca;
    modelo;
    anio;

    constructor(marca, modelo, anio) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }
    obtenerInformacion() {
        return "el vehiculo es un " +  this.marca + " " + this.modelo + " del anio " + this.anio;
    }
}
class automovil extends vehiculo {
    color;
    precio;

    constructor(marca, modelo, anio, color, precio) {
        super(marca, modelo, anio);
        this.color = color;
        this.precio = precio;
    }
    
    obtenerInformacion(){
        return super.obtenerInformacion() + " color "+ `${this.color}`+ " y su precio es "+ `${this.precio}`
    }
}
4
const auto1 = new automovil("citroen", "C3", 2017, "blanco", "$20.000.000");

console.log(auto1.obtenerInformacion())
