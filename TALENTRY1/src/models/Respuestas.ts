export interface Respuestas {
    respuesta: string;
    puntuacion: number;
    FInicio: Date;
    FFinal: Date;
    Tiempo: Date;
}

// Create a class that implements the Respuestas interface
export class RespuestasClass implements Respuestas {
    respuesta: string = '';
    puntuacion: number = 0;
    FInicio: Date = new Date();
    FFinal: Date = new Date();
    Tiempo: Date = new Date();
}