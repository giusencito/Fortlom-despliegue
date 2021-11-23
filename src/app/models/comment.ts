import { Publicacion } from "./publicacion";
import { Usuario } from "./usuario";

export interface Comment {
    id: number;
    commentDescription: string;
    publication: Publicacion;
    user:Usuario;
    date:string;
}
