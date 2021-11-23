import { Artist } from "./artist";

export interface Event {
    id:number;
    eventName:string;
    eventDescription:string;
    artist:Artist;
    likes:number;
}
