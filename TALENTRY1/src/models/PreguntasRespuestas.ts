import { Answer } from "./Answer";
import { Question } from "./Question";

export interface PreguntasRespuestas {
    pregunta: Question;
    respuestas: Answer[];
    seleccionada?: string;
}
