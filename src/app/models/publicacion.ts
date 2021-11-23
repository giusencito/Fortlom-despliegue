import { Artist } from './artist';
import { Usuario } from "./usuario";

export interface Publicacion {
    id:number;
    publicationName:string;
    publicationDescription:string;
    likes:number;
    date: string;
    artist: Artist;
}
