class Alojamiento {
    constructor(id, nombre, shortDescription, precioPorNoche){
        this.id = id;
        this.nombre = nombre;
        this.shortDescription = shortDescription;
        this.precioPorNoche = precioPorNoche;
    }
}

export const alojamientos = [
    new Alojamiento(1,"Hilton", "Cabaña rústica con vista al lago y chimenea, ideal para desconectar.", 80000),
    new Alojamiento (12, "Four Seasons", "Moderno monoambiente cerca de bares y transporte público.", 100000),
    new Alojamiento(123,"Palladium", "Casa luminosa frente al mar, con terraza y parrilla.", 50000),
    new Alojamiento (124, "Mi casa", "Tiny house ecológica rodeada de bosque nativo.", 200000),
    new Alojamiento(125, "La Utn", "Cabaña rústica con vista al lago y chimenea, ideal para desconectar.", 76000),
    new Alojamiento (126, "Estadio Diego Armando Maradona", "Moderno monoambiente cerca de bares y transporte público.", 1000),
    new Alojamiento(127, "La Utn", "Cabaña rústica con vista al lago y chimenea, ideal para desconectar.", 76000),
    new Alojamiento (128, "Estadio Diego Armando Maradona", "Moderno monoambiente cerca de bares y transporte público.", 1000)
]