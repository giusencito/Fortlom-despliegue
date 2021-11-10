import { Publicacion } from "./publicacion";
import { Usuario } from "./usuario";

export interface Comment {
    id: number;
    CommentDescription: string;
    PublicationID: Publicacion;
    UsuarioId:Usuario;
    Date:string;
}
