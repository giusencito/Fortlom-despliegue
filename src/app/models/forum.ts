import { Usuario } from "./usuario";

export interface Forum {
    id:number;
    forumName: string;
    forumDescription:string;
    user:Usuario;
}
