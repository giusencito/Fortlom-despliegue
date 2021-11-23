import { Artist } from './artist';


export interface Publicacion {
    id:number;
    publicationName:string;
    publicationDescription:string;
    likes:number;
    date: string;
    artist: Artist;
}
