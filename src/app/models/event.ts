import { Artist } from "./artist";

export interface Event {
    id:number;
    EventName:string;
    EventDescription:string;
    ArtistID:Artist;
    Likes:number;
}
