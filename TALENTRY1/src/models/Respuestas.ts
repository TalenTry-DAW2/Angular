export interface Respuestas {
    pregunta: string;
    respuesta: string;
    puntuacion: number;
    FInicio: Date | null;
    FFinal: Date | null;
}

// Create a class that implements the Respuestas interface
export class RespuestasClass implements Respuestas {
    pregunta: string = ' ';
    respuesta: string = ' ';
    puntuacion: number = 0;
    FInicio: Date | null = null;
    FFinal: Date | null = null;
}