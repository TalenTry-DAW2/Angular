export interface Respuestas {
    respuesta: string;
    puntuacion: number;
    FInicio: Date | null;
    FFinal: Date | null;
}

// Create a class that implements the Respuestas interface
export class RespuestasClass implements Respuestas {
    respuesta: string = '';
    puntuacion: number = 0;
    FInicio: Date | null = null;
    FFinal: Date | null = null;
}