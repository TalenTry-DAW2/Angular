import { Answer } from "./Answer";
import { Question } from "./Question";
import { Respuestas } from "./Respuestas";

export interface PreguntasRespuestas {
    pregunta: Question;
    respuestas: Answer[];
    seleccionada: Respuestas;
}
