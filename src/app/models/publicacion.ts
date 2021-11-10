import { Usuario } from "./usuario";

export interface Publicacion {
    id:number;
    PublicationName:string;
    PublicationDescription:string;
    Likes:number;
    Date: string;
    UserID: Usuario;
}
